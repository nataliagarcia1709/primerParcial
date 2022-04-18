
document.getElementById("btn-register").onclick = function (
  
) {  


    var codigo = document.getElementById('codido').value;
    var clave = document.getElementById('clave').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {codigo: codigo, clave: clave};
    
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
                        localStorage.setItem("codigo", response.codigo);
                        localStorage.setItem("nombre", response.nombre);
                        localStorage.setItem("email", response.email);
                        window.location.href="notas.html";
                      }
         );
                    }