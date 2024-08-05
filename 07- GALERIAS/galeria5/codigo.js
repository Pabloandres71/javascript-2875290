var img = document.getElementsByTagName('img')[0];
var btn = document.getElementsByClassName('btn');
var txt1 = document.getElementsByTagName('h1')[0];
var txt2 = document.getElementsByTagName('p')[0];

function cambio1 (){
    img.setAttribute('src', 'img1.jpg');
    txt1.innerHTML = 'MARGARITAS';
    txt2.innerHTML = 'La margarita es una planta con flor que puede llegar a medir entre 0,50 a 1,50 metros de altura. Es una flor que es fácil de identificar por sus alargados pétalos de colores. Normalmente, el centro es siempre amarillo, y los pétalos de la periferia blancos. Aunque es cierto, que también hay más variedades.';
}

function cambio2 (){
    img.setAttribute('src', 'img2.jpg');
    txt1.innerHTML = 'VIOLETAS';
    txt2.innerHTML = 'Es una pequeña planta herbácea que alcanza los 10-15 cm de altura, sin tallo, con una raíz perenne y carnosa. Se propaga por medio de estolones. Las hojas son radicales, poseen un largo peciolo y un limbo acorazonado o reniforme. Las flores son grandes , de 2 cm de largo y llamativas y presentan un largo pedúnculo cuadrangular. Sus flores son olorosas con una aroma dulce, solitarias, de color violeta oscuro, irregulares y con cinco pétalos, dos de los cuales son erectos. El fruto es una cápsula con tres valvas que contienen numerosas semillas.';
}

function cambio3 (){
    img.setAttribute('src', 'img3.jpg');
    txt1.innerHTML = 'CRISANTEMO';
    txt2.innerHTML = 'Aunque su mayor atractivo se encuentra en su abundante floracion, el crisantemo es una excelente alternativa para incluir en el jardín, ya que sus capullos comienzan a surgir desde el final del verano hasta que termina el otoño, lo que permite disfrutar de sus flores durante toda la primavera y el verano. A continuación, las principales características de esta planta y cómo cultivarla.';
}

btn[0].addEventListener('click',cambio1);
btn[1].addEventListener('click',cambio2);
btn[2].addEventListener('click',cambio3);