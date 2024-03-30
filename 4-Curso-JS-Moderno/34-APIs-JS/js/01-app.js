// APi's Notificacion //

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(res => {
            console.log('el resultado es', res);
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Codigo de Dani'
        });
        console.log('Se notifico correcto');
        notificacion.onclick = function(){
            window.open('http://www.codigoconjuan.com')
        }
    }
});