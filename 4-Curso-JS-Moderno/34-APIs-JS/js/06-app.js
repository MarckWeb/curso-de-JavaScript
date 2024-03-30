const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

 microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {

    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // iniciamos recognition
    recognition.start();


    // Cuando iniciamos a hablar se ejecuta
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = "Escuchando...";
    };
    
    // Cuando terminemos de hablar se ejecuta
    recognition.onspeechend = function() {
        salida.textContent = "Se detuvo de ejecutar";
        recognition.stop();
    };
  
    // Resultados los traslada a texto en javascript
    recognition.onresult = function(e) {

        console.log(e.results[0][0]);

        var transcript = e.results[0][0].transcript;
        var confidence = e.results[0][0].confidence;


        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML =  `Seguridad:  ${ parseInt( confidence*100) } %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
  

}