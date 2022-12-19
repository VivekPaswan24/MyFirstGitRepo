let itemlist=document.querySelector('#items');
//parentElement
console.log(itemlist.parentElement)
itemlist.parentElement.style.backgroundColor='#ccc'

//lastElementChild
console.log(itemlist.lastElementChild)
itemlist.lastElementChild.textContent="hello 4"

//lastChild
console.log(itemlist.lastChild)

//firstElementChild
console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent="hello 1"

// firstChid
console.log(itemlist.firstChild)

//nextSibling
console.log(itemlist.nextSibling)

//nextElementSibling
console.log(itemlist.nextElementSibling)

//previousSibling
console.log(itemlist.previousSibling)

//previousElementSibling
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color='green'

// createElement
let newDiv=document.createElement('div')
console.log(newDiv)

//set Attribute
newDiv.setAttribute('class', 'hello')
newDiv.setAttribute('id', 'hi')

//createTextNode
let newText=document.createTextNode('Hello World')
console.log(newText)

//appendchild
itemlist.appendChild(newText)


let divnew=document.createElement('div')
let textnew=document.createTextNode('Hello World')
divnew.appendChild(textnew)

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')

container.insertBefore(divnew, h1);

let text1=document.createTextNode('Hello Word')

itemlist.insertBefore(text1,itemlist.firstElementChild)