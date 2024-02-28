try{
    console.log("Start of try runs...")
    unicycle;
    console.log("End of try- never reached")
}
catch(e){
    console.log("Error has occured: "+ e.stack)
}
finally{
    console.log("This always runs")
}
console.log("Execution continues..")

