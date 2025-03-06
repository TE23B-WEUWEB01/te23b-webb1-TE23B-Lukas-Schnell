const båt = 15;
var kött = 5;

var dunder;


if (calculateValue(båt, dunder, kött) < båt*2) {
    console.log('ruskigt värre');
} else {
    console.log('nej tyvärr');
}

dunder = getRandomInt(5);

console.log(dunder)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function calculateValue(båt, dunder, kött) {
    const value = båt + dunder * kött
    console.log(value);
    return value;
}

