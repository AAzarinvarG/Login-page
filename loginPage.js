const $ = document;

let inputPass = $.querySelector('#input-password');
let iconEye = $.querySelector('#icon-eye');
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