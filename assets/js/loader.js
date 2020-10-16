//Loading menu interface
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");loader.className += " hidden"; /* class "loader hidden"*/
  /*localStorage.setItem("nav", "false");/* Disable the navigation bar on load*/ /*Empty space*/});
document.write('<div class="loader"><bruh><li></li><li></li><li></li><li></li><li></li><li></li><li></li></bruh></div>');
          
/* 
document.addEventListener('keydown', function(event) {//Nav bar listener
  if (event.code == 'KeyI' && (event.ctrlKey || event.metaKey)) {
    if (localStorage.getItem("nav") == "false"){openNav(); // Messy way to open navigation bar
document.getElementById("mySearch").focus();localStorage.setItem("nav", "true");
   }else {closeNav(); // Messy way to open navigation bar
          localStorage.setItem("nav", "false");document.getElementById("mySearch").blur();}}});
*/
/*console.clear();

const wordContainerEl = document.querySelector("[data-word]");
const word = wordContainerEl.getAttribute("data-word");
const wordRepeatTimes = wordContainerEl.getAttribute("data-word-repeat");
const textColorsArray = wordContainerEl.getAttribute("data-text-colors").split(",");

for (let i = 0; i < wordRepeatTimes; i++) {
	const wordEl = document.createElement("span");
	wordEl.className = "word";
	wordEl.style.setProperty("--word-index", i);
	wordEl.style.setProperty("--color", textColorsArray[i]);
	for (let j = 0; j < word.length; j++) {
		const charEl = document.createElement("span");
		charEl.className = "char";
		charEl.style.setProperty("--char-index", j);
		charEl.innerHTML = word[j];
		wordEl.appendChild(charEl);
	}
	wordContainerEl.appendChild(wordEl);
}
*/