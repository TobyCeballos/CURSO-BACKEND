class User{
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return [this.nombre +' '+ this.apellido];
    }
    addMascota(aMascota){
        this.mascotas.push(aMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook({title, author}){
        this.libros.push({title: title,author: author})
    }
    getBookNames(){
        return this.libros.map((libros) =>{
            return libros.title
        })
    }
    
}


const user1 = new User(
    "Tobias",
    "Ceballos",
    [
        { title:"Rayuela", author:"Julio Cortazar"},
        { title:"Crimen y castigo", author:"Fiódor Dostoyevski"}
    ],
    ["Sucky", "Sasuke", "Kira"]
)

const user2 = new User(
    "Juan",
    "Ponce",
    [
        { title:"Invasión", author:"Robin Cook"},
        { title:"La teoria del todo", author:"Stephen Hawking"},
        { title:"Carrie", author:"Stephen King"},
        { title:"Breve historia del tiempo", author:"Stephen Hawking"}
    ],
    ["Tom", "Fatiga"]
)




// CONSOLE.

console.warn(`- getFullName -`)

console.log(`El nombre completo es ${user1.getFullName()}.`)
console.log(`El nombre completo es ${user2.getFullName()}.`)

console.log('\n');

console.warn(`- countMascotas -`)

console.log(`${user1.getFullName()} tiene ${user1.countMascotas()} mascotas`)
console.log(`${user2.getFullName()} tiene ${user2.countMascotas()} mascotas`)

console.log('\n');

console.warn(`- addMascota -`)
user1.addMascota('Jerry')
console.log(`${user1.getFullName()} adoptó a una mascota mas, ahora tiene ${user1.countMascotas()} mascotas`)
console.log('\n');



console.warn(`- getBookNames -`)

console.log(`Los nombres de los libros favoritos de ${user1.getFullName()} son: ${user1.getBookNames()}`)
console.log(`Los nombres de los libros favoritos de ${user2.getFullName()} son: ${user2.getBookNames()}`)

console.log('\n');



console.warn(`- addBook -`)

user2.addBook({title:'Diario de Ana Frank', author:'Annelies Marie Frank'})
console.log(`Ahora ${user2.getFullName()} tiene un nuevo libro favorito a su coleccion, ahora son: ${user2.getBookNames()}`)

console.log('\n');