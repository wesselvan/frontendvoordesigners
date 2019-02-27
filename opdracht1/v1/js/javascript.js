var voegtoebutton = document.getElementsByName('voegtoe');
var voegtoenotifcation = document.querySelector('#notification');

var likebutton = document.getElementsByName('like');



voegtoebutton.forEach(function (button) {
    button.addEventListener('click', function () {

        if (button.firstChild.className.includes('fas fa-bookmark')) {
            button.firstChild.className = 'far fa-bookmark';
            voegtoenotifcation.classList.remove('added');
        } else {

            button.firstChild.className = 'fas fa-bookmark';
            voegtoenotifcation.classList.toggle('added');
        }
    })
});



likebutton.forEach(function (button) {
    button.addEventListener('click', function () {

        if (button.firstChild.className.includes('fas fa-thumbs-up')) {
            button.firstChild.className = 'far fa-thumbs-up';
        } else {
            button.firstChild.className = 'fas fa-thumbs-up';
        }
    })
});
