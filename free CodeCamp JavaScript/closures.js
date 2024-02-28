// function x(){
//     for(let i=1;i<=5;i++){// if let is used then it will produce output 1 2 3 4 5 
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }
//     console.log("JavaScript")
// }
// x()

//alternative method without using let keyword is closure
//so what this does is instead of accesing the same var i in global scope
//it creates a copy of i in x each time the function is called, hence closure is used
function x(){
    for(var i=1;i<=5;i++){// if let is used then it will produce output 1 2 3 4 5 
        function close(x){
            setTimeout(function(){
                console.log(x)
            }, x*1000)
        }
        close(i)
    }
    console.log("JavaScript")
}
x()

function myFunction() {
    return this;
  }

  //console.log(myFunction()) /*will return the global object*/

  
//   function outer(){
//     function inner(){
//         console.log(a)
//     }
//     var a=10
//     return inner;
//   }

//   let close= outer()
//   close()