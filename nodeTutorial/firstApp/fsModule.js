const fileSystem= require('fs')
fileSystem.readFile('calc.js','utf-8', function(err,data){
    if(!err){
        console.log(`Result from file: ${data}`)
    }
    else{
        console.log(`error: ${err}`)
    }
})
//creates a newfile if the file mentioned doesnot exist, if the file already exists the writefile method will erase all data in file and writes the new data
fileSystem.writeFile('calc1.js','console.log("Bone")',(err)=>{
    if(!err)
        console.log("Data Saved")
})

//inorder to not erase the existing data and append our data we have to use appendFile method
fileSystem.appendFile('calc.js','console.log("Data appended from fsModule.js")',(err)=>{
    if(!err){
        console.log("Data Appended")
    }
})

//deleting file
fileSystem.unlink("calc1.js",(err)=>{
    if(!err)
    console.log("File deleted successfully")
})