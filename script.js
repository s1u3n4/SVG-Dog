var wrapper = document.querySelector('.wrapper svg')
var btnDraw = document.querySelector('.btn-draw')
var btnErase = document.querySelector('.btn-erase')

// We are only adding and removing the 'active' class
// 使用classList方法新增、刪除、修改節點上的CSS
function draw() {
  wrapper.classList.add('active')
}

function erase() {
  wrapper.classList.remove('active')
}

// Add handlers to our buttons
// 新增觸發事件的函數(監聽) AddEventListener
  btnDraw.addEventListener('click', draw, false)  //false 為bubbling，它是從內而外的流程
  btnErase.addEventListener('click', erase, false)

// Play draw animation once
// setTimeout(draw, 300) //0.3 秒畫一遍

var repeatingFunc;
function repeatingFunc(){
  draw.active;
  setTimeout(draw, 2000);
}
setTimeout(draw, 300);