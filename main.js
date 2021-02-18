'use strict';
/*jshint multistr: true */

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
   block.style.cssText = 'height: ' + this.height + '; \
   width: ' + this.width + '; \
   background-color: ' + this.bg + '; \
   font-size: '  + this.fontSize;

 } else if (this.selector[0] === '#'){
   let parag = document.createElement('p');
   parag.id = this.selector.slice(1);
   parag.textContent = 'Параграф';
   document.body.prepend(parag);
   parag.style.cssText = 'height: ' + this.height + '; \
   width: ' + this.width + '; \
   background-color: ' + this.bg + '; \
   font-size: '  + this.fontSize;

 }
};

let elementDiv = new DomElement('.block', '40px', '200px', 'red', '20px');
let elementP = new DomElement('#parag', '40px', '200px', 'tomato', '20px');

elementDiv.addElement();
elementP.addElement();