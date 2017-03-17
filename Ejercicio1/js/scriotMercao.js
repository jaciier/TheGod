function agregar(){
    var liset =  document.getElementById("Mercado").value;
    var frodo = document.createElement("li");
    frodo.innerHTML = liset;
    document.getElementById("lista").appendChild(frodo);
}
