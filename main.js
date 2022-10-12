


//event handler
function clickHandler(){
  const button = document.querySelector('button');
  button.classList.add('text-white', 'bg-red-400', 'rounded', 'shadow-lg');
button.onclick = clickHandlerAgain;
}

function clickHandlerAgain(){
  alert("other click handler is worked!");

}



//clickEventHandler Function

function clickEventHandler(){
  const button = document.querySelector('#bot')
  button.classList.add('text-green-700','bg-blue-300');
  
}





function sayHello(){
  console.log('Hello Friends!');

}


function sayHi(s){
console.log('Hi Friends!', s.target);

}

let buttons = document.querySelectorAll('.btn');

for(const button of buttons){

  button.addEventListener('click', sayHello);
  button.addEventListener('click', sayHi);

}



//add new div in java script

let newDiv = document.createElement('div');
newDiv.textContent = "New Div";

newDiv.classList.add('bg-red-500', 'text-white', 'p-8', 'mt-6');

document.body.appendChild(newDiv);

newDiv.addEventListener('click', function(event){
  let newSpan = document.createElement('span');
  newSpan.textContent = "Hi I'm Span !";
  newSpan.classList.add('text-blue-400','text-center');

  event.target.appendChild(newSpan);
  // document.body.appendChild(newSpan);
});

