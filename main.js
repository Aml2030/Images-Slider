var sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));
var slidesCount = sliderImgs.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById("slide-number");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

var ul = document.createElement("ul");
ul.setAttribute("id", "indicator-ul");
for (let i = 1; i <= slidesCount; i++) {
  var li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
document.getElementById("indicators").appendChild(ul);

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

function prevSlide() {
  if (prevButton.classList.contains("disabled")) return false;
  else {
    currentSlide--;
    theChecker();
  }
}
function nextSlide() {
  if (nextButton.classList.contains("disabled")) return false;
  else {
    currentSlide++;
    theChecker();
  }
}
var theUL = document.getElementById("indicator-ul");
var theLIs = Array.from(document.querySelectorAll("#indicator-ul li"));

for (var i = 0; i < theLIs.length; i++) {
  theLIs[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  removeAllActive();
  sliderImgs[currentSlide - 1].classList.add("active");
  theUL.children[currentSlide - 1].classList.add("active");
  currentSlide == 1
    ? prevButton.classList.add("disabled")
    : prevButton.classList.remove("disabled");

  currentSlide == slidesCount
    ? nextButton.classList.add("disabled")
    : nextButton.classList.remove("disabled");
}
function removeAllActive() {
  sliderImgs.forEach(function (e) {
    e.classList.remove("active");
  });
  theLIs.forEach(function (b) {
    b.classList.remove("active");
  });
}
