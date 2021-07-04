
var myButton = document.getElementById("goup");



window.onscroll = function ()  {

    'use strict';
    if (window.pageYOffset >= 200) {
        
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }

};

myButton.onclick = function () {
    'use scrict'; 
    window.scrollTo(0,0);
}