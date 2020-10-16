function orago(){
  let mctimer;
  mctimer = new Date().getHours();
  let minuta = new Date().getMinutes();
  if(mctimer < 10 && mctimer >= 4){
    document.body.style.background = "url(https://cdn.glitch.com/1d69f9c1-2526-4773-8ea1-bcd9331f186a%2Fporanek.png?v=1572632023200)"
  }
  else if(mctimer < 20 && mctimer >= 10){
    document.body.style.background = "url(https://cdn.glitch.com/1d69f9c1-2526-4773-8ea1-bcd9331f186a%2Fmiddletime.png?v=1572632671496)"
  }
  else{
    document.body.style.background = "url(https://cdn.glitch.com/1d69f9c1-2526-4773-8ea1-bcd9331f186a%2Fnighttime.png?v=1572632678080)"
  }
  document.getElementById("mctimer").innerHTML = mctimer + ":" + minuta;
  setTimeout("orago()" , 1000)
}