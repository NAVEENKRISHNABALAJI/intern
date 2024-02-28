// const myPizza={
//     size:"medium",
//     crust:"original",
//     bake: function(){
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizza`)
//     }
// }
// myPizza.bake()

// to make object more stucture clases was introduce to js 
// classes are like a blueprint or template for creating objects
console.log("Class implementation: ")
class Pizza{
    crust= 'original'
    #sause= 'tomato'
    constructor(sizePizza){
        this.size=sizePizza
    }
    getCrust(){
        return this.crust
    }
    setCrust(crust){
        this.crust=crust
    }

    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sause} pizza`)
    }
    
}

const newPizza= new Pizza("small")
newPizza.bake()

class specialPizza extends Pizza{
    constructor(sizePizza){
        super(sizePizza)//super is used to link the parameters passed to the childclass to the parent class
        this.type="Margarita"

    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} crust pizza has 8 slices`)
    }
}

const mySpecialPizza= new specialPizza("thin")
mySpecialPizza.slice()