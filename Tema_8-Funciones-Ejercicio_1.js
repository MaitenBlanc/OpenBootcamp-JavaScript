function verdadero() {
    return true;
}

/////////////////////////////////////////////////

async function promesa() {
    return setTimeout(() => console.log("Hola, soy una promesa"), 5000);
};

//////////////////////////////////////////////////

function* indicesPares() {
    let par = 0;
    while (true) {
        yield par += 2;
    }

}

const gen = indicesPares();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
