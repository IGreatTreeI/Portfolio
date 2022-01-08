const hambuger = document.querySelector('.navbar_hambuger');
const menu = document.querySelector('.navbar_menu');
const adress = document.querySelector('.navbar_adress');
const adress_list = document.querySelector('.navbar_adress_list');

hambuger.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  adress.classList.toggle('active');
});

adress.addEventListener('click', ()=> {
  adress_list.classList.toggle('active');
});

// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
