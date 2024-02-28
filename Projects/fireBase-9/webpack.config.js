const path= require("path")
module.exports={
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    watch: true// whenever we make changes to index.js it watches and alter the bundle.js
}