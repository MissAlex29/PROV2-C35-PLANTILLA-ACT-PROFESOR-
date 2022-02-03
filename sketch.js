//Variables globales 
var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

//Función para precargar recursos multimedia 
function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

//Configuración principal 
function setup() {
  //Lienzo - espacio de trabajo
  canvas = createCanvas(windowWidth, windowHeight);
  //Almacenamos la base de datos en una variable 
  database = firebase.database();

  //Guardamos la clase GAME en una variable 
  game = new Game();
  game.start();

}

function draw() {
  //Imágen de fondo
  background(backgroundImage);
}

//Ajusta altura y ancho de la ventana automáticamente 
function windowResized() {
  //Crea un nuevo canvas con los ajustes 
  resizeCanvas(windowWidth, windowHeight);
}
