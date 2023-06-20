/* Se hizo un simulador de convertidor de masas, volumen y longitudes,, en donde el usuario puede escoger entre convertir de libras (lb) a gramos, litros (l) a mililitros (ml), ademas se agrego la funcion de poder registrar el peso mensualmente, calculando el imc*/
/* Se hizo un simulador de convertidor de masas, volumen y longitudes,, en donde el usuario puede escoger entre convertir de libras (lb) a gramos, litros (l) a mililitros (ml) y más*/

// Empezamos declarando funciones para el convertidor
//Kg a Lb
function kgAlb(){
   let kg = parseFloat(prompt("Ingrese la cantidad de kilogramos (kg) que desea convertir a libras (lb): "))
   let conversionAlb = kg * 2.20462
   alert(`${kg}kg a libras son ${conversionAlb.toFixed(2)}lb`) 
}
// Lb a g
function lbAg(){
   let lb = parseFloat(prompt("Ingrese la cantidad de libras (l) que desea convertir a gramos (g): "))
   let conversionAg = lb * 453.592
   alert(`${lb}lb a gramos son ${conversionAg.toFixed(2)}g`) 
}
//Gal a l
function galAl(){
   let gal = parseFloat(prompt("Ingrese la cantidad de galones (gal) que desea convertir a litros (l): "))
   let conversionAl = gal * 3.78541
   alert(`${gal}gal a litros son ${conversionAl.toFixed(2)}L`) 
}
// L a ml
function lAml(){
   let l = parseFloat(prompt("Ingrese la cantidad de litros (l) que desea convertir a mililitro (ml): "))
   let conversionAml = l * 1000
   alert(`${l}L a mililitro son ${conversionAml.toFixed(2)}ml`) 
}
//pies a m 
function ftAm(){
   let ft = parseFloat(prompt("Ingrese la cantidad de pies (ft) que desea convertir a metros (m): "))
   let conversionAm = ft / 3.281
   alert(`${ft}ft a metros son ${conversionAm.toFixed(2)}m`) 
}
// pulgadas a cm
function inchAcm(){
   let inch = parseFloat(prompt("Ingrese la cantidad de pulgadas (in) que desea convertir a centimetros (cm): "))
   let conversionAcm = inch * 2.54
   alert(`${inch}in a metros son ${conversionAcm.toFixed(2)}cm`) 
}

//Menu para el convertidor de masas, volumen y longitudes
function menuConvertidor(){
   do{
      let opcionesCon = parseInt(prompt(`Estamos para ayudarte, ${usuario}. ¿Qué desea convertir?
         0 - Salir del menu.
         1 - Convertir masas.
         2 - Convertir volumen.
         3 - Convertir longitudes.`))
         switch(opcionesCon){
            //menu de opciones para convertir masas
            case 1:
               let opcionesDeMasa = parseInt(prompt(`¿Qué desea convertir?
                  0 - Regresar al menu principal
                  1 - Convertir Kilogramos (kg) a libras (lb)
                  2 - Convertir libras (lb) a gramos (g)`))
                  switch(opcionesDeMasa){
                     case 1:
                        kgAlb()
                     break
                     case 2:
                        lbAg()
                     break     
                     case 0:
                        alert(`Regresando al menú principal...`)
                        opcionesDeMasa = true
                     break   
                     default:
                        alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
                     break
                  }
            continue
            //menu de opciones para convertir volumen
            case 2:
               let opcionesDeVolumen = parseInt(prompt(`¿Qué desea convertir?
                  0 - Regresar al menu principal
                  1 - Convertir galones (gal) a litros (l)
                  2 - Convertir litros (l) a mililitro (ml)`))
                  switch(opcionesDeVolumen){
                     case 1:
                        galAl()
                     break
                     case 2:
                        lAml()
                     break     
                     case 0:
                        alert(`Regresando al menú principal...`)
                        opcionesDeVolumen = true
                     break   
                     default:
                        alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
                     break
                  }
            continue
            //menu de opciones para convertir longitudes
            case 3:
               let opcionesDeLongitudes = parseInt(prompt(`¿Qué desea convertir?
                  0 - Regresar al menu principal
                  1 - Convertir pies (ft) a metros (m)
                  2 - Convertir pulgadas (in) a centimretos (cm)`))
                  switch(opcionesDeLongitudes){
                     case 1:
                        ftAm()
                     break
                     case 2:
                        inchAcm()
                     break     
                     case 0:
                        alert(`Regresando al menú principal...`)
                        opcionesDeLongitudes = true
                     break   
                     default:
                        alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
                     break
                  }  
            continue
            case 0:
               alert(`Gracias por utilizar nuestro convertidor, ${usuario}. ¡Vuelva pronto!`)
               salirMenu = true
            break   
            default:
               alert('Oh! oh!, no tenemos esa opción :(, intenta de nuevo.')
            break
         }
      }while(!salirMenu)      
}

//Creando, arrays, objetos para hacer el menu de registro de peso y altura, con sus fechas
class Registro{
   constructor(id, pesoI, alturaI, fechaI){
      this.id = id,
      this.peso = pesoI,
      this.altura = alturaI,
      this.fecha = fechaI
   }
   mostrarInfoRegistro(){
      alert(`Tu peso es ${this.peso}kg con una altura de ${this.altura}m, ingresado en la fecha ${this.fecha}`)
   }
}
//funciones para poner al menu de registro
const registro = []
function agregarDato(){
   alert("Recuerda poner su peso en kilogramos y su altura en metros. (Al momento de poner la fecha pon el mes antes del día)")
   let peso = parseFloat(prompt("Ingrese un nuevo peso:"))
   let altura = parseFloat(prompt("Ingrese su nueva altura:"))
   let fecha = prompt("Ingrese la fecha de este peso. (Ponga el mes primero, ejemplo: 06/19/2023): ")
   const nuevoDato = new Registro(registro.length+1, peso, altura, fecha)
   registro.push(nuevoDato)
}

function verRegistro(array){
   alert("Tu resgistro se mostrará a continuación:")
   array.forEach( 
      registro => registro.mostrarInfoRegistro()
   );
}

function verRegistroOrdenado(array){
   const menorMayor = [].concat(array)
   menorMayor.sort((a ,b) => b.precio - a.precio)
   verRegistro(menorMayor)
}

function eliminarDato(array){
   verRegistro(array)
   let eliminarDato = parseInt(prompt("Ingrese el número que desea eliminiar: "))
   let arrayId = array.map(registro => registro.id)
   let indice = arrayId.indexOf(eliminarDato)
   alert(indice)
   array.splice(indice, 1)
   verRegistro(array)
}

function imc(){
   let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "))
   let alturaM = parseFloat(prompt("Ingrese su altura en metros: "))
   let calculoImc = pesoKg / (alturaM * alturaM)
   alert(`Su masa corporal es ${calculoImc.toFixed(2)}`)
   if(calculoImc < 18.5){
      alert("Usted está bajo de peso")
      return
   } if(18.5 <= calculoImc <= 24.9 ){
      alert("Usted tiene un peso normal")
      return
   }if(25 <= calculoImc <= 29.9){ 
      alert("Usted tiene sobrepeso")
      return
   }
   if(calculoImc < 30){
      alert("Usted tiene obesidad")
      return
   }else{
      alert("Regrese al menu principal")
   }
}
//menu de registro
function registroDePeso(){
   do{
      let opcionesRe = parseInt(prompt(`Estamos para ayudarte, ${usuario}. ¿Qué desea hacer?
      0 - Salir del menu.
      1 - Agregar dato al registro.
      2 - Ver registro por orden de entrada.
      3 - Ver registro por oden de menor a mayor.
      4 - Eliminar dato del registro.
      5 - Calcular IMC.`))
      switch(opcionesRe){
         case 1: 
            agregarDato()
         break
         case 2: 
            verRegistro(registro)
         break
         case 3:
            verRegistroOrdenado(registro)
         break
         case 4:
            eliminarDato(registro)
         break
         case 5:
            imc()
         continue
         case 0:
            alert(`Gracias por utilizar nuestro convertidor, ${usuario}. ¡Vuelva pronto!`)
            salirMenu = true
         continue   
         default:
            alert('Oh! oh!, no tenemos esa opción :(, intenta de nuevo.')
         break
      }
   }while(!salirMenu)
}
//MENÚ PRINCIPAL juntando del menu de convertidor y de registro
let usuario = prompt("Bienvenido/a a nuestra página, en donde puede acceder a un organizador  de registro de su peso y altura, de igual forma puede tener regritrada la fecha en que tuvo ese peso y altura. También, incluimos un convertidor de masas, volumenes y longitdues. Ingrese su nombre: ")
let salirMenu = false
do{
   let opciones = parseInt(prompt(`Estamos para ayudarte, ${usuario}. ¿Qué desea hacer?
         0 - Salir del menu.
         1 - Llevar un registro del peso
         2 - Convertir masas, longitudes y volumenes`))
         switch(opciones){
            case 1: 
               registroDePeso()
            continue
            case 2:
               menuConvertidor()
            continue
            case 0:
               alert(`Gracias por utilizar nuestro convertidor, ${usuario}. ¡Vuelva pronto!`)
               salirMenu = true
            continue   
            default:
               alert('Oh! oh!, no tenemos esa opción :(, intenta de nuevo.')
            break
         }
}while(!salirMenu)
