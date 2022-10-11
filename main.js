let elements = document.querySelectorAll('.heading-1');
// h.innerText = "Hello World!";

for(let element of elements){
    element.classList = "text-white text-2xl bg-blue-300 text-center";
    
}

//event handler
function clickHandler(){
  const button = document.querySelector('button');
  button.classList.add('text-white', 'bg-red-400', 'rounded', 'shadow-lg');
button.onclick = clickHandlerAgain;
}

function clickHandlerAgain(){
  alert("other click handler is worked!");

}

function sayHello(){
  // console.log('Hello Friends!');

  let buttons = document.querySelectorAll('.btn');
  for(let button of buttons){
  button.classList.add('text-2xl');
}

}

function sayHi(){
  // console.log('Hi Friends');

let buttons = document.querySelector('.btn');
buttons.classList.add('text-2xl');


}

let buttons = document.querySelectorAll('.btn');

for(const button of buttons){

  button.addEventListener('click', sayHello);
  button.addEventListener('click', sayHi);
  button.addEventListener('click',function(){
    console.log('i great you!');
  })
  
  button.removeEventListener('click',sayHi);
}

