//selecting popupBox popupOverlay and add btn

let popupOverlay=document.querySelector(".popupOverlay")
let popupBox= document.querySelector(".popupBox")
let addPopupButton= document.getElementById("addPopupButton")
let cancelButton= document.getElementById("cancelPopup")

addPopupButton.addEventListener('click',function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})

cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})
//select container,addbook,etc

let container= document.querySelector(".container")
let addBook= document.getElementById("addBook")
let bookTitle= document.getElementById("bookTitleInput")
let bookAuthor= document.getElementById("bookAuthorInput")
let bookDescription= document.getElementById("bookDescriptionInput")
addBook.addEventListener("click",function(event){
    event.preventDefault()
    let div = document.createElement('div')
    div.setAttribute("class","bookContainer")
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDescription.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

function deleteBook(event){
    event.target.parentElement.remove()
}