const todos=['Collect Chicken eggs','Clean litter box']
let input= prompt("What would you like to do?")
while(input !== 'quit' && input!=='q'){
    if(input==='list'){
        console.log("*****************")
        for(let i=0;i<todos.length;i++)
        console.log(`${i}. ${todos[i]}`)
        console.log("*****************")
    }
    else if(input==='new'){
        const newTodo= prompt("Ok, whats the new todo?")
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }
    else if(input==='delete'){
        const index= parseInt(prompt("What index would yo ulike to delete"))
        if(!isNaN(index)){
        const deleted= todos.splice(index,1)
        console.log(`Ok deleted ${deleted}`)}
        else{
            console.log("Unknown index")
        }
    }

    input= prompt("What would you like to do?")

}
console.log("Ok, quit the app!")
