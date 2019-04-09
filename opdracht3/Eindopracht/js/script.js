var header = document.querySelector('header');
var section = document.querySelector('section');
var nav = document.querySelector('nav');
var loadingbutton = document.querySelector('button');

var nextbutton = document.querySelector("#next");
var backbutton = document.querySelector("#back");

var loader = document.getElementsByClassName('.loader');
var overzichtlijst = document.querySelector('section');

var requestURL = 'https://raw.githubusercontent.com/KoopReynders/frontendvoordesigners/master/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var movies = request.response;
//     console.log(movies);
     //showData(movies);
    };



function showData(jsonObj) {
  var films = jsonObj;
//  console.log("showData",films);
var carrousel = document.createElement('div')
    carrousel.classList.add('carrousel');


  for (var i = 0; i < films.length; i++) {
//    console.log("film " + i);

    var filmcatalogus = document.createElement('article');

    var filmtitel = document.createElement('h2');
    filmtitel.textContent = films[i].title;

    var releasedatum = document.createElement('p');
    releasedatum.textContent = 'Release datum' + ' : ' + films[i].release_date;

     var filmcover = document.createElement('img');
    filmcover.src = films[i].cover;

     var filmplot = document.createElement('p');
    filmplot.textContent = films[i].plot;
//    console.log(filmcover.src);

    var acteursbekijken = document.createElement('ul');
      acteursbekijken.textContent = "Acteurs:"
    var acteurs = films[i].actors;

      for (var j = 0; j < acteurs.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = acteurs[j].actor_name + ' Als ' + acteurs[j].character;
      acteursbekijken.appendChild(listItem);
    }


    filmcatalogus.appendChild(filmtitel);
    filmcatalogus.appendChild(releasedatum);
    filmcatalogus.appendChild(filmcover);
    filmcatalogus.appendChild(filmplot);
    filmcatalogus.appendChild(acteursbekijken);
    section.appendChild(carrousel);
    carrousel.appendChild(filmcatalogus);

  }

    showSlides(slideIndex);

}


var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll("article");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("inactive");
  }

  slides[slideIndex - 1].classList.replace("inactive", 'active');
};



function knoprechts(){
  plusSlides(+1);
};

function knoplinks(){
  plusSlides(-1);
};



loadingbutton.onclick = function(){
  section.innerHTML = ""; //leegt de canvas
    loaderOut(); //stuurt de loader
  var movies = request.response;
  showData(movies);
  document.getElementById("loader").classList.replace("hidden", 'loader');
};



nextbutton.addEventListener('click', knoprechts);
backbutton.addEventListener('click', knoplinks);



document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight') {
   knoprechts();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
   knoplinks();
  }
});


function loaderOut() {
  myVar = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loader").classList.replace("loader", 'hidden');
}



