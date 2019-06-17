const Events = require('../helpers/events.js');
const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/requests.js');
const ManageElements = require('../helpers/manage_elements.js');
const Display = require('./display.js')
const BloodEagleView = require('./blood_eagle.js')
const ValkyriesView = require('./valkyries.js')
const RagnarokView = require('./ragnarok.js')

const ValhallaView = function(outContainer){
  this.outContainer = outContainer;
  this.body = document.querySelector('body')
  this.container = ManageElements.div('new-container');
  this.returnHarBtn = document.querySelector('#return-to-top')
}

ValhallaView.prototype.displayDead = function () {
  this.outContainer.id = 'hide';
  this.returnHarBtn.id = 'hide';
  ManageElements.top();
  PubSub.subscribe(Events.valhalla, (evt) => {
    this.createOdin(evt.detail[0]);
    this.createVikings(evt.detail);
    this.radios(['valkyries', 'bloodEagle', 'ragnarok']);
  })
  this.returnFromValhala();
};

ValhallaView.prototype.createOdin = function (odin) {
  const odinsDiv = ManageElements.div('odins-div');
  this.renderHead(odin, odinsDiv);
  this.renderDesc(odin.description, odinsDiv);
};

ValhallaView.prototype.renderHead = function (odin, container) {
  const odinName = ManageElements.head('h1', odin.name, 'odin-name');
  const odinTitle = ManageElements.head('h2', odin.title, 'odin-title')
  const odinAka = ManageElements.head('h3', odin.aka, 'odin-aka')
  ManageElements.append([odinName, odinTitle, odinAka], container);
  ManageElements.append([container], this.container)
};

ValhallaView.prototype.renderDesc = function (desc, container) {
  const odinDesc = ManageElements.para(desc, 'odin-desc');
  ManageElements.append([odinDesc], container);
};

ValhallaView.prototype.createVikings = function (vikings) {
  const vikingDiv = ManageElements.div('viking-valhalla')
  for (let x = 1; x < vikings.length; x++){
    const newDiv = ManageElements.div('inner-vik-valhalla');
    const newHead = ManageElements.head('h1', vikings[x].name, 'viking-name-valhalla');
    ManageElements.append([newHead], newDiv)
    vikings[x].famousFor.forEach((accomp) => {
      const accompName = ManageElements.head('h1', accomp.name, 'accomplishment-valhalla')
      const accompDesc = ManageElements.para(accomp.description, 'accomplishment-desc-valhalla')
      const wikiBtn = ManageElements.btn('search', 'search', 'search wiki')
      ManageElements.append([accompName, accompDesc, wikiBtn], newDiv)
      ManageElements.append([newDiv], vikingDiv)
      ManageElements.listen('click', wikiBtn, () => {
        const wikiDiv = ManageElements.div('wiki-div');
        ManageElements.append([wikiDiv], newDiv)
        wikiBtn.id = 'hide';
        const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${vikings[x].name.toLowerCase()}`
        const rolloUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=rollo`
        const bjornUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Björn%20Ironside`;
        if (vikings[x].name.includes('Rollo')){
          const request = new Request(rolloUrl);
          request.get()
          .then((data) => {
            const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')
            const result = data.query.search[0].snippet;
            const resultContent = result.replace(/(<([^>]+)>)/ig,"");
            const newPara = ManageElements.para(resultContent, 'wiki-para')
            ManageElements.append([wikiHead, newPara], wikiDiv)
          })
        }
        else if (vikings[x].name.includes('Bjorn')){
          const request = new Request(bjornUrl);
          request.get()
          .then((data) => {
            const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')
            const result = data.query.search[0].snippet;
            // this is seriously cheating but the returned result only contains so many words and I dont have a clue how to get more info.
            const resultContent = result.replace(/(<([^>]+)>)/ig,"") + ' was a historical Viking chief who also figures in late sources as a son of Ragnar Lodbrok and a legendary king of Sweden.';
            const newPara = ManageElements.para(resultContent, 'wiki-para')
            ManageElements.append([wikiHead, newPara], wikiDiv)
          })
        }
        else {
          const request = new Request(url);
          request.get()
          .then((data) => {
            if (data[2][0] === ""){
              return ;
            }
            else {
              const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')
              const newPara = ManageElements.para(data[2][0], 'wiki-para')
              ManageElements.append([wikiHead, newPara], wikiDiv)
            }
          })
        }
      })
    })
  }
  ManageElements.append([vikingDiv], this.container)
};

ValhallaView.prototype.radios = function (values){
  const storiesHead = ManageElements.head('h2', 'Some stories of the Viking', 'storyTimeHeader')
  ManageElements.append([storiesHead], this.container)
  const storyContainer = ManageElements.div('storyContainer');

  values.forEach((value) => {
    const radioButton = ManageElements.input('radio', 'stories', 'stories');
    const radioLabel = ManageElements.para(`${value}:`, 'radio-text')
    radioButton.value = value;
    ManageElements.append([radioButton], radioLabel)
    ManageElements.append([radioLabel], this.container)
    radioButton.addEventListener('change', (evt) => {
    })
    ManageElements.listen('change', radioButton, (evt) => {
      if (evt.target.value === 'valkyries'){
        storyContainer.innerHTML = '';
        this.handleValkyries(storyContainer);
      }
      else if (evt.target.value === 'bloodEagle'){
        storyContainer.innerHTML = '';
        this.handleBloodEagle(storyContainer);
      }
      else if (evt.target.value === 'ragnarok'){
        storyContainer.innerHTML = '';
        this.handleRagnarok(storyContainer);
      }
    })
  })

};

ValhallaView.prototype.handleRagnarok = function (container) {
  container.id = 'ragnarok'
  ManageElements.append([container], this.container);
  const ragnarokView = new RagnarokView(container);
  ragnarokView.renderStory();
};

ValhallaView.prototype.handleBloodEagle = function (container) {
  container.id = 'bloodEagle'
  ManageElements.append([container], this.container);
  const bloodEagleView = new BloodEagleView(container);
  bloodEagleView.renderStory();
};

ValhallaView.prototype.handleValkyries = function (container) {
  container.id = 'valkyries'
  ManageElements.append([container], this.container);
  const valkyriesView = new ValkyriesView(container);
  valkyriesView.renderStory();
};

ValhallaView.prototype.returnFromValhala = function () {
  const returnBtn = ManageElements.btn('return', 'return-from-valhalla')
  const returnTxt = ManageElements.para('return from valhalla', 'return-valhalla-text')
  ManageElements.append([returnBtn, returnTxt], this.container)
  ManageElements.append([this.container], this.body)

  ManageElements.listen('click', returnBtn, () => {
    this.container.id = 'hide';
    this.outContainer.id = 'overall-container'
    this.returnHarBtn.id = 'return-to-top'
  })
};
module.exports = ValhallaView;
