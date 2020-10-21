var popup_status = false;
window.addEventListener("load", function () {/*Start - If website Loaded*/
if (document.getElementById("popup")===null){/*Start - If variable popup equals null*/
  document.getElementById("assets").innerHTML+= `<navigation>
<link rel="stylesheet" href="./assets/css/navigation.css" />
  <input id="hamburger" class="hamburger" type="checkbox"/>
  <label class="hamburger" for="hamburger">
    <i></i>
    <text>
      <close>close</close>
      <open>menu</open>
    </text>
  </label>
  <section class="drawer-list" style="background-color:rgba(45, 150, 150, 0.9);">
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./social">Social Medias</a></li>
          <li><a href="./projects">Projects</a></li>
          <li><a href="./navigation">Navigation</a></li>

      </ul>
      </section>
</navigation>`;/*Add popup notification box*/
document.getElementById("assets").innerHTML+= '<div id="popup">\</div>';/*Add popup notification box*/
}
notification('Website Loaded!');
  document.getElementById("popup").style.backgroundColor = "#333"
});

function notification(text) {
if (popup_status !== true){
	popup_status = true;
	var popup = document.getElementById("popup");
	popup.className = "show";
	popup.innerHTML = text
	setTimeout(function(){ popup.className = popup.className.replace("show", "");popup_status=false;}, 3000);
  } 
}