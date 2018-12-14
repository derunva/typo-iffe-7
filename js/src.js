// alert('hello')
var menuOpener = document.querySelector('.menu-opener');
var menu = document.querySelector('.menu');
console.log(menu);
console.dir(menuOpener);
menuOpener.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuOpener.classList.toggle('is-active');
  a = Math.floor(Math.random() * 256);

  b = Math.floor(Math.random() * 256);

  c = Math.floor(Math.random() * 256);

  color = 'rgb('+a+','+b+','+c+')'




  menuOpener.style.backgroundColor = color

})