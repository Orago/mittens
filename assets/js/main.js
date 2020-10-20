function notification(text) {
  var popup = document.getElementById("popup");
  popup.className = "show";
  popup.innerHTML = text
  setTimeout(function(){ popup.className = popup.className.replace("show", ""); }, 3000);
}