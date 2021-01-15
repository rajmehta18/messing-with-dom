let submitBtn = document.getElementById('addForm');
submitBtn.addEventListener('submit',addItems)

let listItem = document.getElementById('items')
let filter = document.getElementById('filter')
filter.addEventListener('keyup',filterItem)
function addItems(event){
    event.preventDefault()
    let listElement = document.createElement('li')
    listElement.classList+='list-group-item'
    let val = document.getElementById('textInput').value
    //console.log(val)
    listElement.appendChild(document.createTextNode(val))
    
    let deleteBtn = document.createElement('button')
    deleteBtn.classList += "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode('X'))
    listElement.appendChild(deleteBtn)
    
    
    listItem.appendChild(listElement)
}

listItem.addEventListener('click',removeItem)

function removeItem(event){
    if(event.target.classList.contains('delete'))
    {
        let li = event.target.parentElement
        listItem.removeChild(li)
    }
}
function filterItem(e){
  let text = e.target.value.toLowerCase();
  let items = listItem.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}