let nombre = "Maitén";

let apellido = "Blanc";

let estudiante = nombre.concat(" " + apellido);

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let num_estudiante = estudiante.length;

let primera_letra = estudiante.slice(0, 1);

let ultima_letra = apellido.slice(apellido.length -1, apellido.length);

let elimina_espacios = estudiante.replace(/ /g, "");

let buscar = estudiante.includes(nombre);