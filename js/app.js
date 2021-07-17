// Declaraciones
var board = document.createElement("div");
board.id = "board";
var pie = document.createElement('footer');
pie.innerHTML = ('<center><h2> Desarrollos Web</h2></center>');
var count_click = 0;
var tablero = new Array(8);
var celda = { id: "", color: "", estado: 0 };
var color = "white";
var numclick = 0;
var actual;
var nuevo;
var c_click = 0;
var principal = document.querySelector('#principal');
principal.appendChild(divContainer);


// Program principal
gBoard();
cBoard();
divContainer.after(player2);
var start = document.querySelector("#iniciar");
start.addEventListener("click", function (e) {
  c_click += 1;
  if (c_click == 1) {
    initTablero();
    cFichas();
    iniciar();
    start.innerHTML = "Reiniciar el Juego";
  } else if (c_click == 2) {
    alert("paso B:" + c_click);
    start.innerHTML = "Iniciar el Juego";
    // funcion reniciar juego
    location.reload();
    c_click = 0;
  }
});

// Funciones

// Genera el Tablero
function gBoard() {
  for (x = 0; x < 8; x++) {
    tablero[x] = new Array(8);
    for (y = 0; y < 8; y++) {
      celda = { id: "" + x + y, color: color, estado: 0 };
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
}

// Carga el tablero
function cBoard() {
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
      fila.appendChild(celdas);
    }
    color = "black";
    board.appendChild(fila);
  }
  divContainer.appendChild(board);
  principal.appendChild(divContainer);
  divContainer.after(player2);
  document.body.appendChild(pie);

}

// Inicializa el Tablero
function initTablero() {
  tablero[0][1].estado = 1;
  tablero[0][3].estado = 1;
  tablero[0][5].estado = 1;
  tablero[0][7].estado = 1;

  tablero[1][0].estado = 1;
  tablero[1][2].estado = 1;
  tablero[1][4].estado = 1;
  tablero[1][6].estado = 1;

  tablero[2][1].estado = 1;
  tablero[2][3].estado = 1;
  tablero[2][5].estado = 1;
  tablero[2][7].estado = 1;

  tablero[5][0].estado = 2;
  tablero[5][2].estado = 2;
  tablero[5][4].estado = 2;
  tablero[5][6].estado = 2;

  tablero[6][1].estado = 2;
  tablero[6][3].estado = 2;
  tablero[6][5].estado = 2;
  tablero[6][7].estado = 2;

  tablero[7][0].estado = 2;
  tablero[7][2].estado = 2;
  tablero[7][4].estado = 2;
  tablero[7][6].estado = 2;
}

// Carga la Fichas
function cFichas() {
  var boardHTML = document.createElement("div");
  boardHTML.id = "board";
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
      if (tablero[x][y].estado == 1) {
        celdas.appendChild(pieza);
        pieza.id = "" + x + y;
        pieza.classList.add("pieza");
      } else if (tablero[x][y].estado == 2) {
        celdas.appendChild(pieza);
        pieza.id = "" + x + y;
        pieza.classList.add("piezan");
      }
      fila.appendChild(celdas);
    }
    color = "black";
    boardHTML.appendChild(fila);
  }
  divContainer.removeChild(board);
  divContainer.appendChild(boardHTML);
  principal.appendChild(divContainer);
  divContainer.after(player2);
  document.body.appendChild(pie);
}

function borrar(e, count_click, x, y) {
  if (count_click == 1) {
    c = document.getElementById(e.target.id);
    if (c.firstChild.className = "pieza") {
      c.firstChild.classList.remove("pieza");
    } else {
      c.firstChild.classList.remove("piezan");
    }

    tablero[x][y].estado = 0;
  }
}
var posactual = 01 ;// e, count_click, x, y
mov(1, 1, 7);
function mov(ficha, posx, posy){ 
  var ficha = 1 ; // blancas
  var posx = 0; // fila 0
  var posy = 3 ; // columna 3
  if ((ficha ==1) && (posy !==7)){
    movrowright = posx+1; //posx  1+1= 2
    movcolumn = posy+1; //posy  0+1 = 1
    console.log(movrowright.toString()+movcolumn.toString());
    //posend = concat(posx,posy); // posend = 12
    console.log("Movimiento permitido:");
  }
    console.log("Movimiento no permitido a la derecha'");

}



function mover(posx, poy) {
  if (count_click == 2) {
    p = document.createElement("div");
    p.id = x, y;
    c = document.getElementById(e.target.id);
    if (p.className == "pieza") {
      p.classList.add("pieza");
    } else {
      p.classList.add("piezan");
    }
    c.appendChild(p);
    tablero[x][y].estado = 1;
  }
}

function selectCelda(e) {
  actual = e.target;
  x = actual.id.charAt(0);
  y = actual.id.charAt(1);
  return actual.id, x, y;
}


function pintarCelda(id, x, y) {
  // tablero[x][y]= 1;
  celda = document.getElementById(id);
  celda.appendChild(pieza);
  pieza.id = id;
  pieza.classList.add("pieza");
  fila.appendChild(celda);
}




function actualizar() {
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
        celdas.appendChild(pieza);
        pieza.id = "" + x + y;
        pieza.classList.add("pieza");
      } else {
        celdas.appendChild(pieza);
        pieza.id = "" + x + y;
        pieza.classList.add("piezan");
      }
    }
    fila.appendChild(celdas);
  }
  color = "black";
  board.appendChild(fila);
}

// Inicia el Juego
function iniciar() {
  var miBoard = document.querySelector("#board");
  miBoard.addEventListener("click", function (e) {
    count_click += 1;
    switch (count_click) {
      case 1:
        selectCelda(e);
        borrar(e, count_click, x, y);
        break;
      case 2:
        selectCelda(e);
        mover(e, count_click, x, y);
        break;
      default:
        alert("Movimento no permitido");
        count_click = 0;
    }
  });
  miBoard.addEventListener("mouseover", function (e) {
    selectCelda(e);
    console.log(e.target.id + "" + e.target.className);
  });

}


function selecelda(e) {
  //e.classList.remove("black", "celda");
  //e.classList.add("white", "celda");
  console.log(e.classList);
}