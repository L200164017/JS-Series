// const body = document.querySelector('body');
const but = document.getElementById('but');



but.onclick = function () {
    document.body.classList.toggle('biru-muda');
};

const butAcak = document.createElement('button');
const tex = document.createTextNode('warna acak');

butAcak.appendChild(tex);
butAcak.setAttribute('type', 'button');
but.after(butAcak);

butAcak.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const merah = document.querySelector('input[name=merah]');
const biru = document.querySelector('input[name=biru]');
const hijau = document.querySelector('input[name=hijau]');

document.querySelectorAll('input').forEach(item => {
    item.addEventListener('input', function () {
        // console.log(merah.value);
        // console.log(biru.value);
        // console.log(hijau.value);
        document.body.style.backgroundColor = 'rgb(' + merah.value + ',' + biru.value + ',' + hijau.value + ')';
    })

});


// moving mouse
document.body.addEventListener('mousemove', function (event) {
    const red = Math.round((event.clientX / window.innerWidth) * 255);
    const green = Math.round((event.clientY / window.innerWidth) * 255);
    const blue = 100;
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

// body.onclick = function () {
//     alert('working11');
// };



// body.addEventListener('click', function () {
//     body.style.backgroundColor = 'gold';
// });