var divContainer = document.createElement('div');
divContainer.classList.add('flex-container');
divContainer.setAttribute("id", "play");
document.body.appendChild(divContainer);

var  pie = document.createElement('footer');
pie.innerHTML=('<center><h2> Desarrollos Web</h2></center>');
document.body.appendChild(pie);

var divTablero = document.createElement('div');
divTablero.classList.add('flex-tablero');
divTablero.setAttribute("id", "board");
divContainer.appendChild(divTablero);

for (x=1; x<9; x++){
    var divFila = document.createElement('div');
    divFila.classList.add('flex-fila');
    divFila.setAttribute("id", x+1);
    if (parImpar(x)){
        divFila.classList.add('flex-fila', 'reverse' );
    }  
   
    
    for (y=1; y<9; y++){
        var divCuadro = document.createElement('div');
        if (parImpar(y)) {
            divCuadro .classList.add('cuadro', 'black');
            divCuadro .setAttribute("id", y);
            divFila.appendChild(divCuadro);
            divTablero.appendChild(divFila);
        }else {
            divCuadro .classList.add('cuadro', 'white' );
            divCuadro .setAttribute("id", y);
            divFila.appendChild(divCuadro);
        }
        
    }
    
    

}


function parImpar(numero) {
    if(numero % 2 == 0) {
      return true;
    }
    else {
      return false;
    }
  }