
// A PARTIR DE AQUI ES CON RGB Y OFICIAL

//DECLARACION DE CONSTANTES PARA EL BOTON Y EL TEXTO CON INFORMACION
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// DECLARACION DE CONSTANTES PARA COLORES OSCUROS SUS DOCUMENTS
const grad1 = document.querySelector('.grad1');
const grad2 = document.querySelector('.grad2');
const grad3 = document.querySelector('.grad3');
const grad4 = document.querySelector('.grad4');

// DECLARACION DE CONSTANTES PARA COLORES CLAROS SUS DOCUMENTS
const grad5 = document.querySelector('.grad5');
const grad6 = document.querySelector('.grad6');
const grad7 = document.querySelector('.grad7');
const grad8 = document.querySelector('.grad8');

// FUNCION EJECUTADA AL HACER CLICK
btn.addEventListener("click", function() {

  // numero aleatorios entre 0-255 ( por ser RGB)
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  // COLOR DE FONDO
  let bgColor = "RGB(" + x + "," + y + "," + z + ")"

  //COLORES OSCUROS
  let bgColor1 = "RGB(" + Math.floor(x / 1.4) + "," + Math.floor(y / 1.4) + "," + Math.floor(z / 1.4) + ")"
  let bgColor2 = "RGB(" + Math.floor(x / 1.6) + "," + Math.floor(y / 1.6) + "," + Math.floor(z / 1.6) + ")"
  let bgColor3 = "RGB(" + Math.floor(x / 1.8) + "," + Math.floor(y / 1.8) + "," + Math.floor(z / 1.8) + ")"
  let bgColor4 = "RGB(" + Math.floor(x / 2) + "," + Math.floor(y / 2) + "," + Math.floor(z / 2) + ")"

  //COLORES CLAROS
  let bgColor5 = "RGB(" + Math.floor(x * 1.2) + "," + Math.floor(y * 1.2) + "," + Math.floor(z * 1.2) + ")"
  let bgColor6 = "RGB(" + Math.floor(x * 1.4) + "," + Math.floor(y * 1.4) + "," + Math.floor(z * 1.4) + ")"
  let bgColor7 = "RGB(" + Math.floor(x * 1.6) + "," + Math.floor(y * 1.6) + "," + Math.floor(z * 1.6) + ")"
  let bgColor8 = "RGB(" + Math.floor(x * 1.8) + "," + Math.floor(y * 1.8) + "," + Math.floor(z * 1.8) + ")"

  // CAMBIO DEL COLOR DEL FONDO
  document.body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
  color.style.color = bgColor;

  //colores MAS oscuros
  grad1.textContent = bgColor1;
  grad1.style.color = bgColor;
  grad1.style.backgroundColor = bgColor1;

  grad2.textContent = bgColor2;
  grad2.style.color = bgColor;
  grad2.style.backgroundColor = bgColor2;

  grad3.textContent = bgColor3;
  grad3.style.color = bgColor;
  grad3.style.backgroundColor = bgColor3;

  grad4.textContent = bgColor4;
  grad4.style.color = bgColor;
  grad4.style.backgroundColor = bgColor4;

  //colores MAS claros

  grad5.textContent = bgColor5;
  grad5.style.color = bgColor;
  grad5.style.backgroundColor = bgColor5;

  grad6.textContent = bgColor6;
  grad6.style.color = bgColor;
  grad6.style.backgroundColor = bgColor6;

  grad7.textContent = bgColor7;
  grad7.style.color = bgColor;
  grad7.style.backgroundColor = bgColor7;

  grad8.textContent = bgColor8;
  grad8.style.color = bgColor;
  grad8.style.backgroundColor = bgColor8;

  //CIERRE DE LA FUNCION UNA VEZ CLICK
});

//INICIO DEL PARTY MODE ON

btnParty.addEventListener("click", function() {

  audio.play()

  let contadorPart = 0;
  let repeatTime = 0;

  //party function
  const timer = setInterval(function() {

    if (contadorPart < 75) {

      // numero aleatorios entre 0-255 ( por ser RGB)
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);

      // COLOR DE FONDO
      let bgColor = "RGB(" + x + "," + y + "," + z + ")"
      console.log(bgColor);

      //COLORES OSCUROS
      let bgColor1 = "RGB(" + Math.floor(x / 1.4) + "," + Math.floor(y / 1.4) + "," + Math.floor(z / 1.4) + ")"
      let bgColor2 = "RGB(" + Math.floor(x / 1.6) + "," + Math.floor(y / 1.6) + "," + Math.floor(z / 1.6) + ")"
      let bgColor3 = "RGB(" + Math.floor(x / 1.8) + "," + Math.floor(y / 1.8) + "," + Math.floor(z / 1.8) + ")"
      let bgColor4 = "RGB(" + Math.floor(x / 2) + "," + Math.floor(y / 2) + "," + Math.floor(z / 2) + ")"

      //COLORES CLAROS
      let bgColor5 = "RGB(" + Math.floor(x * 1.2) + "," + Math.floor(y * 1.2) + "," + Math.floor(z * 1.2) + ")"
      let bgColor6 = "RGB(" + Math.floor(x * 1.4) + "," + Math.floor(y * 1.4) + "," + Math.floor(z * 1.4) + ")"
      let bgColor7 = "RGB(" + Math.floor(x * 1.6) + "," + Math.floor(y * 1.6) + "," + Math.floor(z * 1.6) + ")"
      let bgColor8 = "RGB(" + Math.floor(x * 1.8) + "," + Math.floor(y * 1.8) + "," + Math.floor(z * 1.8) + ")"

      // CAMBIO DEL COLOR DEL FONDO
      document.body.style.backgroundColor = bgColor;
      color.textContent = bgColor;
      color.style.color = bgColor;

      //colores MAS oscuros
      grad1.textContent = bgColor;
      grad1.style.color = bgColor;
      grad1.style.backgroundColor = bgColor;

      grad2.textContent = bgColor;
      grad2.style.color = bgColor;
      grad2.style.backgroundColor = bgColor;

      grad3.textContent = bgColor;
      grad3.style.color = bgColor;
      grad3.style.backgroundColor = bgColor;

      grad4.textContent = bgColor;
      grad4.style.color = bgColor;
      grad4.style.backgroundColor = bgColor;

      //colores MAS claros

      grad5.textContent = bgColor;
      grad5.style.color = bgColor;
      grad5.style.backgroundColor = bgColor;

      grad6.textContent = bgColor;
      grad6.style.color = bgColor;
      grad6.style.backgroundColor = bgColor;

      grad7.textContent = bgColor;
      grad7.style.color = bgColor;
      grad7.style.backgroundColor = bgColor;

      grad8.textContent = bgColor;
      grad8.style.color = bgColor;
      grad8.style.backgroundColor = bgColor;

      contadorPart++;

    }

  }, 200)

});




//--------------------------------------------------------------

// A PARTIR DE AQUI ES EL SIMPLE
//
// const colors = ["green", "red","RGBA(133,122,200)","#F15025"];
// const btn = document.getElementById('btn');
// //REVISAR que hace el query querySelector
// const color= document.querySelector('.color');
// //REVISAR EL addEventListener
// btn.addEventListener("click",function() {
// // Aqui obtenemos un numero Random 0-3
// // randomnumber usa la funcion randomnumber() para obtener el numero.
//   const randomnumber = getRandomNumber();
//   // usamos Document.body.style.backgroundColor para seleccionar dicho valor y asignarle el valor de color[randomb]
//   document.body.style.backgroundColor = colors[randomnumber];
//   color.textContent = colors[randomnumber];
// })
//
// //Funcion para obtencion de numero
// function getRandomNumber(){
// // multiplicamos por el length de nuestros colors para obtener los 4 colores del array
//   return Math.floor(Math.random() * colors.length);
// }

//--------------------------------------------------------------

// A PARTIR DE AQUI ES EL HEX
//
// const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// // 0 valor de 0-9 y letras de A-F (10-15)
// const btn   = document.getElementById('btn');
// const color = document.querySelector('.color');
//
// //pruebas de grad1
// const grad1 = document.querySelector('.grad1');
//
// btn.addEventListener("click", function() {
//   let hexColor = "#";
//   let gradColor =  "#";
//   for (let i=0;i<6;i++){
//     hexColor +=  hex[getRandomNumber()];
//     gradColor +=  hex[getRandomNumber()];
//   }
//
// color.textContent= hexColor;
// document.body.style.backgroundColor = hexColor;
//
// //Cambio del primer Grad1
// grad1.textContent = gradColor;
// grad1.style.color = gradColor;
//
// });
//
// function getRandomNumber(){
//   return Math.floor(Math.random()* hex.length);
// }

//--------------------------------------------------------------

// numero aleatorios entre 0-255 ( por ser RGB)
// var x = Math.floor(Math.random() * 256);
// var y = Math.floor(Math.random() * 256);
// var z = Math.floor(Math.random() * 256);
//
// // COLOR DE FONDO
// let bgColor = "RGB(" + x + "," + y + "," + z + ")"
// console.log(bgColor);
//
// //COLORES OSCUROS
// let bgColor1 = "RGB(" + Math.floor(x / 1.4) + "," + Math.floor(y / 1.4) + "," + Math.floor(z / 1.4) + ")"
// let bgColor2 = "RGB(" + Math.floor(x / 1.6) + "," + Math.floor(y / 1.6) + "," + Math.floor(z / 1.6) + ")"
// let bgColor3 = "RGB(" + Math.floor(x / 1.8) + "," + Math.floor(y / 1.8) + "," + Math.floor(z / 1.8) + ")"
// let bgColor4 = "RGB(" + Math.floor(x / 2) + "," + Math.floor(y / 2) + "," + Math.floor(z / 2) + ")"
//
// //COLORES CLAROS
// let bgColor5 = "RGB(" + Math.floor(x * 1.2) + "," + Math.floor(y * 1.2) + "," + Math.floor(z * 1.2) + ")"
// let bgColor6 = "RGB(" + Math.floor(x * 1.4) + "," + Math.floor(y * 1.4) + "," + Math.floor(z * 1.4) + ")"
// let bgColor7 = "RGB(" + Math.floor(x * 1.6) + "," + Math.floor(y * 1.6) + "," + Math.floor(z * 1.6) + ")"
// let bgColor8 = "RGB(" + Math.floor(x * 1.8) + "," + Math.floor(y * 1.8) + "," + Math.floor(z * 1.8) + ")"
//
// // CAMBIO DEL COLOR DEL FONDO
// document.body.style.backgroundColor = bgColor;
// color.textContent = bgColor;
// color.style.color = bgColor;
//
// //colores MAS oscuros
// grad1.textContent = bgColor1;
// grad1.style.color = bgColor;
// grad1.style.backgroundColor = bgColor1;
//
// grad2.textContent = bgColor2;
// grad2.style.color = bgColor;
// grad2.style.backgroundColor = bgColor2;
//
// grad3.textContent = bgColor3;
// grad3.style.color = bgColor;
// grad3.style.backgroundColor = bgColor3;
//
// grad4.textContent = bgColor4;
// grad4.style.color = bgColor;
// grad4.style.backgroundColor = bgColor4;
//
// //colores MAS claros
//
// grad5.textContent = bgColor5;
// grad5.style.color = bgColor;
// grad5.style.backgroundColor = bgColor5;
//
// grad6.textContent = bgColor6;
// grad6.style.color = bgColor;
// grad6.style.backgroundColor = bgColor6;
//
// grad7.textContent = bgColor7;
// grad7.style.color = bgColor;
// grad7.style.backgroundColor = bgColor7;
//
// grad8.textContent = bgColor8;
// grad8.style.color = bgColor;
// grad8.style.backgroundColor = bgColor8;

//--------------------------------------------------------------
