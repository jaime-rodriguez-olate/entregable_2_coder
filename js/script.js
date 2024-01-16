console.log("Bienvenidos al sistema de monitoreo en línea");

//funcion.
function sumaArrays(arreglox) {
    let accum = 0;
    for ( var i = 0; i < arreglox.length; i++) {
        accum += arreglox[i];
    }
    return accum;
}
//variables:
nombre_usuario = prompt("Por favor indicame tu nombre");

medicion = prompt("Hola "+ nombre_usuario+". Que quieres medir: 0-Electricidad 1-agua 2-gas 3-agregar otro");
//arrays
const variablesMedibles = ["electriciad","agua","gas","agregar otro",];
const datosElectricos = [220,380,440];
const datosAgua = [1500,1700,2000];
const datosGas = [100,200,300];
//Bucles:
if(medicion==3){
    nuevaVariable = prompt("Ingresa la variable que vas a agregar: ");
    variablesMedibles.push(nuevaVariable);  
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
    else if(medicion == 3){
        nueva_variable = []
        nueva_variable.push = prompt("Has creado una nueva variable, ahora debes agregar datos: ");
        for(i=0; i< nueva_variable.length;i++)
            console.log(nueva_variable[i])
    }

    //revision de commit