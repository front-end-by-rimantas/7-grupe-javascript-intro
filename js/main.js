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

var suma_12 = skaicius1 + skaicius2;
console.log('suma: '+suma_12);

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

console.log('-------------------------------');
console.log('Ciklai - FOR');
console.log('-------------------------------');

var pirma_suma = 0;
var nuo = 3;
var iki = 7;

console.log( ((iki - nuo) * (iki + 1 - nuo)) / 2 + nuo * (iki - nuo + 1) );

for ( var i=nuo; i<=iki; i++ ) {
    pirma_suma = pirma_suma + i;
}
console.log(pirma_suma);

console.log('-------------------------------');

var atbulas_1 = '';
var txt = 'pomidoras';
var pozicija = 0;

for ( var i=0; i<txt.length; i++ ) {
    pozicija = txt.length - 1 - i;
    atbulas_1 = atbulas_1 + txt[ pozicija ];
}

console.log( atbulas_1 );

console.log('-------------------------------');

var atbulas_2 = '';
var txt_2 = 'abrikosas';
var pozicija_2 = 0;

for ( var i=txt.length; i>0; i-- ) {
    atbulas_2 = atbulas_2 + txt_2[ i - 1 ];
}

console.log( atbulas_2 );

console.log('-------------------------------');
console.log('Skaiciu kiekis nurodytame intervale dalinant is nurodyto skaitmens');
console.log('-------------------------------');

var nuo = 0;
var iki = 9;
var daliname = 3;
var be_liekanos = 0; // 0, 3, 6, 9 => 4 vnt
var rez = '';
var rez_tinkamas = true;

for ( var i=nuo; i<=iki; i++ ) {
    if ( i % daliname === 0 ) {
        be_liekanos++;
    }
}

console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+daliname+' yra '+be_liekanos+' vienetai.' );


console.log('-------------------------------');
console.log('FUNCTION');
console.log('-------------------------------');

function asd(){
    return 'asd';
}

function suma( a, b ){
    var suma = a+b;
    return suma;
}

console.log( asd() );
console.log( '2 + 5 = ' + suma(2, 5) );
console.log( '4 + 5 = ' + suma(4, 5) );
console.log( suma(222, 5) );
console.log( suma(2, 555) );


function beLiekanos( nuo, iki, daliklis ) {
    var be_liekanos = 0;

    for ( var i=nuo; i<=iki; i++ ) {
        if ( i % daliklis === 0 ) {
            be_liekanos++;
        }
    }

    return 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+daliname+' yra '+be_liekanos+' vienetai.';
}

console.log( beLiekanos(0, 11, 3) );

beLiekanos(0, 11, 3);
beLiekanos(0, 11, 5);
beLiekanos(0, 11, 7);
beLiekanos(8, 31, 3);
beLiekanos(8, 31, 5);
beLiekanos(8, 31, 7);
beLiekanos(-18, 18, 3);
beLiekanos(-18, 18, 5);
beLiekanos(-18, 18, 7);



console.log('-------------------------------');

function daugyba( a, b ){

    // jeigu a nera skaicius - return
    if ( typeof(a) !== 'number' || isNaN(a) || !isFinite(a) ) {
        return 'Pirmas parametras nera skaicius';
    }
    // jeigu b nera skaicius - return
    if ( typeof(b) !== 'number' || isNaN(b) || !isFinite(b) ) {
        return 'Antras parametras nera skaicius';
    }

    var sandauga = a * b;
    return sandauga;
}

console.log( daugyba(2, 2) );
console.log( daugyba(9, 9) );
console.log( daugyba(-9, 9) );
console.log( daugyba(9, -9) );
console.log( daugyba(-9, -9) );
console.log( daugyba(0, 2) );
console.log( daugyba(5, 0) );
console.log( daugyba(5, 2.5) );
console.log( daugyba(5, '2.5') );
console.log( daugyba('2.5', 5) );
console.log( daugyba('2.5', '5') );
console.log( daugyba('asd', '5') );
console.log( daugyba('asd2.5', '5') );
console.log( daugyba('2.5asd', '5') );
console.log( daugyba(NaN, 5) );
console.log( daugyba(5, NaN) );
console.log( daugyba(NaN, NaN) );
console.log( daugyba(Infinity, 5) );
console.log( daugyba(5, Infinity) );
console.log( daugyba(Infinity, Infinity) );
