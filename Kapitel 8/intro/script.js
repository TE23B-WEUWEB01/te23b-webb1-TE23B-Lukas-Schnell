function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function calculateValue(båt, dunder, kött) {
    const value = båt + dunder * kött
    console.log(value);
    return value;
}
var ålder = 69;
const båt = 15;
var kött = 5;
var dunder = getRandomInt(5);

if (calculateValue(båt, dunder, kött) < båt * 2) {
    alert('ruskigt värre');
} else {
    alert('nej tyvärr');
}




