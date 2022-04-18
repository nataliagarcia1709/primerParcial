// const Json = "https://api-parcial.crangarita.repl.co/login";

// const xhttp = new XMLHttpRequest();

// document.getElementById("btn-register").addEventListener("click", (e) => {
//   e.preventDefault();
//   let user = document.getElementById("user").value;
//   let pass = document.getElementById("pwd").value;

//   let usuario = {
//     "user": user,
//     "password": pass,
//   }

//   xhttp.open("POST", Json, true);
//   xhttp.setRequestHeader("Accept", "application/json");
//   xhttp.setRequestHeader("Content-Type", "application/json");
//   xhttp.send(JSON.stringify(usuario));


//   xhttp.onreadystatechange = function () {
//     //ready state indica que el estado cambio, 200 es el valor de una respuesta exitosa
//     if (this.readyState == 4 && this.status < 400) {
//       var responseJsonObj = JSON.parse(this.responseText);
//       //this.responseText es la respuesta de la api
//       console.log(responseJsonObj)
//       window.open("../index.html");
//     }
//   };
// })
// if(localStorage.getItem("user")!=null) {
//   window.location.href="html/dashboard.html";
// }


document.getElementById("btn-register").onclick = function (
  
) {  


    var codigo = document.getElementById('cod').value;
    var clave = document.getElementById('pwd').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {cod: codigo, pwd: clave};
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        console.log('Success:', response);
                        localStorage.setItem("cod", response.cod);
                        localStorage.setItem("name", response.name);
                        localStorage.setItem("email", response.email);
                        window.location.href="notas.html";
                      }
         );
                    }