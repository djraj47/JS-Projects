'use strict';

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListner(eventType, callback);
}


// toogle search box in mobile devices

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventListener(searchTogglers, "click", function(){
    searchBox.classList.toogle("active");
});