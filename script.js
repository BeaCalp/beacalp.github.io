const carouselImages = document.getElementsByClassName("carousel-image");
let currentImage = 0;


function passingImages(){
  currentImage ++;
  checkLimit(); //add limit to this funct calling the conditional funct
  
}


const checkLimit = () => {
  if (currentImage > 2) {
    currentImage = 0;
  }//stop the condition if image is more than 2 and go back to 0.
};
setInterval(passingImages, 3000)

function myFunction() {
  document.getElementById("pastText").innerHTML = "Borned in Calpe";
}
function myFunction1() {
  document.getElementById("presentText").innerHTML = "Living in London";
}
function myFunction2() {
  document.getElementById("futureText").innerHTML = "Discover the world";
}
