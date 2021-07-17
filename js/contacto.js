var url ="https://reqres.in/api/register" ;
var enviar = document.querySelector('#btnsend');

enviar.addEventListener('click', enviarInfo);


function enviarInfo(e){
  var names = document.querySelector('#names').value;
  var email = document.querySelector('#email').value;
  var comment = document.querySelector('#comnent').value;
  var errores = ' '; 
  // Validado Nombre ==============================
  if(names ==''){
    errores += 'Escriba un nombre'+' || ';
    console.log(names);
  }else{
    errores ='';
  }
  // Validado Correo ==============================
  if(email ==''){
    errores += 'Ingrese un correo'+' || ';
    console.log(email);
  }else{
    errores ='';
  }
  // Validado Mensaje ==============================
  if(comment ==''){
    errores += 'Escriba el Comentario';
    console.log(comment);
  }else{
    errores ='';
  }
  if (!errores==''){
    alert(errores);
  }else{
    var info = {
    names: names,
    email: email,
    comment: comment,
    }
    sendServer(url, info);
    setTimeout(function(){
      window.history.back(); 
    }, 3000);
    
  }
}

function sendServer(url, info){
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(info),
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
