import fs from 'fs'

export class ProductManager {
    constructor(pathFile) {
        this.id = 0
        this.id !== 0 ? this.id++ : ''
        this.path = pathFile
        this.products = []       
    }
    addProduct(obj) {
        this.products.push({id: this.id,...obj})
        console.log(`Producto creado con ID ${this.id}`)
        fs.writeFileSync(this.path, JSON.stringify(this.products))
        this.id++
     }
    /* getProducts() {
        try {
           return JSON.parse(fs.readFileSync(this.path, 'utf-8'))
        } catch (error) {
            console.log({error})
        }
    } */
    /* getProductById(id) {
        const getDataInTxt = fs.readFileSync(this.path, 'utf-8')
        const arr = []
        const fileParsed = JSON.parse(getDataInTxt)
        arr.push(...fileParsed)
        const arrayFilteredOut = arr.filter(el => el.id === id )
        console.log('readById', arrayFilteredOut)
    } */
    deleteById(id) {
        const getDataInTxt = fs.readFileSync(this.path, 'utf-8')
        const arr = []
        const fileParsed = JSON.parse(getDataInTxt)
        arr.push(...fileParsed)
        const arrayFilteredOut = arr.filter(el => el.id !== id )
        console.log('Product deleted: ', arrayFilteredOut)
        return fs.writeFileSync(this.path,JSON.stringify(arrayFilteredOut, null, 2))
    } 
}

//const test = new ProductManager('./database.txt')

//test.addProduct({title: 'titulo', description: 'descripcion', price: 20, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 5})
//test.addProduct({title: 'titulo1', description: 'descripcion2', price: 23, thumbnail: 'https://storage.google.com/test/', code: 2213, stock: 2})
//test.addProduct('titulo2', 'descripcion2', 25, 'https://storage.google.com/test/', 222313, 20)
//test.getProducts()
//test.getProductById(0)
//test.deleteById(1)
