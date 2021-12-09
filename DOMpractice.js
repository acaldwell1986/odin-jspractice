// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector('#container');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const pDiv = document.createElement('p');

container.appendChild(p);
p.textContent = `Hey I'm red!`;
p.style.color = 'red';

container.appendChild(h3)
h3.textContent = `I'm a blue h3!`;
h3.style.color = 'blue';

container.appendChild(div);
div.style.borderColor = 'Black';
div.style.backgroundColor = 'Pink';

div.appendChild(h1);
h1.textContent = "I'm in a div!"

div.appendChild(pDiv);
pDiv.textContent = "ME TOO!"





