const Contenedor = require('./contenedor.js')
const productos = require('./productos.txt')
const express = require('express')

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos al Servidor Express</h1>')
 })


app.get('/productos', async (req, res) => {
    const objeto = await Contenedor.getAll
    res.send(objeto)
})

app.get('/productosRandom', async (req, res) => {
    let obj = await Contenedor.getRandom
    res.send(obj)
})

