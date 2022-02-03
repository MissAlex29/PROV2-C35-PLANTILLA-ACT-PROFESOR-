//Clase o molde para el formulario de registro 
class Form {
  constructor() {
    //Mostrara un cuadro vacio con el texto ingresa tu nombre
    //.input recopila la entrada del usuario
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    //Crea un botón con el texto "Jugar"
    this.playButton = createButton("Jugar");
    //Coloca una imagen de encabezado con título del juego
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    //Tamaño del encabezado, puede ser h1,h2,h3
    this.greeting = createElement("h2");
  }
  
  //Función para asignar posiciones a los elementos
  
  
  //Función para asignar estilos de visualización a los elementos
  
  
  //se utiliza con cada elemento para ocultar/eliminar el elemento del canvas
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  
  //Mostrar
  display() {
   
  }

  
}
