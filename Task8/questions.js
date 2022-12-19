let form=document.getElementById('addForm')
let itemlist=document.getElementById('items')

let items=document.getElementsByClassName('list-group-item')
for(let i=0;i<items.length;i++){
    let editBtn=document.createElement('button')
    editBtn.className='btn btn-sm float-right '
    editBtn.appendChild(document.createTextNode('E'))
    items[i].insertAdjacentElement('afterbegin',editBtn)
}

form.addEventListener('submit',addItems);

itemlist.addEventListener('click', removeItem)


function addItems(e){
    e.preventDefault();
    
    let newItem=document.getElementById('item').value

    let li=document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
    let btn=document.createElement('button')
    btn.className='btn btn-danger btn-sm float-right delete'
    btn.appendChild(document.createTextNode('X'))
    li.appendChild(btn)
    let editBtn=document.createElement('button')
    editBtn.className='btn btn-sm float-right'
    editBtn.appendChild(document.createTextNode('E'))
    li.insertAdjacentElement('afterbegin',editBtn)
    itemlist.appendChild(li)
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            let li=e.target.parentElement
            itemlist.removeChild(li)
        }
    }
}