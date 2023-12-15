document.getElementById('btnValidate').addEventListener('click', validatePassword);

function validatePassword() {
    const num1 = document.getElementById('opt1').value;
    const num2 = document.getElementById('opt2').value;
    const num3 = document.getElementById('opt3').value;
    const password = Number(num1 + num2 + num3);
    let message = '';
    switch (password) {
        case 911:
            message = 'password 1 correcto';
            break;
        case 714:
            message = 'password 2 correcto';
            break;
        default:
            message = 'password incorrecto';
            break;
    }
    document.getElementById('message').innerHTML = message;
}