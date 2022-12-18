//Changing the 2nd item font color to green

let item2 = document.querySelectorAll('li');
item2[1].style.color = 'green'

//Changing all the odd items background color to green

let odd = document.querySelectorAll('li:nth-child(odd)')

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green'
}

// Difference betwwen querrySelector and querrySelectorAll

// By using querrySelector we can only select only one element , but by using querrySelectorAll we can select multiple element and do some changes to it.