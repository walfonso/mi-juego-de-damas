// Declaraciones
var tableroHTML = document.createElement('div');
tableroHTML.id = 'tableroHTML';
var pie = document.createElement('footer');
pie.innerHTML = ('<center><h2> Desarrollos Web</h2></center>');
var contarClick = 0;
var tablero = new Array(8);
var celda = { id: '', color: '', estado: 0 };
var color = 'white';
var numClick = 0;
var actual;
var nuevo;
var posInicial = 0;
var posAnterior;
var cantClick = 0;
var colorFicha = '';
var valorIzq;
var valorDer;
var posActual;
var url = 'https://reqres.in/api/register';
var principal = document.querySelector('#principal');
var miTablero = document.querySelector('#tableroHTML');
var turno = [{'estado': true},{'estado': false}];
var player = 1;
var partida;
var movimiento;
var celdaOcupada;
var contadorFichasBlancas = 0;
var contadorFichasNegras = 0;


// Program principal
generarTablero();
cargarTablero();
divContainer.after(player2);
var start = document.querySelector('#iniciar');
start.addEventListener('click', function (e) {
  cantClick += 1;
  if (cantClick === 1) {
    iniciarTablero();
    cargarFichas();
    iniciar();
    start.innerHTML = 'Reiniciar el Juego';
  } else if (cantClick === 2) {
    alert('paso B:' + cantClick);
    start.innerHTML = 'Iniciar el Juego';
    // funcion reniciar juego
    location.reload();
    cantClick = 0;
  }
});

// Fin programa principal

// Funciones

// Genera el Tablero
function generarTablero() {
  for (x = 0; x < 8; x++) {
    tablero[x] = new Array(8);
    for (y = 0; y < 8; y++) {
      celda = { id: '' + x + y, color: color, estado: 0 };
      tablero[x][y] = celda;
      if (color === 'white') {
        color = 'black';
      } else if (color === 'black') {
        color = 'white';
      }
      var colorf = tablero[x][y].color;
    }
    if (colorf === 'black') {
      color = 'black';
    } else if (colorf === 'white') {
      color = 'white';
    }
  }
};


// Carga el tablero
function cargarTablero() {
  var ncelda = 0;
  for (x = 0; x < 8; x++) {
    var fila = document.createElement('div');
    fila.className = 'row';
    fila.id = x;
    for (y = 0; y < 8; y++) {
      var celdas = document.createElement('div');
      var pieza = document.createElement('div');
      celdas.id = 'c' + tablero[x][y].id;
      if (tablero[x][y].color === 'white') {
        celdas.classList.remove('black', 'celda');
        celdas.classList.add('white', 'celda');
      } else {
        celdas.classList.remove('white', 'celda');
        celdas.classList.add('black', 'celda');
      }
      fila.appendChild(celdas);
    }
    color = 'black';
    tableroHTML.appendChild(fila);
  }
  divContainer.appendChild(tableroHTML);
  principal.appendChild(divContainer);
  divContainer.after(player2);
  document.body.appendChild(pie);
};


// Inicializa el Tablero
function iniciarTablero() {
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
};


// Carga las Fichas
function cargarFichas() {
  var tableroHTMLHTML = document.createElement('div');
  tableroHTMLHTML.id = 'tableroHTML';
  var ncelda = 0;
  for (x = 0; x < 8; x++) {
    var fila = document.createElement('div');
    fila.className = 'row';
    fila.id = x;
    for (y = 0; y < 8; y++) {
      var celdas = document.createElement('div');
      var pieza = document.createElement('div');
      celdas.id = 'c' + tablero[x][y].id;
      if (tablero[x][y].color === 'white') {
        celdas.classList.remove('black', 'celda');
        celdas.classList.add('white', 'celda');
      } else {
        celdas.classList.remove('white', 'celda');
        celdas.classList.add('black', 'celda');
      }
      if (tablero[x][y].estado === 1) {
        celdas.appendChild(pieza);
        pieza.id = 'p' + x + y;
        pieza.classList.add('pieza');
      } else if (tablero[x][y].estado === 2) {
        celdas.appendChild(pieza);
        pieza.id = 'p' + x + y;
        pieza.classList.add('piezan');
      }
      fila.appendChild(celdas);
    }
    color = 'black';
    tableroHTMLHTML.appendChild(fila);
  }
  contadorFichasBlancas = 12;
  contadorFichasNegras = 12;
  document.getElementById('blancas').innerHTML = `${contadorFichasBlancas}`; 
  document.getElementById('negras').innerHTML = `${contadorFichasNegras}`; 

  divContainer.removeChild(tableroHTML);
  divContainer.appendChild(tableroHTMLHTML);
  principal.appendChild(divContainer);
  divContainer.after(player2);
  document.body.appendChild(pie);
};


// Sugiere los posible movimientos (reglas) 
function sugerirMov(pieza, posx, posy) {
  var colorFicha;
  if ((posy > 0) && (posy < 7)) {
      console.log('pieza'+pieza.className);
    if (pieza.className === 'pieza'){
      var movFilaDer = parseInt(posx, 10) + 1; 
      var movColDer = parseInt(posy, 10) + 1;    
      var movFilaIzq = parseInt(posx, 10) + 1;
      var movColIzq = parseInt(posy, 10) - 1;
      colorFicha = 'Blanca';
      console.log('Mov blancas:'+movFilaDer+movColDer+movFilaIzq+movColIzq);
    }else  if (pieza.className === 'piezan') {
      console.log('pieza'+pieza.className);
      var movFilaDer = parseInt(posx, 10) - 1;
      var movColDer = parseInt(posy, 10) - 1;    
      var movFilaIzq = parseInt(posx, 10) - 1;
      var movColIzq = parseInt(posy, 10) + 1;
      colorFicha = 'Negra';
      console.log('Mov. blancas:'+movFilaDer+movColDer+movFilaIzq+movColIzq);
    }
    celdaDer= movFilaDer.toString() + movColDer.toString();
    celdaIzq = movFilaIzq.toString() + movColIzq.toString();
    console.log('Izq:' + celdaIzq);
    celIzq = document.querySelector('#c' + celdaIzq);
    celDer = document.querySelector('#c' + celdaDer);
    if (tablero[movFilaDer][movColDer].estado === 0) {
      celDer.classList.replace('black', 'valid-mov');
      celdaAux = celDer.id;
      celdaOcupada = '';
      
    }if (tablero[movFilaDer][movColDer].estado === 2 && colorFicha === 'Blanca'  ){
      celdaOcupada = celdaAux;
      console.log(celdaOcupada);
      movFilaDer = parseInt(posx, 10) +2; 
      movColDer = parseInt(posy, 10) + 2;  
      celdaDer= movFilaDer.toString() + movColDer.toString();
      celDer = document.querySelector('#c' + celdaDer);
      celDer.classList.replace('black', 'valid-mov');
   
    //  var movFilaIzq = parseInt(posx, 10) + 1;
    //  var movColIzq = parseInt(posy, 10) - 1;
       
    }
    
    if (tablero[movFilaIzq][movColIzq].estado === 0) {
      celIzq.classList.replace('black', 'valid-mov');
    }else if (tablero[movFilaDer][movColDer].estado > 0){

        // ver 
    }
    valorIzq = celIzq.id;
    valorDer = celDer.id;
  } else if (posy === 0) {
      if (pieza.className === 'pieza'){
        movFilaDer = parseInt(posx, 10) + 1; 
        movColDer = parseInt(posy, 10) + 1; 
      }else{
        movFilaDer = parseInt(posx, 10) - 1; 
        movColDer = parseInt(posy, 10) + 1; 
      }
    celdaDer= movFilaDer.toString() + movColDer.toString();
    celDer = document.querySelector('#c' + celdaDer);
    if (tablero[movFilaDer][movColDer].estado === 0) {
      celDer.classList.replace('black', 'valid-mov');
    }
  } else if (posy === 7) {
    if (pieza.className === 'pieza'){
      movFilaIzq = parseInt(posx, 10) + 1; 
      movColIzq = parseInt(posy, 10) - 1;   
    }else {
      movFilaIzq = parseInt(posx, 10) - 1;
      movColIzq = parseInt(posy, 10) - 1; 
    }    
    celdaIzq = movFilaIzq.toString() + movColIzq.toString();
    celIzq = document.querySelector('#c' + celdaIzq);
    if (tablero[movFilaIzq][movColIzq].estado === 0) {
      celIzq.classList.replace('black', 'valid-mov');
    }
  }
  valorIzq = celIzq.id;
  valorDer = celDer.id;
  posAnterior = pieza.id;
  console.log('Pos Anterior:'+ posAnterior);
  return posAnterior, valorIzq, valorDer, celdaOcupada;
};


// Comer Ficha
function comerFicha(celdaOcupada){
  console.log('Celda Ocupada:' + celdaOcupada);
  var celdaBorrar = document.querySelector('#'+celdaOcupada);
  console.log('Celda Borrar:' + celdaBorrar.id);
  var idPieza = celdaOcupada.substring(1,3);
  var pieza = document.querySelector('#p'+idPieza);
  var x= parseInt(idPieza.substring(0,1), 10);
  var y= parseInt(idPieza.substring(1,2), 10);
  console.log(x+"x--y"+ y);
  if (tablero[x][y].estado === 1){
    contadorFichasBlancas -= 1;  
    document.getElementById('blancas').innerHTML = `${contadorFichasBlancas}`; 
  }else if (tablero[x][y].estado === 2){
    contadorFichasNegras -= 1;  
    document.getElementById('blancas').innerHTML = `${contadorFichasNegras}`; 
  }
  tablero[x][y].estado = 0;
  celdaBorrar.removeChild(pieza);
}



// Limpia la sugerencia de jugadas
function limpiar(valorIzq, valorDer){
  var celdaIzq = document.querySelector('#'+valorIzq);
  var celdaDer = document.querySelector('#'+valorDer);
  celdaIzq.classList.replace('valid-mov', 'black');
  celdaDer.classList.replace('valid-mov', 'black');
  console.log('Estoy limpiando...');
};


// actualizar tablero
function actualizarTablero(){
  tablero.forEach(function(u){
    console.log(tablero);
  });
};


// Inicia el Juego
function iniciar() {
  console.log('player: ' + player);
  var player1 = document.querySelector('#player1');
  var player2 = document.querySelector('#player2');
  player1.classList.add('turn');
  var miTablero = document.querySelector('#tableroHTML');
  var guardar = document.querySelector('#guardarJuego');
  var recuperar = document.querySelector('#recuperarJuego');

  guardar.addEventListener('click', function (e) {
    guardarJuego();
  });
  recuperar.addEventListener('click', function (e) {
    recuperarJuego();
    
  });
  miTablero.addEventListener('mouseover', function (e) {
    selectCelda(e);
    if (player === 1 && e.target.className === 'pieza') {
      sugerirMov(actual, x, y);
      console.log(e.target.id + '' + e.target.className);
    } else if (player === 2 && e.target.className === 'piezan') {
      sugerirMov(actual, x, y);
      console.log(e.target.id + '' + e.target.className);
    }
  });

  miTablero.addEventListener('mouseout', function (e) {
    if ((player === 1) && (e.target.className ==='pieza')) {
      limpiar(valorIzq, valorDer);
    
    } else if ((player === 2) && (e.target.className === 'piezan')) {
      limpiar(valorIzq, valorDer);
      console.log(e.target.id + '' + e.target.className);
    }
  });

  miTablero.addEventListener('click', function (e) {
    console.log('player:'+player);
    jugar(); 
    console.log('player:'+player);
    //cambiarTurno(player);
    console.log('player:'+player);
  });
};


// Raliza la juagada
function jugar(){
  if (actual.id === valorIzq) {
    console.log('left:' + valorIzq);
    mover(valorIzq, player);
    var jugador = player;
    borrar(posAnterior);
    limpiar(valorIzq, valorDer);
    var celdaSug = document.querySelector('#' + valorDer);
    celdaSug.classList.replace('valid-mov', 'black');
    movimiento = valorIzq;
  }else if (actual.id === valorDer) {
    console.log('right:' + valorDer);
    mover(valorDer, player);
    borrar(posAnterior, x, y );
    comerFicha(celdaOcupada);
    limpiar(valorIzq, valorDer);
    var celdaSug = document.querySelector('#' + valorIzq);
    celdaSug.classList.replace('valid-mov', 'black');
    movimiento = valorDer;
  }else {
    movimiento= 0;
  }   

  if (movimiento !==0){
    partida = {
      'jugador': jugador,
      'posAnterior': posAnterior,
      'movimiento': movimiento,
     }
    console.log(partida);
    enviarPartida(partida);
  }
};


// Cambia el turno del Jugador
function cambiarTurno(player){
  if (player ===1){
    turno[0] = false;
    turno[1] = true;
    player = 2;
  }
  if (player ===2){
    turno[1] === false;
    turno[0] = true;
    player = 1;
  }
  return player;
};


// Borra la fichas de la posición anterior
function borrar(posAnterior) {
  console.log('Pos Anterior: ' + posAnterior);
  x = posAnterior.substring(1,2);
  y = posAnterior.substring(2,3);
  console.log('x:', x);
  console.log('y:', y);
  var p = document.querySelector('#p'+ x+y);
  var c = document.querySelector('#c'+x+y);
  if (p.className === 'pieza') {
    c.removeChild(p);
    x = posAnterior.substring(1,2);
    y = posAnterior.substring(2,3);
    console.log('x:', x);
    console.log('y:', y);
    tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 0;
    return player = 2;
  } else {
    c.removeChild(p);
   tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 0;
    return player = 1;
  }
};


//Mueve la ficha a la nueva psición
function mover(valor, player) {
  console.log('valor :' + valor);
  var p = document.createElement('div');
  p.id = 'p' + valor.substring(1, 3);
  console.log(p.id);
  console.log(valor);
  var c = document.querySelector('#' + valor);
  c.classList.replace('valid-mov', 'black');
  x = actual.id.substring(1, 2);
  y = actual.id.substring(2, 3);
  console.log('X' + parseInt(x, 10));
  console.log('Y' + parseInt(y, 10));
  if (player === 1) {
    p.classList.add('pieza');
    tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 1;
  } else if (player === 2) {
    p.classList.add('piezan');
    tablero[parseInt(x, 10)][parseInt(y, 10)].estado = 2;
  }
  console.log(p);
  console.log(c);
  console.log('valor de celda ocupada en mover:'+celdaOcupada);
  if (celdaOcupada !== ''){
    comerFicha(celdaOcupada);
    celdaOcupada= '';
  }
  c.appendChild(p);
  console.log(valor);
};


//Devuelve el id y la posición x, y de la celda seleccionada
function selectCelda(e) {
  actual = e.target;
  x = actual.id.charAt(1);
  y = actual.id.charAt(2);
  return actual.id, x, y;
};



// Enviar Partida
function enviarPartida(partida) {
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
};


// Guardar Juego
function guardarJuego(){
  try {
    var juego = {
      'jugador': player,
      'tablero': tablero,
    };
    localStorage.setItem('juego', JSON.stringify(juego));
  } catch (error) {
    console.log(error.message);
  }
}

// Recupera el Juego
function recuperarJuego(){
  try {
    var juego = JSON.parse(localStorage.getItem('juego'));
    if (juego.jugador === 1){ 
        player = 1;
    } else {
      player= 2;
    }
    tablero = juego.tablero;

  } catch (error) {
    console.log(error.message);
  }
}