document.getElementById('btnValidate').addEventListener('click', validate);

function validate() {
  const sticker1 = document.getElementById('sticker1').value || 0;
  const sticker2 = document.getElementById('sticker2').value || 0;
  const sticker3 = document.getElementById('sticker3').value || 0;
  const message = document.getElementById('message');
  const total = Number(sticker1) + Number(sticker2) + Number(sticker3);
  if (total > 10) {
    message.innerHTML = 'Llevas demasiados stickers';
  } else {
    message.innerHTML = 'Llevas ' + total + ' stickers';
  }

}

function valideNumeric(evt) {

  // code is the decimal ASCII representation of the pressed key.
  const code = (evt.which) ? evt.which : evt.keyCode;

  if (code == 8) { // backspace.
    return true;
  } else if (code >= 48 && code <= 57) { // is a number.
    return true;
  } else { // other keys.
    return false;
  }
}