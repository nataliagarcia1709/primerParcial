
if(localStorage.getItem("cod")==null) {
    window.location.href="index.html";
  }
  
  
  var data = localStorage.getItem('name');
  document.getElementById('name').innerHTML = data;
  var data = localStorage.getItem('codigo');
  document.getElementById('cod').innerHTML = data;
  
  document.getElementById("cerrar").onclick = function() {
    localStorage.removeItem('cod');
    localStorage.removeItem('pwd');
  
    window.location.href="index.html";
  }