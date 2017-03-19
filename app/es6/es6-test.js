const name = 'Jennifer';
const surname = 'Aniston';
const calcAge = (year) => new Date().getFullYear() - year;
const text = `Name: ${name} ${surname}, Age: ${calcAge(1978)}`

const node = document.createElement("div");
node.innerText = text;

document.getElementById('root').appendChild(node);

