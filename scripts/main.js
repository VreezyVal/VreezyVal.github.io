// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// let myHtml = document.querySelector('html');
let myImage = document.querySelector('img');
myImage.addEventListener('click',()=>{
    let mySrc = myImage.getAttribute('src')
    if(mySrc === '/images/logo_bataillon_exploration.png') {
        myImage.setAttribute('src', '/images/AnnieLeonhart_voltige.PNG') 
    } else {
        myImage.setAttribute('src', '/images/logo_bataillon_exploration.png')
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Yokoso ' + myName
}
if(!localStorage.getItem('nom')){
    setUserName();
}else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Okaeri ' + storedName;
}
myButton.addEventListener('click', ()=>{setUserName()});