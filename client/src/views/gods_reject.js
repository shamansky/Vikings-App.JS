const ManageElements = require('../helpers/manage_elements.js')

const GodReject = function(container){
  this.container = container;
  this.returnTop = document.querySelector('#return-to-top')
}

GodReject.prototype.yDeleteMe = function (god) {
  this.container.id = 'hide';
  this.returnTop.id = 'hide'
  const body = document.querySelector('body');
  body.id = 'godsReject';
  const rejectContainer = ManageElements.div('GodReject');
  const cantDelete = ManageElements.head('h1', `YOU CANNOT DELETE ${god.name.toUpperCase()}!`, 'godRejectHead')
  const godDeletesYou = ManageElements.head('h2', `ONLY ${god.name.toUpperCase()} CAN DELETE YOU!`, 'godRejectHeadSub');
  const nightKing = ManageElements.img('./images/gods/theNightKing.jpg', 'nightKing', 300, 400);
  ManageElements.append([cantDelete, nightKing, godDeletesYou], rejectContainer)
  this.addReturnbtn(rejectContainer, body);
  ManageElements.append([rejectContainer], body);
};

GodReject.prototype.addReturnbtn = function (container, body) {
  const returnBtn = ManageElements.btn('return', 'returnBtn', 'go back')
  ManageElements.append([returnBtn], container)
  ManageElements.listen('click', returnBtn, () => {
    this.container.id = 'overall-container'
    container.id = 'hide';
    body.id = "body"
    this.returnTop.id = 'return-to-top'
  })
};

module.exports = GodReject;
