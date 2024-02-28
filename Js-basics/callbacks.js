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

// function createPosts(post){
//     setTimeout(()=>{
//         posts.push(post)
//     },2000)
// }

// getPosts();
let newPost={title:"Post Three",body:"This is post three"}
// createPosts(newPost)
//by the time the create post execute the dom is already painted
//so post three is not visible
//so call backs are used 

function createPosts(post,callBack){
    setTimeout(()=>{
        posts.push(post)
        callBack()
    },1200)
}

createPosts(newPost,getPosts)
