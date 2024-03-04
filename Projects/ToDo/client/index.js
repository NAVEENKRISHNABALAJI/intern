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
//let list= document.querySelectorAll("li")
let deleteBtns= document.querySelectorAll(".deleteTask")
deleteBtns.forEach((deleteBtn) =>{
    deleteBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("clicked delete button")
        let taskId= deleteBtn.getAttribute("data-task-id")
        fetch("http://localhost:4200/deleteTask",{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    "taskId": taskId
                })
            })
            .then(()=> console.log("Deleted the task"))
            .catch(err=> console.log(err))
    
    })
})

let ul= document.querySelector("ul")
let allTasks=[]
window.onload=async()=>{
    const response= await fetch("http://localhost:4200/added",
        {
            method:"GET",
            headers:{
                Accept:"application/json"
            }
        })
        allTasks= await response.json()
        //console.log(newTask)
        for( let currTask of allTasks){
            let linebreak= document.createElement('br')
            let list= document.createElement("li")
            list.innerHTML= currTask['task'] + ` <button class=deleteTask data-task-id= ${currTask['taskId']}>Delete</button>`
            ul.append(list)
            ul.append(linebreak)
            // console.log(currTask['task'])
        }
}

const newTaskForm= document.querySelector("#new-task-form")
newTaskForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const task= newTaskForm['new-task'].value
    //console.log(task)
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

        
        
        let list= document.createElement("li")
        list.innerHTML= task  
        ul.append(list)
})
// const getTask= async()=>{
    
// }