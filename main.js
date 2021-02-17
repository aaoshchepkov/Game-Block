'use strict';


function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.addElement = function(){
 
 if (this.selector[0] === '.' ) {
   let block = document.createElement('div');
   block.classList.add(this.selector.slice(1));
   block.textContent = 'Блок';
  document.body.prepend(block);
 } else if (this.selector[0] === '#'){
   let parag = document.createElement('p');
   parag.id = this.selector.slice(1);
   parag.textContent = 'Параграф';
   document.body.prepend(parag);
 }
};

let elementDiv = new DomElement('.block', '40px', '100px', 'red', '20px');
let elementP = new DomElement('#parag', '40px', '100px', 'tomato', '20px');



elementDiv.addElement();
document.querySelector('.block').style.cssText = 'height: ' + elementDiv.height + '; \
width: ' + elementDiv.width + '; \
background-color: ' + elementDiv.bg + '; \
font-size: '  + elementDiv.fontSize;

elementP.addElement();
document.querySelector('#parag').style.cssText = 'height: ' + elementP.height + '; \
width: ' + elementP.width + '; \
background-color: ' + elementP.bg + '; \
font-size: '  + elementP.fontSize;
