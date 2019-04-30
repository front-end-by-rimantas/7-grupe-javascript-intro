console.log( '2+2*2+5 = ' + (2+2*2+5) );
console.log( 'a = ' + 2+2*2+5 );
console.log( 'a = ' + 2+2*2 );
console.log( 'a = ' + 2+2 );
console.log( 'a = ' + 2 );

console.log('-------------------------------');

var skaicius1 = 333;
console.log( skaicius1 );
var skaicius2 = 777;
console.log( skaicius2 );

var suma = skaicius1 + skaicius2;
console.log('suma: '+suma);

console.log('-------------------------------');

var tekstas1 = 'labas';
console.log(tekstas1);
var tekstas2 = '-';
console.log(tekstas2);
var tekstas3 = 'rytas';
console.log(tekstas3);

var sakinys = tekstas1 + ' ' + tekstas3;
console.log('sakinys: ' + sakinys);
var sakinys2 = tekstas1 + ' ' + tekstas2 + ' ' + tekstas3;
console.log('sakinys2: ' + sakinys2);

console.log('-------------------------------');

var skaiciu_sarasas_1 = [1, 5, 7, 99, 16];
console.log(skaiciu_sarasas_1);
var toggle_sum = skaiciu_sarasas_1[0] - skaiciu_sarasas_1[1] + skaiciu_sarasas_1[2] - skaiciu_sarasas_1[3] + skaiciu_sarasas_1[4];
console.log( toggle_sum );

console.log('-------------------------------');

var tekstu_sarasas_1 = ['Aciu', 'Ačiu', 'Aciū', 'aciu', 'Ačiū'];
console.log(tekstu_sarasas_1);
var abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);
console.log('norimas rezultatas: e, d, c, b, a');
var abc_rezultatas = abc[4] + ', ' + abc[3] + ', ' + abc[2] + ', ' + abc[1] + ', ' + abc[0];
console.log(abc_rezultatas);

console.log('-------------------------------');

var ivarus_dalykai = [1, 'antras', 3, true, false, 'x'];
console.log(ivarus_dalykai);

console.log('-------------------------------');
console.log('Logical statements - IF');
console.log('-------------------------------');

// true - pomidoras
// false - bandyk dar karta
// [ >, <, >=, <=, ==, ===, !=, !== ]

if ( 3 > 7 ) {
    console.log('pomidoras');
} else {
    console.log('bandyk dar karta');
}

var test1 = -1;
var test2 = 1;

console.log(test1 + ' ?? ' + test2);

if ( test1 === test2 ) {
    console.log('tiesa');
} else {
    console.log('melas');
}

console.log('-------------------------------');

console.log( tekstas1 + ': ' + tekstas1.length );
console.log( tekstas2 + ': ' + tekstas2.length );
console.log( tekstas3 + ': ' + tekstas3.length );

if ( tekstas1.length > tekstas3.length ) {
    console.log('Pirmas didesnis');
}

if ( tekstas1.length < tekstas3.length ) {
    console.log('Antras didesnis');
}

if ( tekstas1.length === tekstas3.length ) {
    console.log('Abu lygus');
}