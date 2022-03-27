let addButton = document.getElementById('add_button')
addButton.addEventListener('click', enterText)


function enterText(e){
    e.preventDefault();
    let input_text = document.querySelector('.form-control')
    let currentButton = e.currentTarget;
    let currentInput  = currentButton.previousElementSibling
    let currentNotes = currentInput.value

    let newLine = document.createElement('li')
    newLine.className = 'list-group-item active d-flex justify-content-between ' 
    newLine.innerHTML = `<h5 class="flex-grow-1">${currentNotes}</h5>
     <button id="btn1" type="button" class="btn btn-primary mx-3" style="z-index: 1" onclick="edit(this)">Edit</button>

    <button id="btn1" type="button"  class="btn btn-primary" style="z-index: 1;" onclick="remove(this)">Remove</button>`

    let parentLists = document.getElementById('parentLists');
    parentLists.appendChild(newLine)

    input_text.value = "";    
    

}
function myfun(){
  const input=document.getElementsByTagName('input');
  console.log(input);

}

function remove(currentElement){

    currentElement.parentElement.remove()
}

function edit(currentElement){
     if(currentElement.textContent == "Success"){
        currentElement.textContent = "Edit"
        let currentNotes = currentElement.previousElementSibling.value
        let currHeading = document.createElement('h5')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currentNotes
        currentElement.parentElement.replaceChild(currHeading, currentElement.previousElementSibling)
     }
     else{
    let currentNotes = currentElement.previousElementSibling.textContent
    let currInput = document.createElement('input')
    currInput.type = "text"
    currInput.className = "form-control"
    currInput.value = currentNotes
    currentElement.textContent = "Success"
    
    currentElement.parentElement.replaceChild(currInput, currentElement.previousElementSibling)
} 

}