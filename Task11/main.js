let myForm=document.getElementById('my-form');
let Inputname=document.getElementById('name');
let Inputemail=document.getElementById('email');

myForm.addEventListener('submit',addForm)

function addForm(e){
    e.preventDefault()
    let myObj={
        Name:"",
        Email:""
    }
    myObj.Name=Inputname.value
    myObj.Email=Inputemail.value
    let myObj_serialized=JSON.stringify(myObj)
    localStorage.setItem('name',myObj_serialized)
    Inputname.value=""
    Inputemail.value=""
}