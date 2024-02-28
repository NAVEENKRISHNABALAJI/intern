 const path= require('path')
// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))


// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// const fileObject= path.parse(__filename)
// console.log(fileObject)
// console.log(path.format(fileObject))

// console.log(path.isAbsolute(__filename))

//path.join
console.log(path.join("folder1","folder2","pathModule.js"))
console.log(path.join("/folder1","//folder2","../pathModule.js"))

//resolve
console.log(path.resolve("folder1","folder2","pathModule.js"))
console.log(path.resolve("/folder1","//folder2","pathModule.js"))
console.log(path.resolve('/folder1','//folder2','../index.html'))