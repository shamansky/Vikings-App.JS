const ManageElements = require('../helpers/manage_elements.js')
const Request = require('../helpers/requests.js')

const BloodEagleView = function(container){
  this.container = container;
  this.values = ["page1", "page2", "page3", "page4"]
  this.request = new Request('http://localhost:3000/api/stories')

}

BloodEagleView.prototype.renderStory = function () {
  this.request.get()
  .then((resp) => {
    const welcome = ManageElements.para(resp[1].bloodEagle.welcome, 'welcome-para-story');
    this.addRadios(this.values)
    ManageElements.append([welcome], this.container);
  })
};

BloodEagleView.prototype.addRadios = function (values) {
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

BloodEagleView.prototype.pageOne = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageOne = ManageElements.div('pageOneDiv');
    const para = ManageElements.para(resp[1].bloodEagle.page1, 'storyTimePara')
    ManageElements.append([para], pageOne)
    ManageElements.append([pageOne], this.container);
  })
};

BloodEagleView.prototype.pageTwo = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageTwo = ManageElements.div('pageTwoDiv');
    const para = ManageElements.para(resp[1].bloodEagle.page2, 'storyTimePara')
    const bloodEagleVid = ManageElements.vid()
    bloodEagleVid.width = 560;
    bloodEagleVid.height = 315;
    bloodEagleVid.src = 'https://www.youtube.com/embed/ZwV3Y9GjOAQ';
    bloodEagleVid.frameborder = 0;
    bloodEagleVid.allow = 'accelerometer';
    ManageElements.append([para, bloodEagleVid], pageTwo)
    ManageElements.append([pageTwo], this.container);
  })
};

BloodEagleView.prototype.pageThree = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageThree = ManageElements.div('pageThreeDiv');
    const para = ManageElements.para(resp[1].bloodEagle.page3, 'storyTimePara')
    ManageElements.append([para], pageThree)
    ManageElements.append([pageThree], this.container);
  })
};

BloodEagleView.prototype.pageFour = function () {
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
    const pageFour = ManageElements.div('pageFourDiv');
    const para = ManageElements.para(resp[1].bloodEagle.page4, 'storyTimePara')
    ManageElements.append([para], pageFour)
    ManageElements.append([pageFour], this.container);
  })
};


module.exports = BloodEagleView;
