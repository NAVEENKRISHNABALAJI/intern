//Asynchronous Javascript
//async await

//fetch is used to get data from a api
const getDadJokes= async()=>{
    const response= await fetch("https://icanhazdadjoke.com/",
    {
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    })
    const jsonJokeData= await response.json()
    console.log(jsonJokeData)
}

getDadJokes()

//how to post our data in the website using fetch

const jokeObject={
    "id": "gNRnWvzdiib",
    "joke": "Sgt.: Commissar! Commissar! The troops are revolting! Commissar: Well, you’re pretty repulsive yourself.",
    "status": 200
}
const postDadJokes= async(jokeObj)=>{
    const response= await fetch("https://httpbin.org/post",
    {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    })
    const responseData= await response.json()
    console.log(responseData.headers)
}

postDadJokes(jokeObject)