let slider_img = document.querySelector(".slider-img");
let images = ["1.jpj ", "2.jpg"];
let i= 0;

function prev(){
  if(i<= 0 ) i = images.length;
  i--;
  return setImg();

}

function next(){

}

function setImg() {
    return slider_img.setAttribute("src", "images"/+ images[i]);
}