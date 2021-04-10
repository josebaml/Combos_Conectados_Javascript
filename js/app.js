// Variables

let pais = document.querySelector("#pais");
let ciudad = document.querySelector("#ciudad");
let salida = document.querySelector("#resultado");

/*
Veo dos opciones a la hora de crear los arrays secundarios, es decir, los arrays de las ciudades de los países.
La primera es la que se puede ver en el ejercicio, trabajar con un array por cada conjunto de ciudades de un país.
La segunda opción es agrupar todos los arrays secundarios en uno sólo de forma que no haría falta la función eval 
(he leído que cuanto menos se utilice mejor porque puede tener problemas de seguridad), 
para ver que array secundario necesitamos mostrar. Sólo necesitaríamos el índice de la posición del array que coincide
con el value del primer array de países.

const ciudades = [ciudadesPais_0,ciudadesPais_1,ciudadesPais_2,ciudadesPais_3];

for(let i in ciudades[paises]){
    ciudad[i] = new Option(ciudades[paises][i],i);
}
*/

const paises = ['Selecciona un país','España', 'Francia', 'Italia'];

const ciudadesPais_0 = ['Selecciona una ciudad'];
const ciudadesPais_1 = ['Selecciona una ciudad','Bilbao', 'Granada', 'Madrid'];
const ciudadesPais_2 = ['Selecciona una ciudad','París', 'Burdeos', 'Lyon'];
const ciudadesPais_3 = ['Selecciona una ciudad','Roma', 'Palermo', 'Milán'];

// Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', () => {

        // limpiar los resultados anteriores
        limpiarHTML(pais);

        cargarOptions(paises, pais);

    });
    
    pais.addEventListener('change', () => {

         // limpiar los resultados anteriores
         limpiarHTML(ciudad);
         limpiarHTML(salida);

         ciudad.classList.add('border');

        let keyPais = pais.value;

        let paisSeleccionado = eval(`ciudadesPais_${keyPais}`);

       cargarOptions(paisSeleccionado, ciudad);
    });

    ciudad.addEventListener('focus', () => {
        ciudad.classList.remove('border');
    });

    ciudad.addEventListener('change', () => {
        resultado();
    });

}

// Funciones
function cargarOptions(array, select){

    for(let i in array){
        select[i] = new Option(array[i],i);
    }

    /*Otra forma de cargar el select
    array.forEach(function(element,key) {
        select[key] = new Option(element,key);
    });
    */

}

function limpiarHTML(select) {

    // limpiar los resultados anteriores
    while(select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

function resultado(){
    const mensaje = document.createElement('p');
    mensaje.textContent = `Has seleccionado el país ${pais.options[pais.value].text} y la ciudad ${ciudad.options[ciudad.value].text}`;
    salida.appendChild(mensaje);

    console.log(pais);
    console.log(ciudad);
}

