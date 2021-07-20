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
var posActual;
var url = "https://reqres.in/api/register";
var principal = document.querySelector('#principal');
var miBoard = document.querySelector('#board');
var turno = [{'estado': true},{'estado': false}];
var player = 1;
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
function mov(pieza, posx, posy) {
  if ((posy > 0) && (posy < 7)) {
      console.log("pieza"+pieza.className);
    if (pieza.className == "pieza"){
      var movrowright = parseInt(posx, 10) + 1; //posx  1+1= 2
      var movcolumnright = parseInt(posy, 10) + 1; //posy  0+1 = 1    
      var movrowleft = parseInt(posx, 10) + 1;
      var movcolumnleft = parseInt(posy, 10) - 1;
      console.log("Mov blancas"+movrowright+movcolumnright+movrowleft+movcolumnleft);
    }else  if (pieza.className == "piezan") {
     console.log("pieza"+pieza.className);
      var movrowright = parseInt(posx, 10) - 1;
      var movcolumnright = parseInt(posy, 10) - 1;    
      var movrowleft = parseInt(posx, 10) - 1;
      var movcolumnleft = parseInt(posy, 10) + 1;
        console.log("Mov blancas"+movrowright+movcolumnright+movrowleft+movcolumnleft);
      //
    }
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
   // console.log("Movimiento permitido:" + celleft.id, celright.id);

  } else if (posy == 0) {
      if (pieza.className == "pieza"){
        movrowright = parseInt(posx, 10) + 1; //posx  1+1= 2
        movcolumnright = parseInt(posy, 10) + 1; //posy  0+1 = 1
      }else{
        movrowright = parseInt(posx, 10) - 1; //posx  1+1= 2
        movcolumnright = parseInt(posy, 10) + 1; //posy  0+1 = 1
      }
    celdaright = movrowright.toString() + movcolumnright.toString();
    celright = document.querySelector('#c' + celdaright);
    if (tablero[movrowright][movcolumnright].estado == 0) {
      celright.classList.replace('black', 'valid-mov');
    }
  } else if (posy == 7) {
    if (pieza.className == "pieza"){
      movrowleft = parseInt(posx, 10) + 1; //posx  1+1= 2
      movcolumnleft = parseInt(posy, 10) - 1; //posy  0+1 = 1    
    }else {
      movrowleft = parseInt(posx, 10) - 1; //posx  1+1= 2
      movcolumnleft = parseInt(posy, 10) - 1; //posy  0+1 = 1  
    }    
    celdaleft = movrowleft.toString() + movcolumnleft.toString();
    celleft = document.querySelector('#c' + celdaleft);
    if (tablero[movrowleft][movcolumnleft].estado == 0) {
      celleft.classList.replace('black', 'valid-mov');
    }
  }

  valorl = celleft.id;
  valorr = celright.id;
  posicionanterior = pieza.id;
  console.log("posantessss:"+ posicionanterior);
  return posicionanterior, valorl, valorr
}

function limpiar(valorl, valorr){
  var celdaL = document.querySelector('#'+valorl);
  var celdaR = document.querySelector('#'+valorr);
  celdaL.classList.replace('valid-mov', 'black');
  celdaR.classList.replace('valid-mov', 'black');
  console.log("Estoy limpiando...");
}

// actualizar tablero
function actualizartablero(){
  tablero.forEach(function(u){
  console.log(tablero);
});
}

// Inicia el Juego
function iniciar() {
  console.log("player: " + player);
  var player1 = document.querySelector('#player1');
  var player2 = document.querySelector('#player2')
  player1.classList.add('turn');
  var miBoard = document.querySelector('#board');
  miBoard.addEventListener("mouseover", function (e) {
    selectCelda(e);
    if (player == 1 && e.target.className == 'pieza') {
      mov(actual, x, y);
      console.log(e.target.id + "" + e.target.className);
    } else if (player == 2 && e.target.className == 'piezan') {
      mov(actual, x, y);
      console.log(e.target.id + "" + e.target.className);
    }
  });

 
  miBoard.addEventListener("mouseout", function (e) {
    if ((player == 1) && (e.target.className =='pieza')) {
      limpiar(valorl, valorr);
     // console.log(e.target.id + "" + e.target.className);
    } else if ((player == 2) && (e.target.className == 'piezan')) {
      limpiar(valorl, valorr);
      console.log(e.target.id + "" + e.target.className);
    }
  });

  miBoard.addEventListener("click", function (e) {
    console.log("player:"+player);
    jugada(); 
    console.log("player:"+player);
    cambiarTurno(player);
    console.log("player:"+player);
      
  });
}


// fuction jugada
function jugada(){
  if (actual.id == valorl) {
    console.log("left:" + valorl);
    mover(valorl, player);
    borrar(posicionanterior);
    limpiar(valorl, valorr);
    var celdaSug = document.querySelector('#' + valorr);
    celdaSug.classList.replace('valid-mov', 'black');
  }else if (actual.id == valorr) {
    console.log("right:" + valorr);
    mover(valorr, player);
    borrar(posicionanterior, x, y );
    limpiar(valorl, valorr);
    var celdaSug = document.querySelector('#' + valorl);
     celdaSug.classList.replace('valid-mov', 'black');
  }
}

function cambiarTurno(player){
  if (player ==1){
    turno[0] = false;
    turno[1] = true;
    player = 2;
    
  }
   if (player ==2){
    turno[1] == false;
    turno[0] = true;
    player = 1;
  
  }
  return player;
 
}


// Borra la fichas de la posición anterior
function borrar(posicionanterior) {
  console.log("Pos Anteriro: " + posicionanterior);
  x = posicionanterior.substring(1,2);
  y = posicionanterior.substring(2,3);
  console.log("x:", x);
  console.log("y:", y);

  var p = document.querySelector("#" + posicionanterior);
  if (p.className == "pieza") {
    p.classList.remove("pieza");
     x = posicionanterior.substring(1,2);
  y = posicionanterior.substring(2,3);
  console.log("x:", x);
  console.log("y:", y);
    tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 0;
    return player = 2;
  } else {
    p.classList.remove("piezan");
   tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 0;
    return player = 1;
  }
  console.log("antes: ", tablero[x][y].estado);
  //tablero[x][y].estado = 0;
  console.log("Despues: ", tablero[x][y].estado);
}


//Mueve la ficha a la nueva psición
function mover(valorl, player) {
  console.log("valorl :" + valorl);
  var p = document.createElement("div");
  p.id = "p" + valorl.substring(1, 3);
  console.log(p.id);
  console.log(valorl);
  var c = document.querySelector('#' + valorl);
  c.classList.replace('valid-mov', 'black');
  if (player == 1) {
    p.classList.add("pieza");
    //return player= 2;
  } else if (player == 2) {
    p.classList.add("piezan");
    //return player =1;
  }

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
 // console.log("selectCelda:" + e.target.id);
  x = actual.id.charAt(1);
  y = actual.id.charAt(2);
  return actual.id, x, y;
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
