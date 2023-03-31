const $ = document;

let inputPass = $.querySelector('#input-password');
let iconEye = $.querySelector('#icon-eye');
let divRight = $.querySelector('#div-right');
let body = $.querySelector('body');
let login = $.querySelector('#login');
let boolean = false;

iconEye.addEventListener('click', () => {
    if (inputPass.value.trim() != '') {

        if (boolean == false) {
            inputPass.setAttribute('type', 'text');
            iconEye.setAttribute('src', 'icon/eye-off-outline.svg');
            boolean = true;
        } else {
            inputPass.setAttribute('type', 'password');
            iconEye.setAttribute('src', 'icon/eye-outline.svg');
            boolean = false;
        }

    }
});

setInterval(() => {
    let nowHour = new Date().getHours();

    if (window.innerWidth > 992) {
        body.style.backgroundImage = '';

        if (nowHour >= 6) {
            divRight.style.backgroundImage = 'url(img/morning.jpg)';

        } else if (nowHour >= 9) {
            divRight.style.backgroundImage = 'url(img/sunny.jpg)';

        } else if (nowHour >= 16) {
            divRight.style.backgroundImage = 'url(img/afternoon.jpg)';

        } else if (nowHour >= 20 || nowHour >= 1) {
            divRight.style.backgroundImage = 'url(img/night.jpg)';

        }

    } else {

        if (nowHour >= 6) {
            body.style.backgroundImage = 'url(img/morning.jpg)';

        } else if (nowHour >= 9) {
            body.style.backgroundImage = 'url(img/sunny.jpg)';

        } else if (nowHour >= 16) {
            body.style.backgroundImage = 'url(img/afternoon.jpg)';

        } else if (nowHour >= 20 || nowHour >= 1) {
            body.style.backgroundImage = 'url(img/night.jpg)';

        }

    }

    if (body.style.backgroundImage == 'url("img/night.jpg")') {
        login.style.border = '2px solid white';
    }

}, 1000);

