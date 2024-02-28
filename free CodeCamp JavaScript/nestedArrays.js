var myPlants=[
    {
        type:"flower",
        list:[
            "rose",
            "lily",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "bamboo",
            "pine"
        ]
    }
]

let secondTree= myPlants[1].list[1]
console.log(secondTree)

//challenge
let collection={
    "2548":{
        "album":"Slippery when wet",
        "artists":"Bon Jovi",
        "tracks":[
            "Let it Rock!",
            "You give love a bad name"
        ]
    },
    "2468":{
            "album":"1999",
            "artists":"Prince",
            "tracks":[
                "1999",
                "Little Red Corvette"
            ]
        },
    "1245":{
            "artist":"Robert Palmer",
            "tracks":[]
        },
        
    "5439":{
        "album":"ABBA gold"
    }
}

function updateRecords(id, props, value){
    if(value==""){
        delete collection.id.props
    }
    else if(props==="tracks")
    {
        collection[id][props]= collection[id][props]||[]
        collection[id][props].push(value)

    }
    else{
        collection[id][props]= value
    }
    return collection
}
updateRecords(2468,"tracks","test")
console.log(updateRecords(5439,"artist","ABBA"))

