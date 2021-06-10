var divContainer = document.createElement('div');
divContainer.classList.add('flex-container');
divContainer.setAttribute("id", "play");
document.body.appendChild(divContainer);

var board = document.createElement("div");
board.id = "board";

var  pie = document.createElement('footer');
pie.innerHTML=('<center><h2> Desarrollos Web</h2></center>');





var tablero = new Array(8);
var celda = { id: "", posx: 0, posy: 0, color: "", estado: false };
var color = "white";
var numclick = 0;
for (x = 0; x < 8; x++) {
  tablero[x] = new Array(8);

  for (y = 0; y < 8; y++) {
    celda = { id: "" + x + y, posx: x, posy: y, color: color, estado: false };
    var valor = celda;
    tablero[x][y] = celda;
    if (color == "white") {
      color = "black";
    } else if (color == "black") {
      color = "white";
    }

    var colorf = tablero[x][y].color;
  }

  if (colorf == "black") {
    color = "black";
  } else if (colorf == "white") {
    color = "white";
  }
}


initTablero();

// //
//append to form element that you want .
var ncelda = 0;

for (x = 0; x < 8; x++) {
  var fila = document.createElement("div");
  fila.className = "row";
  fila.id = x;
  for (y = 0; y < 8; y++) {
    var celdas = document.createElement("div");
    var pieza = document.createElement("div");

    celdas.id = tablero[x][y].id;
    if (tablero[x][y].color == "white") {
      celdas.classList.remove("black", "celda");
      celdas.classList.add("white", "celda");
    } else {
      celdas.classList.remove("white", "celda");
      celdas.classList.add("black", "celda");
    }
    if (tablero[x][y].estado == true) {
      ncelda = ncelda + 1;
      if (ncelda <= 12) {
        celdas.appendChild(pieza);
        pieza.id = ncelda;
        pieza.classList.add("pieza");
      } else {
        celdas.appendChild(pieza);
        pieza.id = ncelda;
        pieza.classList.add("piezan");
      }
    }
    if (tablero[x][y].estado == false) {
      celdas.appendChild(pieza);
      pieza.id = ncelda;
      pieza.classList.add("pieza23");
    }

    fila.appendChild(celdas);
  }
  color = "black";
  board.appendChild(fila);
}
divContainer.appendChild(board);
document.body.appendChild(divContainer);
document.body.appendChild(pie);
var actual;
var nuevo;

var miBoard = document.querySelector("#board");

//colocarPiezas();

miBoard.addEventListener("click", function (e) {
  actual = e.target;
  //actual.classList.add("celdaR");
});

miBoard.addEventListener("mouseup", function (e) {
	nuevo = e.target;

  if (actual) {
    if (actual.classList.contains("pieza")) {
		actual.classList.remove("pieza");
		nuevo.classList.add("pieza");


    } else {
		actual.classList.remove("piezan");
		nuevo.classList.add("piezan");
    }

    //	actual.classList.remove("piezan");
    // nuevo.classList.add("celdaR");
  } else {
    actual = e.target;
  }
});

function colocarPiezas() {
  for (x = 0; x < 8; x++) {
    var fila = document.createElement("div");
    fila.className = "row";

    fila.id = x;
    for (y = 0; y < 8; y++) {
      var celdas = document.createElement("div");

      if (tablero[x][y].estado) {
        celdas.appendChild(pieza);
      }
      //	fila.appendChild(celdas);
      //	board.appendChild(fila);
    }

    //document.body.appendChild(board);
  }
}

function initTablero() {
  tablero[0][1].estado = true;
  tablero[0][3].estado = true;
  tablero[0][5].estado = true;
  tablero[0][7].estado = true;

  tablero[1][0].estado = true;
  tablero[1][2].estado = true;
  tablero[1][4].estado = true;
  tablero[1][6].estado = true;

  tablero[2][1].estado = true;
  tablero[2][3].estado = true;
  tablero[2][5].estado = true;
  tablero[2][7].estado = true;

  tablero[5][0].estado = true;
  tablero[5][2].estado = true;
  tablero[5][4].estado = true;
  tablero[5][6].estado = true;

  tablero[6][1].estado = true;
  tablero[6][3].estado = true;
  tablero[6][5].estado = true;
  tablero[6][7].estado = true;

  tablero[7][0].estado = true;
  tablero[7][2].estado = true;
  tablero[7][4].estado = true;
  tablero[7][6].estado = true;
}



function parImpar(numero) {
    if(numero % 2 == 0) {
      return true;
    }
    else {
      return false;
    }
  }