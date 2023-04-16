function solicitarNombre (){
    let nombreIngresado = prompt ("Ingresar nombre")
    alert ("Bienvenido " + nombreIngresado)
}
solicitarNombre ()

const inputBase = document.querySelector('#baseImponible');
let inputIVA = document.querySelector('#IVA');
let inputTotal = document.querySelector('#total');
const tipoIVA = 0.21;
function Calcular() {
    const base = Number(inputBase.value);
    const IVA = base * tipoIVA;
    inputIVA.value = IVA; 
    const total = base + IVA;
    inputTotal.value = total;
}
var numero1 = parseInt(prompt ("Ingrese un numero para comparar", 0));
var numero2 = parseInt(prompt("Ingrese el otro numero", 0));
if (numero1 >=200 && numero2 <= 1500){
    alert("Los numeros ingresados estan entre 200 y 1500 y son: "+numero1+" y "+numero2);
} else {
    alert("Los numeros ingresados NO estan entre 200 y 1500 y son: "+numero1+" y "+numero2);
}

var numero1 = parseInt(prompt("Ingrese un numero para repetir el mensaje",0));
for (let i=3; i <=numero1; i++){
    alert("Hola");
}

const listaProductos = ["lenteja", "garbanzo", "poroto"]
console.log(listaProductos.length);

listaProductos.push('papa')
console.log(listaProductos.length)
console.log(listaProductos)

class Almacen{
    constructor(legumbre, kilos, color){
        this.legumbre = legumbre;
        this.kilos = kilos;
        this.color = color;
    }
    leer(){
        console.log ("Este producto es " + (this.legumbre) + " y pesa kg " + (this.kilos));
    }
}

let almacen1 = new Almacen("lenteja", 2, "verde");
almacen1.leer();
let almacen2 = new Almacen("garbanzo", 5, "amarillo");
almacen2.leer();

