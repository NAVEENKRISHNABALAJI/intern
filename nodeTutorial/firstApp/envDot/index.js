require('dotenv').config({path: process.env.NODE_ENV})
// dotenv.config({path:`.env.${process.env.NODE_ENV}`})
console.log(process.env.PATH)
console.log(typeof process.env.PATH)
console.log(typeof process.env)//--->object

//hence new properties can be set like normal object properties
process.env.PORT= 1234
console.log(process.env.PORT)
//process.env.NODE_ENV = 'development'
console.log(process.env.NODE_ENV)
console.log(process.env.db_username)
console.log(process.env.db_password)
console.log(process.env.GMAP_API)