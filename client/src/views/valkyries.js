const ManageElements = require('../helpers/manage_elements.js')
const Request = require('../helpers/requests.js')

const ValkyriesView = function(container){
  this.container = container;
  this.values = ["page1", "page2", "page3", "page4"]
  this.request = new Request('http://localhost:3000/api/stories')
}

ValkyriesView.prototype.renderStory = function () {
  this.request.get()
  .then((resp) => {
    const welcome = ManageElements.para(resp[2].valkyries.welcome, 'welcome-para-story');
    this.addRadios(this.values)
    ManageElements.append([welcome], this.container)
  })
};

ValkyriesView.prototype.addRadios = function (values) {
  let pages = ManageElements.list('pages');
  values.forEach((val) => {
    const page = ManageElements.listItem(val, val);
    page.style.color = 'rgba(255,255,255,0.6)';
    ManageElements.append([page], pages)
    ManageElements.listen('click', page, (evt) => {
      if (evt.target.id === 'page1'){
        this.pageOne();
      }
      else if (evt.target.id === 'page2'){
        this.pageTwo();
      }
      else if (evt.target.id === 'page3'){
        this.pageThree();
      }
      else if (evt.target.id === 'page4'){
        this.pageFour();
      }
    })
  })
  ManageElements.append([pages], this.container)
};


ValkyriesView.prototype.pageOne = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageOne = ManageElements.div('pageOneDiv');
    const para = ManageElements.para(resp[2].valkyries.page1)
    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries1.png', 'valkyrie_image', 700, 350);
    ManageElements.append([para, valkyrieImg], pageOne)
    ManageElements.append([pageOne], this.container);
  })
};

ValkyriesView.prototype.pageTwo = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageTwo = ManageElements.div('pageTwoDiv');
    const para = ManageElements.para(resp[2].valkyries.page2)
    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries2.jpg', 'valkyrie_image', 700, 350);
    ManageElements.append([para, valkyrieImg], pageTwo)
    ManageElements.append([pageTwo], this.container);
  })
};

ValkyriesView.prototype.pageThree = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageThree = ManageElements.div('pageThreeDiv');
    const para = ManageElements.para(resp[2].valkyries.page3)
    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries3.jpg', 'valkyrie_image', 700, 350);
    ManageElements.append([para, valkyrieImg], pageThree)
    ManageElements.append([pageThree], this.container);
  })
};

ValkyriesView.prototype.pageFour = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageFour = ManageElements.div('pageFourDiv');
    const para = ManageElements.para(resp[2].valkyries.page4)
    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries4.jpg', 'valkyrie_image', 700, 700);
    ManageElements.append([para, valkyrieImg], pageFour)
    ManageElements.append([pageFour], this.container);
  })
};

module.exports = ValkyriesView;
