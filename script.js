let dido = document.getElementById('dido');
let random = function (event) {
    return Math.floor(Math.random()*256);
};

let changeBody = function(event) {
    let randomColor = 'rgb(' + random() + ',' + random() + ',' + random() + ')';
    document.body.style.backgroundColor = randomColor;
}
dido.addEventListener('click', changeBody)