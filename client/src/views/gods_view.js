const ManageElements = require('../helpers/manage_elements.js');
const NorseApp = require('../models/norse_app.js');
const PubSub = require('../helpers/pub_sub.js');
const Events = require('../helpers/events.js');
const GodReject = require('./gods_reject.js');
const ValhallaView = require('./valhalla_view.js');


const GodsView = function(godContainer){
  this.container = godContainer;
  this.gods;
  this.descriptionDiv;
  this.odinsLogin;
}


GodsView.prototype.renderGods = function (gods) {
  gods.forEach((god) => {
    const containerDiv = ManageElements.div('god-div')
    const innerContainerDiv = ManageElements.div('god-div-inner')
    this.createHead(god.name, containerDiv)
    this.createAka(god.aka, containerDiv)
    this.addImages(god, containerDiv)
    this.createTitle(god.title, containerDiv)
    const displayMore = ManageElements.btn('more', god.name, 'show more')
    displayMore.className = 'godShowMoreLessBtn'
    ManageElements.append([innerContainerDiv], this.container)
    ManageElements.append([containerDiv], innerContainerDiv)
    ManageElements.append([displayMore], containerDiv)
    this.odinLoginBtn(god, containerDiv)
    this.deleteButton(god, containerDiv)
    ManageElements.listen('click', displayMore, (event) => {
      const buttons = document.querySelectorAll('.godShowMoreLessBtn')
      buttons.forEach((button) => {
        if(button.id !== displayMore.id && button.value === 'less'){
          if (this.odinsLogin.style.marginTop !== '60px'){
            this.odinsLogin.style.marginTop = '60px'
          }
          button.textContent = 'show more'
          button.value = 'more';
          this.descriptionDiv.innerHTML = '';
        }
      })
      if (event.target.value === 'more'){
        if (event.target.id === 'Odin'){
          this.odinsLogin.style.marginTop = '430px'
        }

        displayMore.value = 'less';
        displayMore.textContent = 'show less'
        this.createDescription(god, innerContainerDiv, event.target.value);


      }
      else{
        this.odinsLogin.style.marginTop = '60px'
        displayMore.value = 'more';
        displayMore.textContent = 'show more'
        this.descriptionDiv.innerHTML = ''
      }
    })
  })
};

GodsView.prototype.createDescription = function (god, container, value, button) {
  if (this.descriptionDiv){
    this.descriptionDiv.innerHTML = '';
  }
  this.descriptionDiv = ManageElements.para(god.description, 'god-description')
  ManageElements.append([this.descriptionDiv], container)
};

GodsView.prototype.addImages = function (god, container) {
  const image = ManageElements.img(`./images/gods/${god.name}.jpg`, 'image', 275, 350);
  ManageElements.append([image], container)
};

GodsView.prototype.odinLoginBtn = function (god, container) {
  if (god.name.toLowerCase() === 'odin'){
    this.odinsLogin = ManageElements.btn('login', 'odin-login-btn')
    const hiddenLogin = document.querySelector('#valhallButtonHidden');
    const loginButtons = [this.odinsLogin, hiddenLogin];
    const btnText = ManageElements.para('odins login', 'login-text')
    ManageElements.append([btnText], this.odinsLogin)
    ManageElements.append([this.odinsLogin], container)
    loginButtons.forEach((btn) => {
      ManageElements.listen('click', btn, () => {
        const valContainer = document.querySelector('#overall-container');
        const norseApp = new NorseApp();
        norseApp.getValhalla();
        const valhalla = new ValhallaView(valContainer);
        valhalla.displayDead();
      })
    })
  }
};

GodsView.prototype.deleteButton = function (god, container) {
  const deleteBtn = ManageElements.btn('delete', 'deleteBtn', 'delete god')
  ManageElements.append([deleteBtn], container)
  ManageElements.listen('click', deleteBtn, (event) => {
    ManageElements.top();
    const overallCont = document.querySelector('#overall-container');
    const rejectGod = new GodReject(overallCont);
    rejectGod.yDeleteMe(god)
  })
};


GodsView.prototype.createHead = function (name, container) {
  const newHead = ManageElements.head('h1', name, 'god-name');
  ManageElements.append([newHead], container)
};

GodsView.prototype.createAka = function (aka, container) {
  const godAka = ManageElements.para(aka, 'god-aka')
  ManageElements.append([godAka], container)
};


GodsView.prototype.createTitle = function (title, container) {
  const godTitle = ManageElements.para(title, 'title')
  ManageElements.append([godTitle], container)
};





module.exports = GodsView;
