/*Adds the Search menu to the screen*/
/*var link = document.createElement('link');  
// set the attributes for link element 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = '/assets/css/searchmenu.css';  
document.getElementsByTagName('HEAD')[0].appendChild(link);  */

/* Css link replaced with document write*/
document.write('<style>body {font-family: Arial, Helvetica, inherit;}* {box-sizing: border-box;}/* Create a column layout with Flexbox */.row {display: flex;}/* Left column (menu) */.left {flex: 35%; padding: 15px 0;}.left h2 {padding-left: 8px;}/* Right column (page content) */.right {flex: 65%; padding: 15px;}/* Style the search box */#mySearch {width: 100%; font-size: 18px; padding: 11px; border: 1px solid #ddd;}/* Style the navigation menu inside the left column */#myMenu {list-style-type: none; padding: 0; margin: 0;}#myMenu li a {padding: 12px; text-decoration: none; color: black; display: block}#myMenu li a:hover {background-color: #eee;}body {font-family: "Lato", sans-serif;}.sidenav {height: 100%;width: 0;position: sticky;z-index: 1;top: 0;left: 0;background-color: #111;overflow-x: hidden;transition: 0.5s;padding-top: 60px;z-index:3;}.sidenav a {padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;z-index:3;}.sidenav a:hover {color: #f1f1f1;z-index:3;}.sidenav .closebtn {position: absolute;top: 0;right: 25px;font-size: 36px;margin-left: 50px;z-index:3;}@media screen and (max-height: 450px) {.sidenav {padding-top: 15px;}.sidenav a {font-size: 18px;}}</style>');
                  
document.write('<div id="mySidenav" style="position : sticky;" class="sidenav"><h1>Search</h1>');
document.write('<div class="row">');
document.write('<div class="left" style="background-color:#bbb;">');
document.write('<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>');
document.write('<input type="text" id="mySearch" onkeyup="Search()" placeholder="Search.." title="Type in a category">');
document.write('<ul id="myMenu">');

document.write('<li><a href="/">Home</a></li>');
document.write('<li><a href="/team">Team</a></li>');
document.write('<li><a href="/tools/timers/">Clocks</a></li>');
document.write('<li><a href="/fun/text-edit/">Text Editor</a></li>');
document.write('<li><a href="https://www.youtube.com/channel/UCbVQOO0xb57ja74eLJQJ3Kg">Youtube Channel</a></li>');
document.write('<li><a href="https://discord.gg/PgW8nq7">Discord Server</a></li>');
document.write('<li><a href="https://github.com/Orago">Github</a></li>');
document.write('<li><a href="/tools/donations/">Donate to Orago</a></li>');
document.write('<li><a onclick="randomlink()">Random page</a></li>');

document.write('</ul>');
document.write('</div>');
document.write('</div>');
document.write('</div>');
//document.write('');
//document.write('');
//document.write('');
var randomlinks=["/","/fun/text-edit/","/tools/timers/","/team","/projects"];
function randomlink(){window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]};

var nav_open;
  function openNav() {
  localStorage.setItem("nav", "true");
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  localStorage.setItem("nav", "false");
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('keydown', function(event) {
if (event.key === "Enter" && localStorage.getItem("nav") == "true") {
var input, filter, ul, li, a, i;
input = document.getElementById("mySearch");
filter = input.value.toLowerCase();
window.location.replace(window.location.protocol + "//" + window.location.host + "/navigation?search="+filter);}});

function Search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}