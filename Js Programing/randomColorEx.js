// const btn= document.querySelector('button')
// const h1= document.querySelector('h1')
// btn.addEventListener('click',function (){
//     const R= Math.floor(Math.random()*255)
//     const G= Math.floor(Math.random()*255)
//     const B= Math.floor(Math.random()*255)
//     document.body.style.backgroundColor=`rgb(${R},${G},${B})`
//     h1.innerText=`rgb(${R},${G},${B})`
//     btn.style.alignSelf= 'center'
//     h1.style.alignSelf= 'center'
// })
window.addEventListener('keydown',function(e){
    switch(e.code){//e.key will give the key pressed in the keyboard at the event e
        case 'ArrowUp':
            console.log('Up!')
            break
        case 'ArrowDown':
            console.log('Down!')
            break
        case 'ArrowLeft':
            console.log('Left!')
            break
        case 'ArrowRight':
            console.log("Right!")
            break
        default:
            console.log("Different Key")
    }
})

