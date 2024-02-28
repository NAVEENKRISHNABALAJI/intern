//signing up users
const signupForm= document.querySelector("#signup-form")
signupForm.addEventListener('submit',(e)=>{
    //e.preventDefault()

    //getting user info
    const email= signupForm['signup-email'].value
    const password= signupForm['signup-password'].value
    fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(()=>{
            window.location.replace("./login.html")
        })
    //console.log(email,password)
})

// async function postData(email,password){
        
//         })
// }