const Events = require('../helpers/events.js');
const PubSub = require('../helpers/pub_sub.js');
const ManageElements = require('../helpers/manage_elements.js');
const VikingView = require('./viking_view.js');
const GodsView = require('./gods_view.js');

const Display = function(vikingContainer, godContainer){
  this.vikingContainer = vikingContainer;
  this.godContainer = godContainer;
};

Display.prototype.bindEvents = function () {
  PubSub.subscribe(Events.loadVikings, (event) => {
    if (event.detail.length !== 0){
      this.populateVikings(event.detail)
    }
    else {
      this.vikingContainer.innerHTML = '';
      const deathOfVikings = ManageElements.head('h1', 'All Vikings have gone to join Odin in the Great Halls')
      ManageElements.append([deathOfVikings], this.vikingContainer)
    }
  })
  PubSub.subscribe(Events.loadGods, (event) => {
    this.populateGods(event.detail)
  })
};

Display.prototype.populateVikings = function (vikings) {
  const vikingView = new VikingView(this.vikingContainer);
  vikingView.renderVikings(vikings);
};

Display.prototype.populateGods = function (gods) {
  const godsView = new GodsView(this.godContainer);
  godsView.renderGods(gods);
};



module.exports = Display;
