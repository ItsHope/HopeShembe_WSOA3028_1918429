const navigation = document.getElementById('navigation')
const logo = document.getElementById('logo')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navigation.style.padding = "10px 5px";
        logo.style.fontSize= "15px";

    }

    else {
        navigation.style.padding = " 20px 10px";
        logo.style.fontSize= "30px";
    }
}