var slideslinks = document.getElementsByClassName("left");
var slidemidden = document.getElementsByClassName("active");
var sliderechts = document.getElementsByClassName("right");
var nextbutton = document.querySelector("#next");
var backbutton = document.querySelector("#back");





function slidenaarrechts(){

    if(slidemidden[0].classList.contains('active')) {
        slidemidden[0].classList.replace('active', 'right');
        slideslinks[0].classList.replace('left', 'active');
        }};



function slidenaarlinks(){

    if(slidemidden[0].classList.contains('active')) {

        slidemidden[0].classList.replace('active', 'left');
        sliderechts[0].classList.replace('right', 'active');

        }};




nextbutton.addEventListener('click', slidenaarrechts);

backbutton.addEventListener('click', slidenaarlinks);
