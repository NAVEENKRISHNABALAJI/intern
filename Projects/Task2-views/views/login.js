const signinForm= document.querySelector("#signin-form")
signinForm.addEventListener('submit',async(e)=>{
    //e.preventDefault()

    //getting user info
    const email= signinForm['signin-email'].value
    const password= signinForm['signin-password'].value

    fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
    
})




// loginForm.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.pwd.value)
//     .then((cred)=>{
//         //console.log("User logged in", cred.user)
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })
// })