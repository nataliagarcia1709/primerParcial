
if(localStorage.getItem("codigo")==null) {
    window.location.href="index.html";
  }
  
  
  var data = localStorage.getItem('nombre');
  document.getElementById('nombre').innerHTML = data;
  var data = localStorage.getItem('codigo');
  document.getElementById('codigo').innerHTML = data;
  
  document.getElementById("cerrar").onclick = function() {
    localStorage.removeItem('codigo');
    localStorage.removeItem('clave');
  
    window.location.href="index.html";
  }