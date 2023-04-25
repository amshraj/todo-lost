console.log('aman murari singh');
var ul = document.querySelector('ul')
var inp = document.querySelector('input')
function add(){
 if (inp.value===''){
  alert('please write something')
 }else {
 var a = document.createElement('li')
 var b = document.createElement('span')
a.innerHTML = inp.value + '<span>x</span>'
 ul.appendChild(a)
  b.innerHTML = 'x'

 seat()
 
 }
 
 inp.value = null
 
}
function seat(){
 localStorage.setItem('todo', ul.innerHTML)

}
function geat(){
 ul.innerHTML = localStorage.getItem('todo')
}
geat()


ul.addEventListener('click', function(e){
 if (e.target.tagName === 'SPAN'){
  e.target.parentElement.remove()
  e.target.parentElement.style.animationName = 'ps';
   seat()
 }
})

var dl = document.getElementById('del')
setInterval(function(){
  if (ul.innerHTML != '') {
   dl.style.visibility = 'visible'
  }else{
      dl.style.visibility = 'hidden'

  }
},1)

function ad(){
ul.innerHTML = null
seat()

}













