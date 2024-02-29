// const postTask= async()=>{
//     let task= document.querySelector("#new-task")
//     const response= await fetch("http://localhost:4200/newTask",{
//         method:"POST",
//         headers:{
//             "Content-type":"application/json"
//         },
//         body: JSON.stringify({
//             task:task.value
//         })
//     })
// }

const newTaskForm= document.querySelector("#new-task-form")
newTaskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const task= newTaskForm['new-task'].value
    console.log(task)
    fetch("http://localhost:4200/newTask",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                "task": task
            })
        }).then(()=>{
            console.log("Data")
        }).catch(err=> console.log(err))
    
})
const getTask= async()=>{
    let ul= document.querySelector("ul")
    const response= await fetch("http://localhost:4200/added",
    {
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    })
    const newTask= await response.json()
    var list= document.createElement("li")
    list.innerHTML= newTask.task 
    ul.append(list)
}