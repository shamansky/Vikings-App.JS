const ManageElements = require('../helpers/manage_elements.js');
const Request = require('../helpers/requests.js')


const RagnarokView = function(container){
  this.container = container;
  this.values = ["page1", "page2", "page3"]
  this.request = new Request('http://localhost:3000/api/stories')
}

RagnarokView .prototype.renderStory = function(){
  this.request.get()
  .then((resp) => {
    const welcome = ManageElements.para(resp[0].ragnarok.welcome, 'welcome-para-story');
    this.addRadios(this.values)
    ManageElements.append([welcome], this.container)
  })
};

RagnarokView.prototype.addRadios = function (values){
  let pages = ManageElements.list('pages');
  values.forEach((val) => {
    const page = ManageElements.listItem(val, val);
    page.style.color = 'rgba(255,255,255,0.6)';
    ManageElements.append([page], pages)
    ManageElements.listen('click', page, (event) => {
      if (event.target.id === 'page1'){
        this.pageOne();
      }
      else if (event.target.id === 'page2'){
        this.pageTwo();
      }
      else if (event.target.id === 'page3') {
        this.pageThree();
      }
    })
  })
  ManageElements.append([pages], this.container)
};

RagnarokView.prototype.pageOne = function(){
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
  const pageOne = ManageElements.div('pageOneDiv');
  const para = ManageElements.para(resp[0].ragnarok.page1, 'storyTimePara');
  const ragnarokImg = ManageElements.img('../images/ragnarok/image1.png', 'ragnarok_image', 700, 350);
  ManageElements.append([para, ragnarokImg], pageOne)
  ManageElements.append([pageOne], this.container);
  })
};

RagnarokView.prototype.pageTwo = function(){
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
  const pageTwo = ManageElements.div('pageTwoDiv');
  const para = ManageElements.para(resp[0].ragnarok.page2, 'storyTimePara');
  const ragnarokImg = ManageElements.img('../images/ragnarok/image2.png', 'ragnarok_image', 700, 350);
  ManageElements.append([para, ragnarokImg], pageTwo)
  ManageElements.append([pageTwo], this.container);
  })
};

RagnarokView.prototype.pageThree = function(){
  this.container.innerHTML = '';
  this.addRadios(this.values);
  this.request.get()
  .then((resp) => {
  const pageThree = ManageElements.div('pageThreeDiv');
  const para = ManageElements.para(resp[0].ragnarok.page3, 'storyTimePara');
  const ragnarokImg = ManageElements.img('../images/ragnarok/image3.png', 'ragnarok_image', 700, 350);
  ManageElements.append([para, ragnarokImg], pageThree)
  ManageElements.append([pageThree], this.container);
  })
};

module.exports = RagnarokView;
