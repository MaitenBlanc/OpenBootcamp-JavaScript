const compra = ["Aceite", "Leche", "Tomates", "Harina", "Jugo"];

compra.push("Aceite de girasol");
console.log(compra);

compra.pop("Aceite de girasol");
console.log(compra);

const peliculas = [
    { 
        titulo: "El maquinista",
        director: "Brad Anderson",
        fecha: new Date(2004, 0, 18)
    },
    {
        titulo: "El pianista",
        director: "Roman Polanski",
        fecha: new Date(2001, 2, 6)
    },
    {
        titulo: "Marley y yo",
        director: "David Frankel",
        fecha: new Date(2008, 11, 25)
    }
];

const peliculas_filter = peliculas.filter(valor => valor.fecha > new Date(2010, 0, 1));
console.log(peliculas_filter);

const directores_map = peliculas.map(valor => valor.director);
console.log(directores_map);

const titulos_map = peliculas.map(valor => valor.titulo);
console.log(titulos_map);

const lista_nueva_concat = directores_map.concat(titulos_map);
console.log(lista_nueva_concat);

const lista_nueva_factor = [...directores_map, ...titulos_map];
console.log(lista_nueva_factor);