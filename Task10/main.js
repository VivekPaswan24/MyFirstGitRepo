let myForm=document.getElementById('my-form');
let Inputname=document.getElementById('name');
let Inputemail=document.getElementById('email');

myForm.addEventListener('submit',addForm)

function addForm(e){
    e.preventDefault()
    let obj=`Name:${Inputname.value} Email:${Inputemail.value}`
    localStorage.setItem('name',obj)
    Inputname.value=""
    Inputemail.value=""
}