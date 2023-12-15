document.getElementById('img').addEventListener('click', changeImageBorder);
let withBorder = false;

function changeImageBorder() {
    const valImg = document.getElementById('img');
    if (withBorder == true) {
        valImg.style.border = 'none';
        withBorder = false;
    } else {
        valImg.style.border = '2px solid red';
        withBorder = true;
    }
}