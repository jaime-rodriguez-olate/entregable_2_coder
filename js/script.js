console.log("Bienvenidos al sistema de monitoreo en línea");

//arrays
const mediciones = [
    {nombre: "Electricidad", datos:[220,380,440], unidad: "Kwh"},
    {nombre: "Agua", datos:[1500,1700,2000], unidad: "M3"},
    {nombre: "Gas", datos:[100,200,300], unidad: "M3"},

]
const variablesMedibles = ["electriciad","agua","gas","agregar otro",];

//funcion.
function sumaArrays(arreglox) {
    let accum = 0;
    for ( var i = 0; i < arreglox.length; i++) {
        accum += arreglox[i];
    }
    return accum;
}

//Objetos
class tipo_medicion{
    constructor(nombre, valores_obtenidos, unidad){

        this.valores_obtenidos = valores_obtenidos;
        this.nombre = nombre;
        this.unidad = unidad;

        this.addValue = function(value){
            valores_obtenidos.push(value);
        }

        this.getValores = function(){
            return valores_obtenidos;
        }
    }

//funcion.
    sumaArrays(arreglox) {
        let accum = 0;
        for ( var i = 0; i < arreglox.length; i++) {
            accum += arreglox[i];
        }
        return accum;
    }
}

//variables:
nombre_usuario = prompt("Por favor indicame tu nombre");
medicion = prompt("Hola "+ nombre_usuario +". Que quieres medir: 0-Electricidad 1-agua 2-gas 3-agregar otro");

//Bucles:
if(medicion==3){
    let nuevaVariable = prompt("Ingresa la variable que vas a agregar: ");
    let unidad = prompt("ingresa la unidad: ");
    let datos_obtenidos = [];
    
    dato_1 = Number(prompt("Has creado una nueva variable, ahora debes agregar datos: "));
    datos_obtenidos.push(dato_1);
    
    dato_2 = Number(prompt("Segundo dato: "));
    datos_obtenidos.push(dato_2);

    dato_3 = Number(prompt("Ultimo dato: "));
    datos_obtenidos.push(dato_3)

    let medicion1 = new tipo_medicion(nuevaVariable, datos_obtenidos, unidad);

    total_consumos = sumaArrays(datos_obtenidos);
    console.log("El total medido es: "+ total_consumos + " " + medicion1.unidad);
}

else(true)
   console.log("Ha seleccionado: "+ variablesMedibles[medicion] + ", estos son los datos que hemos capturado");
   if(medicion == 0){
       for(i=0; i< datosElectricos.length;i++)
               console.log(datosElectricos[i])
    console.log("El total medido es: "+sumaArrays(datosElectricos)+ " Kwh");
   }
    else if(medicion == 1){
        for(i=0; i< datosAgua.length;i++)
            console.log(datosAgua[i])    
    console.log("El total medido es: "+sumaArrays(datosAgua)+ " m3");
    }
    else if(medicion == 2){
        for(i=0; i< datosGas.length;i++)
            console.log(datosGas[i])
    console.log("El total medido es: "+sumaArrays(datosGas)+ " m3");
    }
        