const NorseApp = require('./models/norse_app.js');
const Display = require('./views/display.js');
const ManageElements =  require('./helpers/manage_elements.js');
const Events = require('./helpers/events.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');
  const noreseApp = new NorseApp();
  noreseApp.bindEvents()
  const vikingContainer = document.querySelector('#vikingContainer');
  const godContainer = document.querySelector('#godContainer');
  const display = new Display(vikingContainer, godContainer);
  display.bindEvents()
  noreseApp.getGods();
  noreseApp.getVikings();
  noreseApp.getStories();

})
