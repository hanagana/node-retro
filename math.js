var PI = Math.PI;

function dientich(r) {
    return PI * r * r;
}

function chuvi(r) {
    return PI * 2 * r;
}

module.exports = {
    dientich: dientich,
    chuvi: chuvi
}