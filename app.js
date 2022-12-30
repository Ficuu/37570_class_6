import express from 'express'
import fs from 'fs'
import {ProductManager} from './productManager.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

const test = new ProductManager('./database.txt')
test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})
test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})
test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})
test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})
test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})

app.get('/products', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./database.txt', 'utf-8'))
    const product = req.query.product
    !product ? res.send({data}) : ''
    const dataFiltered = data.filter(producto => producto.title === product) 
    res.send({dataFiltered})
}) 

app.get('/products/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./database.txt', 'utf-8'))
    console.log(data)
    const dataFiltered = data.filter(el => el.id === Number(req.params.id))
    console.log(dataFiltered)
    res.json(dataFiltered)
})

app.listen(3001, () => {
    console.log(`Server listen in port 3001`)
})