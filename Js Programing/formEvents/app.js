const form= document.querySelector("#shelterForm")
const input= document.querySelector("#catName")
const list= document.querySelector("#cats")
form .addEventListener('submit',function(event){
    event.preventDefault()
    console.log("Submitted the form!")
    const newCat= input.value
    newLi= document.createElement('li')
    newLi.textContent=newCat
    console.log(newLi)
    list.appendChild(newLi)
})