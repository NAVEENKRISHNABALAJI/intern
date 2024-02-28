function testSize(number){
    if(number<5)
        return "tiny"
    else if(number<10)
        return "small"
    else if(number<15)
        return "medium"
    else if(number<20)
        return "large"
    else
        return "huge"
}
console.log(testSize(10))
console.log(testSize(40))
