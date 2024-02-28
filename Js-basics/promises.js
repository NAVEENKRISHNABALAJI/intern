const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post two', body:"This is post two"}
]

function getPosts(){
    setTimeout(()=>{
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML= output
    },1000)
}

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error= false
            if(!error){
                resolve()
            }
            else{
                reject("Error: Something went wrong")
            }
        },1200)
    })
    
}

let newPost={title:"Post Three",body:"This is post three"}
// createPosts(newPost)
// .then(getPosts)
// .catch(err=>console.log(err))

//async /await

async function init(){
    await createPosts(newPost)

    getPosts()
}
// init()

//promis.all
// const promise1= Promise.resolve("Hello World")
// const promise2= 10
// const promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"GoodBye")
// })

// const promise4= fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=> res.json())


// Promise.all([promise1,promise2,promise3,promise4])
// .then(values => console.log(values))

//async/await with fetch
async function fetchUsers(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await res.json()
    console.log(data)
}



// fetchUsers()

fetch("https://api.publicapis.org/entries")
.then(response=>{
    if(!response.ok){
        throw Error("Unable to fetch")
    }
    return response.json()
})
.then(data=> console.log(data))

async function getData(){
    const promise1= new Promise(async(resolve,reject)=>{
        let response= await fetch("https://api.publicapis.org/entries")
        if(!response.ok){
            reject("errorn in fetching")
        }
        const data= await response.json()
        console.log(data)
        resolve(data)
    })
const data= promise1.then(data=>console.log(data))
    try{
        let response= await fetch("https://api.publicapis.org/entrie")
        const data= await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }

}

getData()



