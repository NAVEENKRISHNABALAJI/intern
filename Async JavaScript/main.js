//promises
//three states: Pending, fulfilled, rejected fulfiled and rejected in v1

//async await

const myUsers={
    userList:[]
}
const users= async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await response.json()
    //console.log(userData)
    return userData
}

const anotherFunction= async()=>{
    const data= await users()
    myUsers.userList= data
    console.log(myUsers.userList)
    return data
}

anotherFunction()
console.log(myUsers.userList)//global so executed before await exexcutes so empty array
// const users= fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=> {return response.json()})
// .then(users=> users.forEach((user)=> {console.log(user)}))

// console.log(users)
//if the number of then increases then the code becomes chaotic
//so async await were introduced