const mongoose = require('mongoose')
const {mongodb} = require('./config')

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db) => {
    console.log("Conexion exitosa")
}).catch((err) => {
    console.log("Ha ocurrido un error: "+err)
})

module.exports = connection