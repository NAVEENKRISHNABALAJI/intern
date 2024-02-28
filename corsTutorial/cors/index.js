const cors= require('cors')
const corsOptions={
    origin:['https://mybank.com','https://mybank2.com'],
    optionsSuccessStatus:200
}

module.exports= cors(corsOptions)