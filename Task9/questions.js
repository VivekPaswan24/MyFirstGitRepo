let form=document.getElementById('addForm')
let itemlist=document.getElementById('items')

let filter=document.getElementById('filter')

let items=document.getElementsByClassName('list-group-item')
for(let i=0;i<items.length;i++){
    let editBtn=document.createElement('button')
    editBtn.className='btn btn-sm float-right '
    editBtn.appendChild(document.createTextNode('EDIT'))
    items[i].insertAdjacentElement('beforeend',editBtn)
}

filter.addEventListener('keyup',itemSearch)

form.addEventListener('submit',addItems);

itemlist.addEventListener('click', removeItem)


function addItems(e){
    e.preventDefault();
    
    let newItem=document.getElementById('item').value
    let newdes= ` ${document.getElementById('description').value}`
    let li=document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(newdes))

    let btn=document.createElement('button')
    btn.className='btn btn-danger btn-sm float-right delete'
    btn.appendChild(document.createTextNode('X'))
    li.appendChild(btn)

    let editBtn=document.createElement('button')
    editBtn.className='btn btn-sm float-right'
    editBtn.appendChild(document.createTextNode('EDIT'))
    li.insertAdjacentElement('beforeend',editBtn)
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

//Search items
function itemSearch(e){
    let text =e.target.value.toLowerCase()
     
    let items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent.toLowerCase()
        let desName=item.childNodes[1].textContent.toLowerCase()
        if(itemName.indexOf(text)!==-1 || desName.indexOf(text)!==-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    });    
    }

