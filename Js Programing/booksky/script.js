var popupOverlay= document.querySelector(".popup-overlay")
var popupBox= document.querySelector(".popup-box")
var addpopupbtn= document.querySelector("#add-popup-button")

addpopupbtn.addEventListener("click",function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})

var cancelbtn= document.getElementById("popup-cancel")
cancelbtn.addEventListener("click", function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

var container= document.querySelector(".container")
var addBook= document.getElementById("add-book")
var bookName= document.getElementById("Book-title-input")
var bookAuthor= document.getElementById("Book-author")
var bookDesc= document.getElementById("book-desc-input")


