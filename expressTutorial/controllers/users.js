
exports.homepage= async(req,res)=>{
    res.status(200).send("Success")
}

exports.newUsers= async(req,res)=>{
    //res.send("User new form")
    //firebase
    res.render("users/new",{firstName:"TEst"})
}
