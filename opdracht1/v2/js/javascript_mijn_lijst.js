var downloadbuttons = document.getElementsByName('downloaden');




downloadbuttons.forEach(function (button) {
    button.addEventListener('click', function () {

        if (button.firstChild.className.includes('fas fa-file-download')) {
            button.firstChild.className = 'fas fa-check-circle';
        } else {
            button.firstChild.className = 'fas fa-file-download';
        }
    })
});

/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/






