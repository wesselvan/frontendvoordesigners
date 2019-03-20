var slideslinks = document.getElementsByClassName("left");
var slidemidden = document.getElementsByClassName("active");
var sliderechts = document.getElementsByClassName("right");


var nextbutton = document.querySelector("#next");
var backbutton = document.querySelector("#back");


function knoprechts() {

    if(sliderechts.length > 0) {
        slidemidden[0].classList.replace('active', 'left');
        sliderechts[0].classList.replace('right', 'active');
       }

else {
    nextbutton.disable = true;
}};


function knoplinks() {

    if(slideslinks.length > 0) {
        slidemidden[0].classList.replace('active', 'right');
        slideslinks[slideslinks.length -1].classList.replace('left', 'active');
       }

else {
    nextbutton.disable = true;
}};



nextbutton.addEventListener('click', knoprechts);

backbutton.addEventListener('click', knoplinks);

