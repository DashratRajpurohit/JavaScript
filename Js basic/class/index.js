var p = document.querySelector('p');

let pstyle ={
    color: 'yellow',
    fontSize: '50px',
    backgroundColor: 'black'


};

Object.assign(p.style,pstyle);


var h = document.createElement('h1');
h.textContent = "Dashrat singh";

let hstyle ={
    color: 'White',
    fontSize: '50px',
    backgroundColor: 'black'};

var div = document.querySelector(".parent1");
var h1 = document.querySelector(".h1");

console.log(div);
console.log(h1);

Object.assign(h.style,hstyle);
document.body.insertBefore(h, h1);