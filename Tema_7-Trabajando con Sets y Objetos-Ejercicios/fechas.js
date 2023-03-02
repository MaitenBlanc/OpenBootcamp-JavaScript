const fecha_hoy = new Date();
console.log(fecha_hoy);

const fecha_nac = new Date("December 16, 1995");
console.log(fecha_nac);

const mayor = fecha_hoy > fecha_nac;
console.log(mayor);

const dia = fecha_nac.getDate();
console.log(dia);

const mes = fecha_nac.getMonth();
console.log(mes + 1);

const anio = fecha_nac.getFullYear();
console.log(anio);