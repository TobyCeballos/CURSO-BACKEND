const { promises: fs} = require('fs')

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }
    
    async getRandom(){
        try {
            
            const productos = await this.getAll()
            //const random = Math.random() * productos.length | 0 ;
            //const rProduct = productos[random]
            let random = Math.floor(Math.random() * productos.length);
            const rProduct = await productos[random]
            console.log(rProduct)
            return rProduct;
        } catch (error) {
            return error
        }
    }

    async getAll(){
        try {
            const objs = await fs.readFile(this.archivo, 'utf-8');
            console.log(objs);
            return JSON.parse(objs);
        } catch (error) {
            return error;
        }
    }
};

const archivo1 = new Contenedor("./productos.txt")

module.exports = archivo1
