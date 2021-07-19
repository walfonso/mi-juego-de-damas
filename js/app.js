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
var posinicial = 0;
var posicionanterior;
var c_click = 0;
var colorficha = '';
var valorl;
var valorr;
var url = "https://reqres.in/api/register";
var principal = document.querySelector('#principal');
//principal.appendChild(divContainer);


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

    var jugador = 1;
    iniciar(jugador);
    start.innerHTML = "Reiniciar el Juego";
  } else if (c_click == 2) {
    alert("paso B:" + c_click);
    start.innerHTML = "Iniciar el Juego";
    // funcion reniciar juego
    location.reload();
    c_click = 0;
  }
});

// Fin programa principal



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

      celdas.id = "c" + tablero[x][y].id;
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

      celdas.id = "c" + tablero[x][y].id;
      if (tablero[x][y].color == "white") {
        celdas.classList.remove("black", "celda");
        celdas.classList.add("white", "celda");
      } else {
        celdas.classList.remove("white", "celda");
        celdas.classList.add("black", "celda");
      }
      if (tablero[x][y].estado == 1) {
        celdas.appendChild(pieza);
        pieza.id = "p" + x + y;
        pieza.classList.add("pieza");

      } else if (tablero[x][y].estado == 2) {
        celdas.appendChild(pieza);
        pieza.id = "p" + x + y;
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

// Sugiere los posible movimientos (reglas) 
function mov(ficha, posx, posy) {
  var movrowright = 0;
  var movcolumn = 0;
  var celright;
  var celleft;
  console.log('posx:' + posx);
  console.log('posy:' + posy);
  if ((posy > 0) && (posy < 6)) {
    var movrowright = parseInt(posx, 10) + 1; //posx  1+1= 2
    var movcolumnright = parseInt(posy, 10) + 1; //posy  0+1 = 1    
    var movrowleft = parseInt(posx, 10) + 1;
    var movcolumnleft = parseInt(posy, 10) - 1;
    celdaright = movrowright.toString() + movcolumnright.toString();
    celdaleft = movrowleft.toString() + movcolumnleft.toString();
    console.log("LEFT:" + celdaleft);
    celleft = document.querySelector('#c' + celdaleft);
    celright = document.querySelector('#c' + celdaright);
    // console.log("valor celda: ",cel);
    if (tablero[movrowright][movcolumnright].estado == 0) {
      celright.classList.replace('black', 'valid-mov');
    }
    if (tablero[movrowleft][movcolumnleft].estado == 0) {
      celleft.classList.replace('black', 'valid-mov');
    }
    valorl = celleft.id;
    valorr = celright.id;
    console.log("Movimiento permitido:" + celleft.id, celright.id);

  } else if (posy == 0) {
    movrowright = parseInt(posx, 10) + 1; //posx  1+1= 2
    movcolumnright = parseInt(posy, 10) + 1; //posy  0+1 = 1    
    celdaright = movrowright.toString() + movcolumnright.toString();
    celright = document.querySelector('#c' + celdaright);
    if (tablero[movrowright][movcolumnright].estado == 0) {
      celright.classList.replace('black', 'valid-mov');
    }
  } else if (posy == 7) {
    movrowleft = parseInt(posx, 10) + 1; //posx  1+1= 2
    movcolumnleft = parseInt(posy, 10) - 1; //posy  0+1 = 1    
    celdaleft = movrowleft.toString() + movcolumnleft.toString();
    celleft = document.querySelector('#c' + celdaleft);
    if (tablero[movrowleft][movcolumnleft].estado == 0) {
      celleft.classList.replace('black', 'valid-mov');
    }
  }

  valorl = celleft.id;
  valorr = celright.id;
  return valorl, valorr
  console.log("Movimiento no permitido a la derecha'");

}


// Inicia el Juego
function iniciar(player) {
  console.log("player: " + player);
  var player1 = document.querySelector('#player1');
  var player2 = document.querySelector('#player2')
  player1.classList.add('turn');
  var miBoard = document.querySelector('#board');
  miBoard.addEventListener("click", function (e) {

    selectCelda(e);
    if (actual.id == valorl) {
      console.log("left:" + valorl);
      mover(valorl);
      borrar(posicionanterior);
      if (player == 2) {
        player2.classList.add('turn');
        player1.classList.remove('turn');
      }
      if (player == 1) {
        player1.classList.remove('turn');
        player2.classList.add('turn');
      }


    } else if (actual.id == valorr) {
      console.log("right:" + valorr);
      mover(valorr);
      borrar(posicionanterior);
      if (player == 2) {
        player2.classList.add('turn');
        player1.classList.remove('turn');
      }
      if (player == 1) {
        player1.classList.remove('turn');
        player2.classList.add('turn');
      }

    }
    posicionanterior = actual.id;
    //console.log("pos anteropr:"+posicionanterior);
    if (player == 1 && actual.className == "pieza") {
      selectCelda(e);
      mov(actual, x, y);
      console.log("Jugador: " + player);
      return player = 2;

    } else if (player == 2 && actual.className == "piezan") {
      console.log("jugador: " + player);
      selectCelda(e);
      mov(actual, x, y);

      return player = 1;
    }

  });



  // Borra la fichas de la posición anterior
  function borrar(posicionanterior) {
    console.log("pos anteriro: " + posicionanterior);
    var p = document.querySelector("#" + posicionanterior);
    if (p.className == "pieza") {
      p.classList.remove("pieza");
    } else {
      p.classList.remove("piezan");
    }
    console.log("antes: ", tablero[x][y].estado);
    tablero[x][y].estado = 0;
    console.log("Despues: ", tablero[x][y].estado);
  }


  //Mueve la ficha a la nueva psición
  function mover(valorl) {
    console.log("valorl :" + valorl);
    var p = document.createElement("div");
    p.id = "p" + valorl.substring(1, 3);
    console.log(p.id);
    console.log(valorl);
    var c = document.querySelector('#' + valorl);
    c.classList.replace('valid-mov', 'black')
    p.classList.add("pieza");
    console.log(p);
    console.log(c);
    c.appendChild(p);
    console.log(valorl);
    x = actual.id.substring(1, 2);
    y = actual.id.substring(2, 3);
    console.log("XX" + parseInt(x, 10));
    console.log("yy" + parseInt(y, 10));
    tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 1;
    console.log(tablero[parseInt(x, 10)][parseInt(y, 10)].estado);
  }

  //Devuelve el id y la posición x, y de la celda seleccionada
  function selectCelda(e) {
    actual = e.target;
    console.log("selectCelda:" + e.target.id);
    x = actual.id.charAt(1);
    y = actual.id.charAt(2);
    return actual.id, x, y;
  }



  //  miBoard.addEventListener("mouseover", function (e) {
  //    selectCelda(e);
  //    console.log(e.target.id + "" + e.target.className);
  //  });

}



// Enviar Partida
function sendPartida(partida) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(partida),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (jsonRes) {
      console.log(jsonRes);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
