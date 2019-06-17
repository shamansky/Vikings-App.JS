const ManageElements = {
  div: (id) => {
    const newDiv = document.createElement('div');
    newDiv.id = id;
    return newDiv;
  },
  head: (element, textContent, id) => {
    const newHead = document.createElement(element);
    newHead.id = id;
    newHead.textContent = textContent;
    return newHead;
  },
  para: (textContent, id) => {
    const newPara = document.createElement('p');
    newPara.textContent = textContent;
    newPara.id = id;
    return newPara;
  },
  btn: (value, id, textContent) => {
    const newBtn = document.createElement('button');
    newBtn.id = id;
    newBtn.value = value;
    newBtn.textContent = textContent;
    return newBtn;
  },
  vid: () => {
    const video = document.createElement('iframe');
    return video;
  },
  label: (textContent, name, id) => {
    const newLab = document.createElement('label');
    newLab.textContent = textContent;
    newLab.for = name;
    newLab.id = id;
    return newLab;
  },
  input: (type, id, name) => {
    const newInput = document.createElement('input');
    newInput.id = id;
    newInput.name = name;
    newInput.type = type;
    return newInput;
  },
  link: (href) => {
    const newLink = document.createElement('a')
    newLink.href = href;
    return newLink;
  },
  form: (id) => {
    const newForm = document.createElement('form')
    newForm.id = id;
    return newForm;
  },
  img: (src, id, w, h) => {
    const newImg = document.createElement('img');
    newImg.src = src;
    newImg.id = id;
    newImg.width = w;
    newImg.height = h;
    return newImg;
  },
  br: () => {
    const br = document.createElement('br');
    return br
  },
  append: (elements, parent) => {
    elements.forEach((element) => {
      parent.appendChild(element)
    })
  },
  list: (id) => {
    const newList = document.createElement('ul')
    newList.id = id;
    return newList;
  },
  listItem: (id, textContent) => {
    const newItem = document.createElement('li');
    newItem.id = id;
    newItem.textContent = textContent;
    return newItem;
  },
  listen: (event, element, func) => {
    element.addEventListener(event, func)
  },
  top: () => {
    document.documentElement.scrollTop = 0;
  }
}



module.exports = ManageElements;
