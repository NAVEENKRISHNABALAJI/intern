//this shows how to freeze object elements
function freezeObj(){
    "use strict"
    const MATH_CONSTANTS={
        PI: 3.1415
    }

    Object.freeze(MATH_CONSTANTS)//freezes the object
    try{
        MATH_CONSTANTS.PI=1.23
    }
    catch(ex){
        console.log(ex)
    }

    return MATH_CONSTANTS.PI
}

let Pi= freezeObj()
console.log()