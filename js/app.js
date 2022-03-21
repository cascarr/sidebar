/**
 * target the DOM elements
 * 
 */
const sdToggle = document.querySelector('.sidebar-toggle');
const sdBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// adding eventListener to the DOM
sdToggle.addEventListener('click', function() {

    //console.log(sdBar.classList.contains('silicon'));
    
    // if (sdBar.classList.contains('show-sidebar')) {

    //     sdBar.classList.remove('show-sidebar');
    // } else {

    //     sdBar.classList.add('show-sidebar');
    // }

    // applying one liner of code using toggle method
    sdBar.classList.toggle('show-sidebar');

});

closeBtn.addEventListener('click', clsFunc);


function clsFunc() {

    sdBar.classList.remove('show-sidebar');
    console.log(sdBar.classList);
}