function Auto(marca, modelo, precio, km, color,cuotas,anio,patente,vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this.patente = patente;
    this.vendido = vendido;
}

const nuevoAuto = new Auto("Reanult", "Kangoo", 300000, 150000, "gris", 24, 2014,"OBO378",false);

console.log(nuevoAuto)