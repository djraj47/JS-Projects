// login modal function

function showmodal() {
    document.querySelector('.loginform').classList.add('showloginform');
    document.querySelector('.overlay').classList.add('showoverlay');
}
function removemodal() {
    document.querySelector('.loginform').classList.remove('showloginform');
    document.querySelector('.overlay').classList.remove('showoverlay');

}

// login authentication

const user = "8587975475";
const password = "Raj@1539";
const username = "Raj kiran "
const loginform = document.querySelector('.loginbutton');
const message = document.getElementById('message');
const loggedin = document.querySelector('.loggedin');
const loggedout = document.querySelector('.loggedout');
const showname = document.querySelector('.name');

loginform.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (name === user && pass === password) {
        message.textContent = `Welcome ${username}`;
        loggedin.style.display = "none";
        loggedout.style.display = "flex";
        showname.textContent = `${username}`;


    }
    else {
        message.textContent = "Invalid Phone or Password";
    }
})



// logout funtion

function logout() {
    const loggedout = document.querySelector('.loggedout');
    const loggedin = document.querySelector('.loggedin');
    loggedin.style.display = "block";
    loggedin.style.display = "none";


}


// search function for resturants

function searchRestaurants() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var boxes = document.querySelectorAll(".boxes");

    for (var i = 0; i < boxes.length; i++) {
        var titleElement = boxes[i].getElementsByClassName("box-title")[0];
        if (titleElement) {
            var title = titleElement.getElementsByClassName("title")[0].innerText.toLowerCase();
            if (title.indexOf(input) > -1) {
                boxes[i].style.display = "";
            } else {
                boxes[i].style.display = "none";
            }
        }
    }
}


function openPage(pageUrl) {
    window.location.href = pageUrl;
}
