console.log("Script app.js cargado"); //Verificación de que el archivo se está cargando
const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

function fetchQuote() {
    console.log("Intentando obtener una cita..."); //Verificación de que se llama a la función
    
    fetch(API_URL)
        .then(response => {
            console.log("Respuesta recibida:", response);
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos obtenidos:", data);
            displayQuote(data); // Asegúrate de que 'data' tenga la estructura correcta
        })
        .catch(error => console.error('Error al obtener la cita:', error));
}

function displayQuote(quoteData) {
    const container = document.getElementById('quote-container');
    if (container) { // Verifica que el contenedor existe
        container.innerHTML = ` 
            <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>`;
        console.log("Cita mostrada correctamente");
    } else {
        console.error("Contenedor no encontrado");
    }
}

fetchQuote();
