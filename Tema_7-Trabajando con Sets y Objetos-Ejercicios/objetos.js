const datos_personales = {
    nombre: "Maitén",
    apellido: "Blanc",
    edad: 27,
    altura: 1.69,
    eresDesarrollador: true
}

const mi_edad = datos_personales.edad;
console.log(mi_edad);

const lista_amigos = [
    {
        ...datos_personales,
    },{
        nombre: "Clara",
        apellido: "Arlettaz",
        edad: 27,
        altura: 1.65,
        eresDesarrollador: false
    },{
        nombre: "Florencia",
        apellido: "Noir",
        edad: 24,
        altura: 1.65,
        eresDesarrollador: false
    }
]

const lista_ordenada = lista_amigos.sort((a, b) => a.edad - b.edad);
console.log(lista_ordenada);