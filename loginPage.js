const $ = document;

let inputPass = $.querySelector('#input-password');
let iconEye = $.querySelector('#icon-eye');
let divRight = $.querySelector('#div-right');
let body = $.querySelector('body');
let login = $.querySelector('#login');
let loginBtn2 = $.querySelector('.login-btn2');
let registerBtn = $.querySelector('#register-btn');
let headerElement = $.querySelector('#header-element');
let headerElement2 = $.querySelector('#header-element2');
let boolean = false;

registerBtn.addEventListener('click', () => {

    headerElement.style.marginLeft = '30rem';
    iconEye.style.display = 'none';
    login.style.height = '63vh';

    setTimeout(() => {
        headerElement.style.display = 'none';
        headerElement2.style.display = 'flex';
        headerElement2.style.marginLeft = '0';
    }, 700);

});


loginBtn2.addEventListener('click', () => {

    headerElement2.style.marginLeft = '40rem';
    login.style.height = '45vh';
    
    setTimeout(() => {
        headerElement2.style.display = 'none';
        headerElement.style.display = 'flex';
        headerElement.style.marginLeft = '0';
        iconEye.style.display = 'block';
    }, 700);

});





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

        if (nowHour >= 6 && nowHour < 8) {
            divRight.style.backgroundImage = 'url(img/morning.jpg)';

        } else if (nowHour >= 8 && nowHour < 16) {
            divRight.style.backgroundImage = 'url(img/sunny.jpg)';

        } else if (nowHour >= 16 && nowHour < 20) {
            divRight.style.backgroundImage = 'url(img/afternoon.jpg)';

        } else {
            divRight.style.backgroundImage = 'url(img/night.jpg)';
        }

        login.style.border = '0';
        login.style.boxShadow = `0 1px 5px #ccc, 0 0 5px #ccc`;

    } else {

        if (nowHour >= 6 && nowHour < 8) {
            body.style.backgroundImage = 'url(img/morning.jpg)';

        } else if (nowHour >= 8 && nowHour < 16) {
            body.style.backgroundImage = 'url(img/sunny.jpg)';

        } else if (nowHour >= 16 && nowHour < 20) {
            body.style.backgroundImage = 'url(img/afternoon.jpg)';

        } else {
            body.style.backgroundImage = 'url(img/night.jpg)';
        }

        if (body.style.backgroundImage == 'url("img/night.jpg")') {
            login.style.border = '3px solid white';
            login.style.boxShadow = '0 1px 25px #fff';
        }

    }

}, 100);