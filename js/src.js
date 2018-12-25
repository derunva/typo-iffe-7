// alert('hello')
var menuOpener = document.querySelector('.menu-opener');
var menu = document.querySelector('.menu');
var tooltip = document.querySelector('.tooltip')
console.log(tooltip)
console.log(menu);
console.dir(menuOpener);
var dates = document.querySelectorAll('[data-date]');
console.log(dates)
for(var i = 0; i < dates.length; i++){
  console.dir(dates[i].dataset.date)
  dates[i].addEventListener('mouseenter', function(event){
    console.log(event.target)
    console.log(this)
    
    // tooltip.innerText = event.target.dataset.date
    tooltip.innerText = this.dataset.date
    tooltip.style.display = 'block'
    console.log(tooltip.style)
    tooltip.style.top = event.clientY-60+'px'
    tooltip.style.left = event.clientX+'px'
  })
  dates[i].addEventListener('mouseleave', function(event){
    tooltip.style.display = 'none'
  })
}
menuOpener.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuOpener.classList.toggle('is-active');
  // a = Math.floor(Math.random() * 256);

  // b = Math.floor(Math.random() * 256);

  // c = Math.floor(Math.random() * 256);

  // color = 'rgb('+a+','+b+','+c+')'




  // menuOpener.style.backgroundColor = color

})