let rating = 0;
const chooseOne = document.getElementById("one-star");
const chooseTwo = document.getElementById("two-star");
const chooseThree = document.getElementById("three-star");
const chooseFour = document.getElementById("four-star");
const chooseFive = document.getElementById("five-star");

const element = document.getElementById("starItems");
const items = element.getElementsByClassName("reset");


function oneStar() {
  if (rating != 0) {
    for (const index of items) {
      index.removeAttribute("style");
    }
  }
  rating = 1;

  localStorage.setItem("rating", rating)

  chooseOne.style.backgroundColor = "var(--button-inactive-clr)";
  chooseOne.style.color = "var(--clr-primary-txt)";

  returnValue(rating);
}


function twoStar() {
    if (rating != 0) {
        for (const index of items) {
          index.removeAttribute("style");
        }
      }
      rating = 2;
      localStorage.setItem("rating", rating)
    
      chooseTwo.style.backgroundColor = "var(--button-inactive-clr)";
      chooseTwo.style.color = "var(--clr-primary-txt)";

      returnValue(rating);
}
function threeStar() {
    if (rating != 0) {
        for (const index of items) {
          index.removeAttribute("style");
        }
      }
      rating = 3;
      localStorage.setItem("rating", rating)
    
      chooseThree.style.backgroundColor = "var(--button-inactive-clr)";
      chooseThree.style.color = "var(--clr-primary-txt)";

      returnValue(rating);
}
function fourStar() {
    if (rating != 0) {
        for (const index of items) {
          index.removeAttribute("style");
        }
      }
      rating = 4;
      localStorage.setItem("rating", rating)
    
      chooseFour.style.backgroundColor = "var(--button-inactive-clr)";
      chooseFour.style.color = "var(--clr-primary-txt)";

      returnValue(rating);
}
function fiveStar() {
    if (rating != 0) {
        for (const index of items) {
          index.removeAttribute("style");
        }
      }
      rating = 5;
      localStorage.setItem("rating", rating)
    
      chooseFive.style.backgroundColor = "var(--button-inactive-clr)";
      chooseFive.style.color = "var(--clr-primary-txt)";

      returnValue(rating);
}


function returnValue(ratingValue){
  console.log(ratingValue)
}

function newLocation(){
    if(rating != 0){
    window.location.href="completemsg.html";
    }
}


