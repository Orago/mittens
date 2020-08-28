var themes = (localStorage.getItem('themes'));
     if (themes === 'normal'){
      setTimeout(function(){ window.location.replace("/");  }, 1000);      
      }
    else if (themes === 'dark'){
      setTimeout(function(){ window.location.replace("/darkmode");  }, 1000);            
      }      
if (themes !== 'normal'){ 
       if (themes !== 'dark'){ 
         localStorage.setItem('themes', 'normal');
       }
}
        