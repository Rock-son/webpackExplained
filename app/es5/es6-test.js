'use strict';

var name = 'Jennifer';
var surname = 'Aniston';
var calcAge = function calcAge(year) {
  return new Date().getFullYear() - year;
};
var text = 'Name: ' + name + ' ' + surname + ', Age: ' + calcAge(1978);

var node = document.createElement("div");
node.innerText = text;

document.getElementById('root').appendChild(node);