// Ejercicio 1 obtiene las iniciales
// Accediendo a elementos del DOM
let name = document.getElementById('name');
const btnInitials = document.getElementById('btn-initials');
const txtInitials = document.getElementById('txt-initials');

// Obteniendo iniciales de los nombres
btnInitials.addEventListener('click', () => {
  name = name.value.toUpperCase();
  let firstInitial = name.slice(0,1);
  let position = name.indexOf(' ') + 1;
  let secondInitial = name.slice(position, position + 1);
  txtInitials.innerHTML = `<p>Tus iniciales son: ${firstInitial+secondInitial}</p>`
});

// Ejercicio 2 convierte años de edad en segundos.
// Accediendo a elementos del DOM
const age = document.getElementById('age');
const btnAgeConvertor = document.getElementById('btn-age-convertor');
const ageInSeconds = document.getElementById('age-in-seconds');

// Evento que multiplica y muestra la edad.
btnAgeConvertor.addEventListener('click', () => {
  if (age.value) {
    const convertedAge = age.value * 365 * 24 * 60 * 60
    ageInSeconds.innerHTML = `<p>Tienes ${age.value} años cumplidos, convertido a segundos tienes ${convertedAge} segundos de edad.</p>`
  } else {
    ageInSeconds.innerHTML = `<p>¡Ingresa tu edad antes de hacer click en CONVERTIR 🤨!</p>`
  }
});

// Ejercicio 3 convierte temperatura
// Accediendo a elementos del DOM
const temperature = document.getElementById('temperature');
const btnCelsius = document.getElementById('btn-convertor-celsius');
const btnFarenheit = document.getElementById('btn-convertor-farenheit');
const convertedText = document.getElementById('converted-text');

// Evento aplica fórmula para convertir grados Celsius a Farenheit
btnCelsius.addEventListener('click', () => {
  convertToCelsius = Math.round((temperature.value - 32) / 1.8);
  temperature.value ? convertedText.innerHTML = `La temperatura en Celsius es ${convertToCelsius}` : convertedText.innerHTML = `<p>¡Ingresa los grados de temperatura antes de hacer click en CONVERTIR A CELSIUS 🤨!</p>`;
});

// Evento aplica fórmula para convertir grados Farenheit a Celsius
btnFarenheit.addEventListener('click', () => {
  convertToFarenheit = Math.round((temperature.value * 1.8) + 32);
  temperature.value ? convertedText.innerHTML = `La temperatura en Farenheit es ${convertToFarenheit}` : convertedText.innerHTML = `<p>¡Ingresa los grados de temperatura antes de hacer click en CONVERTIR A FARENHEIT 🤨!</p>`;
});

// Ejercicio 4 Elevador
//  Accediendo a elementos del DOM
const currentFloor = document.getElementById('current-floor');
const numberFloor = document.getElementById('floor');
const numberPeople = document.getElementById('people');
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const total = document.getElementById('txt-total');

// Evento de elevador
btnUp.addEventListener('click', () =>{
  let floors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let value of floors) {
    value += 1;
    console.log(value);
  }
});
