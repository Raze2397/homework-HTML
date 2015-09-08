function scroll() {
    window.scrollTo(0, 0);
}

setInterval(function blink() {
   var c = document.getElementById("promo");
    var d = document.getElementById("promo1");
    var e = document.getElementById("promo2");
   
    c.style.backgroundColor='red';
    
    d.style.backgroundColor='red';
   
    e.style.backgroundColor='red';
    
    blink1();
    
    
    
    
}
            ,300);

setInterval(function blink1() {
   var c = document.getElementById("promo");
    var d = document.getElementById("promo1");
    var e = document.getElementById("promo2");
   
    c.style.backgroundColor='blue';
    
    d.style.backgroundColor='blue';
   
    e.style.backgroundColor='blue';
    
    blink();
    
    
    
},200);

