let str = '137'
let massiv_str = Array.from(str);
massiv_str["1", "3", "5"];
let massiv_num = massiv_str.map(i => Number(i));
Array.prototype.sum = function(){
    let s = 0;
    for (i = 0; i < this.length; i++){
        s += this[i]
    }
    return s
}
var massiv_summa = massiv_num.sum();
alert(massiv_summa)

///https://efim360.ru/javascript-kak-slozhit-vse-czifry-v-stroke/