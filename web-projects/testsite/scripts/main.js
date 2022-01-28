/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
if(iceCream === 'fresa') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}*/

/* let myHeading = document.querySelector('h1');
 alert(' ¡Hola! ' );*/

/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

/*let myHTML = document.querySelector('html');
myHTML.onclick = function() {};
alert('Ouch! Stop poking me!');*/

/*function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(num1,num2);
  alert()*/

  /*let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/descarga.jpg') {
      myImage.setAttribute('src','images/firefox.jpg');
    } else {
      myImage.setAttribute('src','images/descarga.jpg');
    }
}*/

/*let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}*/

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}



  



