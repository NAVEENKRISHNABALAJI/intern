//findin poer of a number
// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  console.log(pow(2,3))

  function pow(x,n){
    return (n===1)? x: x*pow(x,n-1)
  }

  const fibonacci= (n)=> (n<=2 ? 1 : fibonacci(n-1)+fibonacci(n-2))
  console.log(fibonacci(10))