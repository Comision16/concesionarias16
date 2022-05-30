const autos = require('./autos');
const personas = require('./personas');

const concesionaria = {
    autos,
    buscarAuto : function(patente) {

        let auto = this.autos.find(auto => auto.patente === patente);
        return auto ? auto : null;

    },
    venderAuto : function(patente){

        let auto = this.buscarAuto(patente);
        auto && (auto.vendido = true);
        //auto.vendido = auto && true 
        return auto

    },
    autosParaLaVenta : function(){

        let autos = this.autos.filter(auto => !auto.vendido);
        return autos;

    },
    autosNuevos : function () {

        let autosParaLaVenta = this.autosParaLaVenta();
        return autosParaLaVenta.filter(auto => auto.km < 100);

    },
    listaDeVentas : function() {

        let autosVendidos = this.autos.filter(auto => auto.vendido);
        let ventas = autosVendidos.map(auto => auto.precio)
        return ventas
        
    },
    totalDeVentas : function(){
        
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length !== 0 ? autosVendidos.reduce((acum,num) => acum + num) : 0;
    },
    puedeComprar : function(auto,persona){

        let auto = this.autos.find(auto => auto.patente === patente && !auto.vendido);

        return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas
    }
}

console.log(concesionaria.puedeComprar('JLK117',personas[0]));