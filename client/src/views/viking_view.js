const ManageElements =  require('../helpers/manage_elements.js');
const PubSub =  require('../helpers/pub_sub.js');
const Events =  require('../helpers/events.js');
const ValhallaView =  require('./valhalla_view.js');


const VikingView = function (vikingContainer) {
  this.container = vikingContainer;
  this.battleDiv;
  this.vikings;
}

VikingView.prototype.renderVikings = function (vikings) {
  this.container.innerHTML = '';
  vikings.forEach((viking) => {
    const containerDiv = ManageElements.div('viking-div')
    const innerContainerDiv = ManageElements.div('viking-div-inner')
    this.createHead(viking.name, containerDiv);
    this.addImages(viking, containerDiv)
    this.createParents(viking.parents, containerDiv)
    const displayMore = ManageElements.btn(`more`, viking.name, 'show accomplishments')
    displayMore.className = 'displayMoreBtn'
    const valhalla = ManageElements.btn(viking._id, 'valhalla', 'move to valhalla')
    ManageElements.append([innerContainerDiv], this.container)
    ManageElements.append([containerDiv], innerContainerDiv)
    ManageElements.append([displayMore, valhalla], containerDiv)
    valhalla.addEventListener('click', (event) => {
      const container = document.querySelector('#overall-container');
      const valhallaView = new ValhallaView(container)
      PubSub.publish(Events.moveToValhalla, event.target.value)
      valhallaView.displayDead(event.target.value);
    })
    ManageElements.listen('click', displayMore, (event) => {
      const buttons = document.querySelectorAll('.displayMoreBtn');
      buttons.forEach((button) => {
        if(button.id !== displayMore.id && button.value === 'less'){
          button.textContent = 'show accomplishments'
          button.value = 'more';
          this.battleDiv.innerHTML = '';
        }
      })
      if (event.target.value === `more`){
        displayMore.value = 'less';
        displayMore.textContent = 'show less'
        this.createDescription(viking, containerDiv, event.target.value, displayMore);
      }
      else{
        displayMore.value = 'more';
        displayMore.textContent = 'show accomplishments'
        this.battleDiv.innerHTML = '';
      }
    })
  });
};

VikingView.prototype.createHead = function (name, container) {
  const newHead = ManageElements.head('h1', name, 'viking-name');
  ManageElements.append([newHead], container);
};

VikingView.prototype.createParents = function (parents, container) {
  const father = ManageElements.para()
  father.id = 'parent-names'
  father.innerHTML = `<span>Father: </span>${parents[0]}`
  ManageElements.append([father], container)
  const mother = ManageElements.para()
  mother.id = 'parent-names'
  mother.innerHTML = `<span>Mother: </span>${parents[1]}`
  ManageElements.append([mother], container)
};

VikingView.prototype.createDescription = function (viking, container, value, button) {
  if (this.battleDiv){
    this.battleDiv.innerHTML = '';
  }
  this.battleDiv = ManageElements.div('battle-div')
  ManageElements.append([this.battleDiv], container)
  let addBattle;
  viking.famousFor.forEach((description) => {
    const newHead = ManageElements.head('h1', description.name, 'battle-head');
    const newDesc = ManageElements.para(description.description, 'battle-description')
    addBattle = ManageElements.btn('add', 'add-battle-button', 'add accomplishment')
    ManageElements.listen('click', addBattle, (event) => {
      this.addBattleForm(viking, this.battleDiv, value, button)
      addBattle.id = 'hide';
    })
    ManageElements.append([newHead, newDesc], this.battleDiv)
  })
  ManageElements.append([addBattle], this.battleDiv)
};

VikingView.prototype.addBattleForm = function (viking, container, value, button) {
  const inputDiv = ManageElements.div('add-battle-div');
  const form = ManageElements.form('newBattleForm')
  const nameLabel = ManageElements.label('Accomplishment Name', 'battleName', 'battleName')
  nameLabel.innerHTML = nameLabel.textContent + '<br><br>'
  const nameInput = ManageElements.input('text', 'inputBattleName', 'inputBattleName')
  nameInput.setAttribute( "autocomplete", "off" );
  const descLabel = ManageElements.label('Accomplishment Description', 'battleDesc', 'battleDesc')
  descLabel.innerHTML = '<br><br>' + descLabel.textContent + '<br><br>'
  const descInput = document.createElement('textarea')
  descInput.rows = '10'
  descInput.cols = '50'
  descInput.id = 'textArea'
  const submitBtn = ManageElements.input('submit', 'add-battle-submit');
  const br = ManageElements.br();
  ManageElements.append([form], inputDiv)
  ManageElements.append([nameInput], nameLabel);
  ManageElements.append([descInput], descLabel);
  ManageElements.append([nameLabel, descLabel, br, submitBtn], form)
  ManageElements.append([inputDiv], container)
  ManageElements.listen('submit', form, (event) => {
    event.preventDefault()
    const battleName = event.target.inputBattleName.value;
    const battleDesc = event.target.textArea.value;
    const famousForObj = {
      name: battleName,
      description: battleDesc
    }
    viking.famousFor.push(famousForObj)
    PubSub.publish(Events.updateViking, viking)
    form.id = 'hide'
    this.battleDiv.innerHTML = '';
    button.value = 'more';
    button.textContent = 'show accomplishments'
  })
};

VikingView.prototype.addImages = function(viking, container){
  const image = ManageElements.img(`./images/vikings/${viking.name}.png`, 'image', 275, 350);
  ManageElements.append([image], container)
};

module.exports = VikingView;
