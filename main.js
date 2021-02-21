'use strict';
document.addEventListener("DOMContentLoaded", () => {

  function DomElement(selector, height, width, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
  }
  DomElement.prototype.addElement = function () {
    let block = document.createElement('div');
    block.classList.add(this.selector.slice(1));
    document.body.prepend(block);
    block.style.cssText = `height: ${this.height};
   width: ${this.width};
   position: absolute;
   top: 50%;
   bottom: 50%;
   left: 50%;
   right: 50%;
   background-color: ${this.bg};
   font-size: ${this.fontSize};
   color : ${this.color}`;
   document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        let top = block.offsetTop - 10;
        block.style.top = top + 'px';
      } else if (event.key === 'ArrowDown') {
        let down = block.offsetTop + 10;
        block.style.top = down + 'px';
      } else if (event.key === 'ArrowLeft') {
        let left = block.offsetLeft - 10;
        block.style.left = left + 'px';
      } else if (event.key === 'ArrowRight') {
        let right = block.offsetLeft + 10;
        block.style.left = right + 'px';
      }
    });
  };

  let elementDiv = new DomElement('.block', '100px', '100px', 'red');
  elementDiv.addElement();

});