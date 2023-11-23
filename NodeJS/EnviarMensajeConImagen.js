const axios = require('axios');

// La URL a la que desea enviar la solicitud POST, ponerla aquí
// 593984958499 representa el NÚMERO DESTINO
// Phone03 es el identificador del cliente, para este caso es la DEMO
const url = 'http://mywhatsapp.jca.ec:5001/chat/sendmedia/593984958499?number=Phone03';

// Los datos que desea enviar a través de POST, ver los parámetros que requiere según sea el caso 
// Los datos son enviados en una estructura json
const data = {
    caption: 'Hola Mundo, estamos usando el Servicio SMSWhatsApp, gracias por su preferencia',
    typing: '3',
    nowait: 'true',
    type: 'image/png',
    title: 'VisualFoxPro.png',
    media: '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'
};

// Realizar la solicitud POST usando Axios
axios.post(url, data)
    .then(response => {
        // Se muestra el resultado obtenido, erróneo / correcto
        console.log(response.data);
    })
    .catch(error => {
        // En caso de error, mostrar el mensaje de error
        console.error(error.message);
    });
