/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NorseApp = __webpack_require__(/*! ./models/norse_app.js */ \"./client/src/models/norse_app.js\");\nconst Display = __webpack_require__(/*! ./views/display.js */ \"./client/src/views/display.js\");\nconst ManageElements =  __webpack_require__(/*! ./helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst Events = __webpack_require__(/*! ./helpers/events.js */ \"./client/src/helpers/events.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('js loaded');\n  const noreseApp = new NorseApp();\n  noreseApp.bindEvents()\n  const vikingContainer = document.querySelector('#vikingContainer');\n  const godContainer = document.querySelector('#godContainer');\n  const display = new Display(vikingContainer, godContainer);\n  display.bindEvents()\n  noreseApp.getGods();\n  noreseApp.getVikings();\n  noreseApp.getStories();\n\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/events.js":
/*!**************************************!*\
  !*** ./client/src/helpers/events.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Events = {\n  loadVikings: 'norseApp:vikings-loaded',\n  loadGods: 'norseApp:gods-loaded',\n  updateViking: 'VikingView:update-submitted-viking-details',\n  moveToValhalla: 'VikingView:delete-viking-click',\n  valhalla: 'Valhalla-loaded',\n  loadStories: 'norseApp:stories-loaded'\n}\n\nmodule.exports = Events;\n\n\n//# sourceURL=webpack:///./client/src/helpers/events.js?");

/***/ }),

/***/ "./client/src/helpers/manage_elements.js":
/*!***********************************************!*\
  !*** ./client/src/helpers/manage_elements.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ManageElements = {\n  div: (id) => {\n    const newDiv = document.createElement('div');\n    newDiv.id = id;\n    return newDiv;\n  },\n  head: (element, textContent, id) => {\n    const newHead = document.createElement(element);\n    newHead.id = id;\n    newHead.textContent = textContent;\n    return newHead;\n  },\n  para: (textContent, id) => {\n    const newPara = document.createElement('p');\n    newPara.textContent = textContent;\n    newPara.id = id;\n    return newPara;\n  },\n  btn: (value, id, textContent) => {\n    const newBtn = document.createElement('button');\n    newBtn.id = id;\n    newBtn.value = value;\n    newBtn.textContent = textContent;\n    return newBtn;\n  },\n  vid: () => {\n    const video = document.createElement('iframe');\n    return video;\n  },\n  label: (textContent, name, id) => {\n    const newLab = document.createElement('label');\n    newLab.textContent = textContent;\n    newLab.for = name;\n    newLab.id = id;\n    return newLab;\n  },\n  input: (type, id, name) => {\n    const newInput = document.createElement('input');\n    newInput.id = id;\n    newInput.name = name;\n    newInput.type = type;\n    return newInput;\n  },\n  link: (href) => {\n    const newLink = document.createElement('a')\n    newLink.href = href;\n    return newLink;\n  },\n  form: (id) => {\n    const newForm = document.createElement('form')\n    newForm.id = id;\n    return newForm;\n  },\n  img: (src, id, w, h) => {\n    const newImg = document.createElement('img');\n    newImg.src = src;\n    newImg.id = id;\n    newImg.width = w;\n    newImg.height = h;\n    return newImg;\n  },\n  br: () => {\n    const br = document.createElement('br');\n    return br\n  },\n  append: (elements, parent) => {\n    elements.forEach((element) => {\n      parent.appendChild(element)\n    })\n  },\n  list: (id) => {\n    const newList = document.createElement('ul')\n    newList.id = id;\n    return newList;\n  },\n  listItem: (id, textContent) => {\n    const newItem = document.createElement('li');\n    newItem.id = id;\n    newItem.textContent = textContent;\n    return newItem;\n  },\n  listen: (event, element, func) => {\n    element.addEventListener(event, func)\n  },\n  top: () => {\n    document.documentElement.scrollTop = 0;\n  }\n}\n\n\n\nmodule.exports = ManageElements;\n\n\n//# sourceURL=webpack:///./client/src/helpers/manage_elements.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish:  (channel, payload) => {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/requests.js":
/*!****************************************!*\
  !*** ./client/src/helpers/requests.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url){\n  this.url = url;\n};\n\nRequest.prototype.get = function(){\n  return fetch(this.url)\n  .then((response) => response.json());\n};\n\nRequest.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type': 'application/json'}\n  })\n  .then((response) => response.json())\n};\n\nRequest.prototype.show = function (id) {\n  return fetch(`${this.url}/${id}`)\n    .then((response) => response.json());\n};\n\nRequest.prototype.put = function (id, payload) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'PUT',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type': 'application/json'}\n  })\n  .then((response) => response.json())\n};\n\nRequest.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n  .then((response) => response.json())\n};\n\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/helpers/requests.js?");

/***/ }),

/***/ "./client/src/models/norse_app.js":
/*!****************************************!*\
  !*** ./client/src/models/norse_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/requests.js */ \"./client/src/helpers/requests.js\");\nconst Events = __webpack_require__(/*! ../helpers/events.js */ \"./client/src/helpers/events.js\");\nconst ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\")\n\nconst NorseApp = function(){\n  this.request1 = new Request('/api/gods');\n  this.request2 = new Request('/api/vikings');\n  this.request3 = new Request('/api/valhalla');\n  this.request4 = new Request('/api/stories');\n};\n\n\n\nNorseApp.prototype.bindEvents = function () {\n  PubSub.subscribe(Events.updateViking, (evt) => {\n    this.putViking(evt.detail)\n  })\n  PubSub.subscribe(Events.moveToValhalla, (evt) => {\n    this.postToValhalla(evt.detail)\n    this.deleteViking(evt.detail)\n  })\n};\n\nNorseApp.prototype.getValhalla = function () {\n  this.request3.get()\n  .then((valhallaVikings) => {\n    PubSub.publish(Events.valhalla, valhallaVikings);\n  })\n};\n\nNorseApp.prototype.deleteViking = function (vikID) {\n  this.request2.delete(vikID)\n  .then((norseAppItems) => {\n    PubSub.publish(Events.loadVikings, norseAppItems)\n  })\n};\n\nNorseApp.prototype.getGods = function(){\n  this.request1.get()\n  .then((norseAppItems) => {\n    PubSub.publish(Events.loadGods, norseAppItems);\n  })\n  .catch(console.error);\n}\n\nNorseApp.prototype.getVikings = function(){\n  this.request2.get()\n  .then((norseAppItems) => {\n    PubSub.publish(Events.loadVikings, norseAppItems);\n  })\n  .catch(console.error);\n}\n\nNorseApp.prototype.getStories = function(){\n  this.request4.get()\n  .then((stories) => {\n    PubSub.publish(Events.loadStories, stories);\n  })\n}\n\nNorseApp.prototype.putViking = function (details) {\n  this.request2.put(details._id, details.famousFor)\n  .then((vikings) => {\n    PubSub.publish(Events.loadVikings, vikings)\n  })\n};\n\nNorseApp.prototype.postToValhalla = function (vikID) {\n  this.request2.show(vikID)\n  .then((viking) => {\n    this.request3.post(viking)\n    .then((vikings) => {\n      PubSub.publish(Events.valhalla, vikings)\n    })\n  })\n};\n\nmodule.exports = NorseApp;\n\n\n//# sourceURL=webpack:///./client/src/models/norse_app.js?");

/***/ }),

/***/ "./client/src/views/blood_eagle.js":
/*!*****************************************!*\
  !*** ./client/src/views/blood_eagle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\")\nconst Request = __webpack_require__(/*! ../helpers/requests.js */ \"./client/src/helpers/requests.js\")\n\nconst BloodEagleView = function(container){\n  this.container = container;\n  this.values = [\"page1\", \"page2\", \"page3\", \"page4\"]\n  this.request = new Request('http://localhost:3000/api/stories')\n\n}\n\nBloodEagleView.prototype.renderStory = function () {\n  this.request.get()\n  .then((resp) => {\n    const welcome = ManageElements.para(resp[1].bloodEagle.welcome, 'welcome-para-story');\n    this.addRadios(this.values)\n    ManageElements.append([welcome], this.container);\n  })\n};\n\nBloodEagleView.prototype.addRadios = function (values) {\n  let pages = ManageElements.list('pages');\n  values.forEach((val) => {\n    const page = ManageElements.listItem(val, val);\n    page.style.color = 'rgba(255,255,255,0.6)';\n    ManageElements.append([page], pages)\n    ManageElements.listen('click', page, (evt) => {\n      if (evt.target.id === 'page1'){\n        this.pageOne();\n      }\n      else if (evt.target.id === 'page2'){\n        this.pageTwo();\n      }\n      else if (evt.target.id === 'page3'){\n        this.pageThree();\n      }\n      else if (evt.target.id === 'page4'){\n        this.pageFour();\n      }\n    })\n  })\n  ManageElements.append([pages], this.container)\n\n};\n\nBloodEagleView.prototype.pageOne = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageOne = ManageElements.div('pageOneDiv');\n    const para = ManageElements.para(resp[1].bloodEagle.page1, 'storyTimePara')\n    ManageElements.append([para], pageOne)\n    ManageElements.append([pageOne], this.container);\n  })\n};\n\nBloodEagleView.prototype.pageTwo = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageTwo = ManageElements.div('pageTwoDiv');\n    const para = ManageElements.para(resp[1].bloodEagle.page2, 'storyTimePara')\n    const bloodEagleVid = ManageElements.vid()\n    bloodEagleVid.width = 560;\n    bloodEagleVid.height = 315;\n    bloodEagleVid.src = 'https://www.youtube.com/embed/ZwV3Y9GjOAQ';\n    bloodEagleVid.frameborder = 0;\n    bloodEagleVid.allow = 'accelerometer';\n    ManageElements.append([para, bloodEagleVid], pageTwo)\n    ManageElements.append([pageTwo], this.container);\n  })\n};\n\nBloodEagleView.prototype.pageThree = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageThree = ManageElements.div('pageThreeDiv');\n    const para = ManageElements.para(resp[1].bloodEagle.page3, 'storyTimePara')\n    ManageElements.append([para], pageThree)\n    ManageElements.append([pageThree], this.container);\n  })\n};\n\nBloodEagleView.prototype.pageFour = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageFour = ManageElements.div('pageFourDiv');\n    const para = ManageElements.para(resp[1].bloodEagle.page4, 'storyTimePara')\n    ManageElements.append([para], pageFour)\n    ManageElements.append([pageFour], this.container);\n  })\n};\n\n\nmodule.exports = BloodEagleView;\n\n\n//# sourceURL=webpack:///./client/src/views/blood_eagle.js?");

/***/ }),

/***/ "./client/src/views/display.js":
/*!*************************************!*\
  !*** ./client/src/views/display.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Events = __webpack_require__(/*! ../helpers/events.js */ \"./client/src/helpers/events.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst VikingView = __webpack_require__(/*! ./viking_view.js */ \"./client/src/views/viking_view.js\");\nconst GodsView = __webpack_require__(/*! ./gods_view.js */ \"./client/src/views/gods_view.js\");\n\nconst Display = function(vikingContainer, godContainer){\n  this.vikingContainer = vikingContainer;\n  this.godContainer = godContainer;\n};\n\nDisplay.prototype.bindEvents = function () {\n  PubSub.subscribe(Events.loadVikings, (event) => {\n    if (event.detail.length !== 0){\n      this.populateVikings(event.detail)\n    }\n    else {\n      this.vikingContainer.innerHTML = '';\n      const deathOfVikings = ManageElements.head('h1', 'All Vikings have gone to join Odin in the Great Halls')\n      ManageElements.append([deathOfVikings], this.vikingContainer)\n    }\n  })\n  PubSub.subscribe(Events.loadGods, (event) => {\n    this.populateGods(event.detail)\n  })\n};\n\nDisplay.prototype.populateVikings = function (vikings) {\n  const vikingView = new VikingView(this.vikingContainer);\n  vikingView.renderVikings(vikings);\n};\n\nDisplay.prototype.populateGods = function (gods) {\n  const godsView = new GodsView(this.godContainer);\n  godsView.renderGods(gods);\n};\n\n\n\nmodule.exports = Display;\n\n\n//# sourceURL=webpack:///./client/src/views/display.js?");

/***/ }),

/***/ "./client/src/views/gods_reject.js":
/*!*****************************************!*\
  !*** ./client/src/views/gods_reject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\")\n\nconst GodReject = function(container){\n  this.container = container;\n  this.returnTop = document.querySelector('#return-to-top')\n}\n\nGodReject.prototype.yDeleteMe = function (god) {\n  this.container.id = 'hide';\n  this.returnTop.id = 'hide'\n  const body = document.querySelector('body');\n  body.id = 'godsReject';\n  const rejectContainer = ManageElements.div('GodReject');\n  const cantDelete = ManageElements.head('h1', `YOU CANNOT DELETE ${god.name.toUpperCase()}!`, 'godRejectHead')\n  const godDeletesYou = ManageElements.head('h2', `ONLY ${god.name.toUpperCase()} CAN DELETE YOU!`, 'godRejectHeadSub');\n  const nightKing = ManageElements.img('./images/gods/theNightKing.jpg', 'nightKing', 300, 400);\n  ManageElements.append([cantDelete, nightKing, godDeletesYou], rejectContainer)\n  this.addReturnbtn(rejectContainer, body);\n  ManageElements.append([rejectContainer], body);\n};\n\nGodReject.prototype.addReturnbtn = function (container, body) {\n  const returnBtn = ManageElements.btn('return', 'returnBtn', 'go back')\n  ManageElements.append([returnBtn], container)\n  ManageElements.listen('click', returnBtn, () => {\n    this.container.id = 'overall-container'\n    container.id = 'hide';\n    body.id = \"body\"\n    this.returnTop.id = 'return-to-top'\n  })\n};\n\nmodule.exports = GodReject;\n\n\n//# sourceURL=webpack:///./client/src/views/gods_reject.js?");

/***/ }),

/***/ "./client/src/views/gods_view.js":
/*!***************************************!*\
  !*** ./client/src/views/gods_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst NorseApp = __webpack_require__(/*! ../models/norse_app.js */ \"./client/src/models/norse_app.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Events = __webpack_require__(/*! ../helpers/events.js */ \"./client/src/helpers/events.js\");\nconst GodReject = __webpack_require__(/*! ./gods_reject.js */ \"./client/src/views/gods_reject.js\");\nconst ValhallaView = __webpack_require__(/*! ./valhalla_view.js */ \"./client/src/views/valhalla_view.js\");\n\n\nconst GodsView = function(godContainer){\n  this.container = godContainer;\n  this.gods;\n  this.descriptionDiv;\n  this.odinsLogin;\n}\n\n\nGodsView.prototype.renderGods = function (gods) {\n  gods.forEach((god) => {\n    const containerDiv = ManageElements.div('god-div')\n    const innerContainerDiv = ManageElements.div('god-div-inner')\n    this.createHead(god.name, containerDiv)\n    this.createAka(god.aka, containerDiv)\n    this.addImages(god, containerDiv)\n    this.createTitle(god.title, containerDiv)\n    const displayMore = ManageElements.btn('more', god.name, 'show more')\n    displayMore.className = 'godShowMoreLessBtn'\n    ManageElements.append([innerContainerDiv], this.container)\n    ManageElements.append([containerDiv], innerContainerDiv)\n    ManageElements.append([displayMore], containerDiv)\n    this.odinLoginBtn(god, containerDiv)\n    this.deleteButton(god, containerDiv)\n    ManageElements.listen('click', displayMore, (event) => {\n      const buttons = document.querySelectorAll('.godShowMoreLessBtn')\n      buttons.forEach((button) => {\n        if(button.id !== displayMore.id && button.value === 'less'){\n          if (this.odinsLogin.style.marginTop !== '60px'){\n            this.odinsLogin.style.marginTop = '60px'\n          }\n          button.textContent = 'show more'\n          button.value = 'more';\n          this.descriptionDiv.innerHTML = '';\n        }\n      })\n      if (event.target.value === 'more'){\n        if (event.target.id === 'Odin'){\n          this.odinsLogin.style.marginTop = '430px'\n        }\n\n        displayMore.value = 'less';\n        displayMore.textContent = 'show less'\n        this.createDescription(god, innerContainerDiv, event.target.value);\n\n\n      }\n      else{\n        this.odinsLogin.style.marginTop = '60px'\n        displayMore.value = 'more';\n        displayMore.textContent = 'show more'\n        this.descriptionDiv.innerHTML = ''\n      }\n    })\n  })\n};\n\nGodsView.prototype.createDescription = function (god, container, value, button) {\n  if (this.descriptionDiv){\n    this.descriptionDiv.innerHTML = '';\n  }\n  this.descriptionDiv = ManageElements.para(god.description, 'god-description')\n  ManageElements.append([this.descriptionDiv], container)\n};\n\nGodsView.prototype.addImages = function (god, container) {\n  const image = ManageElements.img(`./images/gods/${god.name}.jpg`, 'image', 275, 350);\n  ManageElements.append([image], container)\n};\n\nGodsView.prototype.odinLoginBtn = function (god, container) {\n  if (god.name.toLowerCase() === 'odin'){\n    this.odinsLogin = ManageElements.btn('login', 'odin-login-btn')\n    const hiddenLogin = document.querySelector('#valhallButtonHidden');\n    const loginButtons = [this.odinsLogin, hiddenLogin];\n    const btnText = ManageElements.para('odins login', 'login-text')\n    ManageElements.append([btnText], this.odinsLogin)\n    ManageElements.append([this.odinsLogin], container)\n    loginButtons.forEach((btn) => {\n      ManageElements.listen('click', btn, () => {\n        const valContainer = document.querySelector('#overall-container');\n        const norseApp = new NorseApp();\n        norseApp.getValhalla();\n        const valhalla = new ValhallaView(valContainer);\n        valhalla.displayDead();\n      })\n    })\n  }\n};\n\nGodsView.prototype.deleteButton = function (god, container) {\n  const deleteBtn = ManageElements.btn('delete', 'deleteBtn', 'delete god')\n  ManageElements.append([deleteBtn], container)\n  ManageElements.listen('click', deleteBtn, (event) => {\n    ManageElements.top();\n    const overallCont = document.querySelector('#overall-container');\n    const rejectGod = new GodReject(overallCont);\n    rejectGod.yDeleteMe(god)\n  })\n};\n\n\nGodsView.prototype.createHead = function (name, container) {\n  const newHead = ManageElements.head('h1', name, 'god-name');\n  ManageElements.append([newHead], container)\n};\n\nGodsView.prototype.createAka = function (aka, container) {\n  const godAka = ManageElements.para(aka, 'god-aka')\n  ManageElements.append([godAka], container)\n};\n\n\nGodsView.prototype.createTitle = function (title, container) {\n  const godTitle = ManageElements.para(title, 'title')\n  ManageElements.append([godTitle], container)\n};\n\n\n\n\n\nmodule.exports = GodsView;\n\n\n//# sourceURL=webpack:///./client/src/views/gods_view.js?");

/***/ }),

/***/ "./client/src/views/ragnarok.js":
/*!**************************************!*\
  !*** ./client/src/views/ragnarok.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst Request = __webpack_require__(/*! ../helpers/requests.js */ \"./client/src/helpers/requests.js\")\n\n\nconst RagnarokView = function(container){\n  this.container = container;\n  this.values = [\"page1\", \"page2\", \"page3\"]\n  this.request = new Request('http://localhost:3000/api/stories')\n}\n\nRagnarokView .prototype.renderStory = function(){\n  this.request.get()\n  .then((resp) => {\n    const welcome = ManageElements.para(resp[0].ragnarok.welcome, 'welcome-para-story');\n    this.addRadios(this.values)\n    ManageElements.append([welcome], this.container)\n  })\n};\n\nRagnarokView.prototype.addRadios = function (values){\n  let pages = ManageElements.list('pages');\n  values.forEach((val) => {\n    const page = ManageElements.listItem(val, val);\n    page.style.color = 'rgba(255,255,255,0.6)';\n    ManageElements.append([page], pages)\n    ManageElements.listen('click', page, (event) => {\n      if (event.target.id === 'page1'){\n        this.pageOne();\n      }\n      else if (event.target.id === 'page2'){\n        this.pageTwo();\n      }\n      else if (event.target.id === 'page3') {\n        this.pageThree();\n      }\n    })\n  })\n  ManageElements.append([pages], this.container)\n};\n\nRagnarokView.prototype.pageOne = function(){\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n  const pageOne = ManageElements.div('pageOneDiv');\n  const para = ManageElements.para(resp[0].ragnarok.page1, 'storyTimePara');\n  const ragnarokImg = ManageElements.img('../images/ragnarok/image1.png', 'ragnarok_image', 700, 350);\n  ManageElements.append([para, ragnarokImg], pageOne)\n  ManageElements.append([pageOne], this.container);\n  })\n};\n\nRagnarokView.prototype.pageTwo = function(){\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n  const pageTwo = ManageElements.div('pageTwoDiv');\n  const para = ManageElements.para(resp[0].ragnarok.page2, 'storyTimePara');\n  const ragnarokImg = ManageElements.img('../images/ragnarok/image2.png', 'ragnarok_image', 700, 350);\n  ManageElements.append([para, ragnarokImg], pageTwo)\n  ManageElements.append([pageTwo], this.container);\n  })\n};\n\nRagnarokView.prototype.pageThree = function(){\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n  const pageThree = ManageElements.div('pageThreeDiv');\n  const para = ManageElements.para(resp[0].ragnarok.page3, 'storyTimePara');\n  const ragnarokImg = ManageElements.img('../images/ragnarok/image3.png', 'ragnarok_image', 700, 350);\n  ManageElements.append([para, ragnarokImg], pageThree)\n  ManageElements.append([pageThree], this.container);\n  })\n};\n\nmodule.exports = RagnarokView;\n\n\n//# sourceURL=webpack:///./client/src/views/ragnarok.js?");

/***/ }),

/***/ "./client/src/views/valhalla_view.js":
/*!*******************************************!*\
  !*** ./client/src/views/valhalla_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Events = __webpack_require__(/*! ../helpers/events.js */ \"./client/src/helpers/events.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/requests.js */ \"./client/src/helpers/requests.js\");\nconst ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst Display = __webpack_require__(/*! ./display.js */ \"./client/src/views/display.js\")\nconst BloodEagleView = __webpack_require__(/*! ./blood_eagle.js */ \"./client/src/views/blood_eagle.js\")\nconst ValkyriesView = __webpack_require__(/*! ./valkyries.js */ \"./client/src/views/valkyries.js\")\nconst RagnarokView = __webpack_require__(/*! ./ragnarok.js */ \"./client/src/views/ragnarok.js\")\n\nconst ValhallaView = function(outContainer){\n  this.outContainer = outContainer;\n  this.body = document.querySelector('body')\n  this.container = ManageElements.div('new-container');\n  this.returnHarBtn = document.querySelector('#return-to-top')\n}\n\nValhallaView.prototype.displayDead = function () {\n  this.outContainer.id = 'hide';\n  this.returnHarBtn.id = 'hide';\n  ManageElements.top();\n  PubSub.subscribe(Events.valhalla, (evt) => {\n    this.createOdin(evt.detail[0]);\n    this.createVikings(evt.detail);\n    this.radios(['valkyries', 'bloodEagle', 'ragnarok']);\n  })\n  this.returnFromValhala();\n};\n\nValhallaView.prototype.createOdin = function (odin) {\n  const odinsDiv = ManageElements.div('odins-div');\n  this.renderHead(odin, odinsDiv);\n  this.renderDesc(odin.description, odinsDiv);\n};\n\nValhallaView.prototype.renderHead = function (odin, container) {\n  const odinName = ManageElements.head('h1', odin.name, 'odin-name');\n  const odinTitle = ManageElements.head('h2', odin.title, 'odin-title')\n  const odinAka = ManageElements.head('h3', odin.aka, 'odin-aka')\n  ManageElements.append([odinName, odinTitle, odinAka], container);\n  ManageElements.append([container], this.container)\n};\n\nValhallaView.prototype.renderDesc = function (desc, container) {\n  const odinDesc = ManageElements.para(desc, 'odin-desc');\n  ManageElements.append([odinDesc], container);\n};\n\nValhallaView.prototype.createVikings = function (vikings) {\n  const vikingDiv = ManageElements.div('viking-valhalla')\n  for (let x = 1; x < vikings.length; x++){\n    const newDiv = ManageElements.div('inner-vik-valhalla');\n    const newHead = ManageElements.head('h1', vikings[x].name, 'viking-name-valhalla');\n    ManageElements.append([newHead], newDiv)\n    vikings[x].famousFor.forEach((accomp) => {\n      const accompName = ManageElements.head('h1', accomp.name, 'accomplishment-valhalla')\n      const accompDesc = ManageElements.para(accomp.description, 'accomplishment-desc-valhalla')\n      const wikiBtn = ManageElements.btn('search', 'search', 'search wiki')\n      ManageElements.append([accompName, accompDesc, wikiBtn], newDiv)\n      ManageElements.append([newDiv], vikingDiv)\n      ManageElements.listen('click', wikiBtn, () => {\n        const wikiDiv = ManageElements.div('wiki-div');\n        ManageElements.append([wikiDiv], newDiv)\n        wikiBtn.id = 'hide';\n        const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${vikings[x].name.toLowerCase()}`\n        const rolloUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=rollo`\n        const bjornUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Björn%20Ironside`;\n        if (vikings[x].name.includes('Rollo')){\n          const request = new Request(rolloUrl);\n          request.get()\n          .then((data) => {\n            const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')\n            const result = data.query.search[0].snippet;\n            const resultContent = result.replace(/(<([^>]+)>)/ig,\"\");\n            const newPara = ManageElements.para(resultContent, 'wiki-para')\n            ManageElements.append([wikiHead, newPara], wikiDiv)\n          })\n        }\n        else if (vikings[x].name.includes('Bjorn')){\n          const request = new Request(bjornUrl);\n          request.get()\n          .then((data) => {\n            const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')\n            const result = data.query.search[0].snippet;\n            // this is seriously cheating but the returned result only contains so many words and I dont have a clue how to get more info.\n            const resultContent = result.replace(/(<([^>]+)>)/ig,\"\") + ' was a historical Viking chief who also figures in late sources as a son of Ragnar Lodbrok and a legendary king of Sweden.';\n            const newPara = ManageElements.para(resultContent, 'wiki-para')\n            ManageElements.append([wikiHead, newPara], wikiDiv)\n          })\n        }\n        else {\n          const request = new Request(url);\n          request.get()\n          .then((data) => {\n            if (data[2][0] === \"\"){\n              return ;\n            }\n            else {\n              const wikiHead = ManageElements.head('h2', 'Wikipedia Description:', 'wiki-head')\n              const newPara = ManageElements.para(data[2][0], 'wiki-para')\n              ManageElements.append([wikiHead, newPara], wikiDiv)\n            }\n          })\n        }\n      })\n    })\n  }\n  ManageElements.append([vikingDiv], this.container)\n};\n\nValhallaView.prototype.radios = function (values){\n  const storiesHead = ManageElements.head('h2', 'Some stories of the Viking', 'storyTimeHeader')\n  ManageElements.append([storiesHead], this.container)\n  const storyContainer = ManageElements.div('storyContainer');\n\n  values.forEach((value) => {\n    const radioButton = ManageElements.input('radio', 'stories', 'stories');\n    const radioLabel = ManageElements.para(`${value}:`, 'radio-text')\n    radioButton.value = value;\n    ManageElements.append([radioButton], radioLabel)\n    ManageElements.append([radioLabel], this.container)\n    radioButton.addEventListener('change', (evt) => {\n    })\n    ManageElements.listen('change', radioButton, (evt) => {\n      if (evt.target.value === 'valkyries'){\n        storyContainer.innerHTML = '';\n        this.handleValkyries(storyContainer);\n      }\n      else if (evt.target.value === 'bloodEagle'){\n        storyContainer.innerHTML = '';\n        this.handleBloodEagle(storyContainer);\n      }\n      else if (evt.target.value === 'ragnarok'){\n        storyContainer.innerHTML = '';\n        this.handleRagnarok(storyContainer);\n      }\n    })\n  })\n\n};\n\nValhallaView.prototype.handleRagnarok = function (container) {\n  container.id = 'ragnarok'\n  ManageElements.append([container], this.container);\n  const ragnarokView = new RagnarokView(container);\n  ragnarokView.renderStory();\n};\n\nValhallaView.prototype.handleBloodEagle = function (container) {\n  container.id = 'bloodEagle'\n  ManageElements.append([container], this.container);\n  const bloodEagleView = new BloodEagleView(container);\n  bloodEagleView.renderStory();\n};\n\nValhallaView.prototype.handleValkyries = function (container) {\n  container.id = 'valkyries'\n  ManageElements.append([container], this.container);\n  const valkyriesView = new ValkyriesView(container);\n  valkyriesView.renderStory();\n};\n\nValhallaView.prototype.returnFromValhala = function () {\n  const returnBtn = ManageElements.btn('return', 'return-from-valhalla')\n  const returnTxt = ManageElements.para('return from valhalla', 'return-valhalla-text')\n  ManageElements.append([returnBtn, returnTxt], this.container)\n  ManageElements.append([this.container], this.body)\n\n  ManageElements.listen('click', returnBtn, () => {\n    this.container.id = 'hide';\n    this.outContainer.id = 'overall-container'\n    this.returnHarBtn.id = 'return-to-top'\n  })\n};\nmodule.exports = ValhallaView;\n\n\n//# sourceURL=webpack:///./client/src/views/valhalla_view.js?");

/***/ }),

/***/ "./client/src/views/valkyries.js":
/*!***************************************!*\
  !*** ./client/src/views/valkyries.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements = __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\")\nconst Request = __webpack_require__(/*! ../helpers/requests.js */ \"./client/src/helpers/requests.js\")\n\nconst ValkyriesView = function(container){\n  this.container = container;\n  this.values = [\"page1\", \"page2\", \"page3\", \"page4\"]\n  this.request = new Request('http://localhost:3000/api/stories')\n}\n\nValkyriesView.prototype.renderStory = function () {\n  this.request.get()\n  .then((resp) => {\n    const welcome = ManageElements.para(resp[2].valkyries.welcome, 'welcome-para-story');\n    this.addRadios(this.values)\n    ManageElements.append([welcome], this.container)\n  })\n};\n\nValkyriesView.prototype.addRadios = function (values) {\n  let pages = ManageElements.list('pages');\n  values.forEach((val) => {\n    const page = ManageElements.listItem(val, val);\n    page.style.color = 'rgba(255,255,255,0.6)';\n    ManageElements.append([page], pages)\n    ManageElements.listen('click', page, (evt) => {\n      if (evt.target.id === 'page1'){\n        this.pageOne();\n      }\n      else if (evt.target.id === 'page2'){\n        this.pageTwo();\n      }\n      else if (evt.target.id === 'page3'){\n        this.pageThree();\n      }\n      else if (evt.target.id === 'page4'){\n        this.pageFour();\n      }\n    })\n  })\n  ManageElements.append([pages], this.container)\n};\n\n\nValkyriesView.prototype.pageOne = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageOne = ManageElements.div('pageOneDiv');\n    const para = ManageElements.para(resp[2].valkyries.page1)\n    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries1.png', 'valkyrie_image', 700, 350);\n    ManageElements.append([para, valkyrieImg], pageOne)\n    ManageElements.append([pageOne], this.container);\n  })\n};\n\nValkyriesView.prototype.pageTwo = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageTwo = ManageElements.div('pageTwoDiv');\n    const para = ManageElements.para(resp[2].valkyries.page2)\n    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries2.jpg', 'valkyrie_image', 700, 350);\n    ManageElements.append([para, valkyrieImg], pageTwo)\n    ManageElements.append([pageTwo], this.container);\n  })\n};\n\nValkyriesView.prototype.pageThree = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageThree = ManageElements.div('pageThreeDiv');\n    const para = ManageElements.para(resp[2].valkyries.page3)\n    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries3.jpg', 'valkyrie_image', 700, 350);\n    ManageElements.append([para, valkyrieImg], pageThree)\n    ManageElements.append([pageThree], this.container);\n  })\n};\n\nValkyriesView.prototype.pageFour = function () {\n  this.container.innerHTML = '';\n  this.addRadios(this.values);\n  this.request.get()\n  .then((resp) => {\n    const pageFour = ManageElements.div('pageFourDiv');\n    const para = ManageElements.para(resp[2].valkyries.page4)\n    const valkyrieImg = ManageElements.img('../images/valkyries/valkyries4.jpg', 'valkyrie_image', 700, 700);\n    ManageElements.append([para, valkyrieImg], pageFour)\n    ManageElements.append([pageFour], this.container);\n  })\n};\n\nmodule.exports = ValkyriesView;\n\n\n//# sourceURL=webpack:///./client/src/views/valkyries.js?");

/***/ }),

/***/ "./client/src/views/viking_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/viking_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ManageElements =  __webpack_require__(/*! ../helpers/manage_elements.js */ \"./client/src/helpers/manage_elements.js\");\nconst PubSub =  __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Events =  __webpack_require__(/*! ../helpers/events.js */ \"./client/src/helpers/events.js\");\nconst ValhallaView =  __webpack_require__(/*! ./valhalla_view.js */ \"./client/src/views/valhalla_view.js\");\n\n\nconst VikingView = function (vikingContainer) {\n  this.container = vikingContainer;\n  this.battleDiv;\n  this.vikings;\n}\n\nVikingView.prototype.renderVikings = function (vikings) {\n  this.container.innerHTML = '';\n  vikings.forEach((viking) => {\n    const containerDiv = ManageElements.div('viking-div')\n    const innerContainerDiv = ManageElements.div('viking-div-inner')\n    this.createHead(viking.name, containerDiv);\n    this.addImages(viking, containerDiv)\n    this.createParents(viking.parents, containerDiv)\n    const displayMore = ManageElements.btn(`more`, viking.name, 'show accomplishments')\n    displayMore.className = 'displayMoreBtn'\n    const valhalla = ManageElements.btn(viking._id, 'valhalla', 'move to valhalla')\n    ManageElements.append([innerContainerDiv], this.container)\n    ManageElements.append([containerDiv], innerContainerDiv)\n    ManageElements.append([displayMore, valhalla], containerDiv)\n    valhalla.addEventListener('click', (event) => {\n      const container = document.querySelector('#overall-container');\n      const valhallaView = new ValhallaView(container)\n      PubSub.publish(Events.moveToValhalla, event.target.value)\n      valhallaView.displayDead(event.target.value);\n    })\n    ManageElements.listen('click', displayMore, (event) => {\n      const buttons = document.querySelectorAll('.displayMoreBtn');\n      buttons.forEach((button) => {\n        if(button.id !== displayMore.id && button.value === 'less'){\n          button.textContent = 'show accomplishments'\n          button.value = 'more';\n          this.battleDiv.innerHTML = '';\n        }\n      })\n      if (event.target.value === `more`){\n        displayMore.value = 'less';\n        displayMore.textContent = 'show less'\n        this.createDescription(viking, containerDiv, event.target.value, displayMore);\n      }\n      else{\n        displayMore.value = 'more';\n        displayMore.textContent = 'show accomplishments'\n        this.battleDiv.innerHTML = '';\n      }\n    })\n  });\n};\n\nVikingView.prototype.createHead = function (name, container) {\n  const newHead = ManageElements.head('h1', name, 'viking-name');\n  ManageElements.append([newHead], container);\n};\n\nVikingView.prototype.createParents = function (parents, container) {\n  const father = ManageElements.para()\n  father.id = 'parent-names'\n  father.innerHTML = `<span>Father: </span>${parents[0]}`\n  ManageElements.append([father], container)\n  const mother = ManageElements.para()\n  mother.id = 'parent-names'\n  mother.innerHTML = `<span>Mother: </span>${parents[1]}`\n  ManageElements.append([mother], container)\n};\n\nVikingView.prototype.createDescription = function (viking, container, value, button) {\n  if (this.battleDiv){\n    this.battleDiv.innerHTML = '';\n  }\n  this.battleDiv = ManageElements.div('battle-div')\n  ManageElements.append([this.battleDiv], container)\n  let addBattle;\n  viking.famousFor.forEach((description) => {\n    const newHead = ManageElements.head('h1', description.name, 'battle-head');\n    const newDesc = ManageElements.para(description.description, 'battle-description')\n    addBattle = ManageElements.btn('add', 'add-battle-button', 'add accomplishment')\n    ManageElements.listen('click', addBattle, (event) => {\n      this.addBattleForm(viking, this.battleDiv, value, button)\n      addBattle.id = 'hide';\n    })\n    ManageElements.append([newHead, newDesc], this.battleDiv)\n  })\n  ManageElements.append([addBattle], this.battleDiv)\n};\n\nVikingView.prototype.addBattleForm = function (viking, container, value, button) {\n  const inputDiv = ManageElements.div('add-battle-div');\n  const form = ManageElements.form('newBattleForm')\n  const nameLabel = ManageElements.label('Accomplishment Name', 'battleName', 'battleName')\n  nameLabel.innerHTML = nameLabel.textContent + '<br><br>'\n  const nameInput = ManageElements.input('text', 'inputBattleName', 'inputBattleName')\n  nameInput.setAttribute( \"autocomplete\", \"off\" );\n  const descLabel = ManageElements.label('Accomplishment Description', 'battleDesc', 'battleDesc')\n  descLabel.innerHTML = '<br><br>' + descLabel.textContent + '<br><br>'\n  const descInput = document.createElement('textarea')\n  descInput.rows = '10'\n  descInput.cols = '50'\n  descInput.id = 'textArea'\n  const submitBtn = ManageElements.input('submit', 'add-battle-submit');\n  const br = ManageElements.br();\n  ManageElements.append([form], inputDiv)\n  ManageElements.append([nameInput], nameLabel);\n  ManageElements.append([descInput], descLabel);\n  ManageElements.append([nameLabel, descLabel, br, submitBtn], form)\n  ManageElements.append([inputDiv], container)\n  ManageElements.listen('submit', form, (event) => {\n    event.preventDefault()\n    const battleName = event.target.inputBattleName.value;\n    const battleDesc = event.target.textArea.value;\n    const famousForObj = {\n      name: battleName,\n      description: battleDesc\n    }\n    viking.famousFor.push(famousForObj)\n    PubSub.publish(Events.updateViking, viking)\n    form.id = 'hide'\n    this.battleDiv.innerHTML = '';\n    button.value = 'more';\n    button.textContent = 'show accomplishments'\n  })\n};\n\nVikingView.prototype.addImages = function(viking, container){\n  const image = ManageElements.img(`./images/vikings/${viking.name}.png`, 'image', 275, 350);\n  ManageElements.append([image], container)\n};\n\nmodule.exports = VikingView;\n\n\n//# sourceURL=webpack:///./client/src/views/viking_view.js?");

/***/ })

/******/ });