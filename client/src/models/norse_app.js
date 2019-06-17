const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/requests.js');
const Events = require('../helpers/events.js');
const ManageElements = require('../helpers/manage_elements.js')

const NorseApp = function(){
  this.request1 = new Request('/api/gods');
  this.request2 = new Request('/api/vikings');
  this.request3 = new Request('/api/valhalla');
  this.request4 = new Request('/api/stories');
};



NorseApp.prototype.bindEvents = function () {
  PubSub.subscribe(Events.updateViking, (evt) => {
    this.putViking(evt.detail)
  })
  PubSub.subscribe(Events.moveToValhalla, (evt) => {
    this.postToValhalla(evt.detail)
    this.deleteViking(evt.detail)
  })
};

NorseApp.prototype.getValhalla = function () {
  this.request3.get()
  .then((valhallaVikings) => {
    PubSub.publish(Events.valhalla, valhallaVikings);
  })
};

NorseApp.prototype.deleteViking = function (vikID) {
  this.request2.delete(vikID)
  .then((norseAppItems) => {
    PubSub.publish(Events.loadVikings, norseAppItems)
  })
};

NorseApp.prototype.getGods = function(){
  this.request1.get()
  .then((norseAppItems) => {
    PubSub.publish(Events.loadGods, norseAppItems);
  })
  .catch(console.error);
}

NorseApp.prototype.getVikings = function(){
  this.request2.get()
  .then((norseAppItems) => {
    PubSub.publish(Events.loadVikings, norseAppItems);
  })
  .catch(console.error);
}

NorseApp.prototype.getStories = function(){
  this.request4.get()
  .then((stories) => {
    PubSub.publish(Events.loadStories, stories);
  })
}

NorseApp.prototype.putViking = function (details) {
  this.request2.put(details._id, details.famousFor)
  .then((vikings) => {
    PubSub.publish(Events.loadVikings, vikings)
  })
};

NorseApp.prototype.postToValhalla = function (vikID) {
  this.request2.show(vikID)
  .then((viking) => {
    this.request3.post(viking)
    .then((vikings) => {
      PubSub.publish(Events.valhalla, vikings)
    })
  })
};

module.exports = NorseApp;
