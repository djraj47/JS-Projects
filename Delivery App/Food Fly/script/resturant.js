function searcitem() {
    var input = document.getElementById("menusearch").value.toLowerCase();
    var boxes = document.querySelectorAll(".items");

    for (var i = 0; i < boxes.length; i++) {
        var titleElement = boxes[i].getElementsByClassName("item-detail")[0];
        if (titleElement) {
            var title = titleElement.getElementsByClassName("item-title")[0].innerText.toLowerCase();
            if (title.indexOf(input) > -1) {
                boxes[i].style.display = "";
            } else {
                boxes[i].style.display = "none";
            }
        }
    }
}

// ===========================================================================================

function showDiv(selectedDiv) {
    let menu = document.querySelector(".menu");
    let reviews = document.querySelector(".reviews");
    let photos = document.querySelector(".photos");


    const divMap = {
        'menu': menu,
        'photos': photos,
        'reviews': reviews
    };

    for (const div of Object.values(divMap)) {
        div.classList.remove('active1');
        div.classList.add('hidden');
    }

    divMap[selectedDiv].classList.remove('hidden');
    divMap[selectedDiv].classList.add('active1');
}

// =================================================================================

function setActiveDiv(divId) {
    var divs = document.querySelectorAll('.order-items div');

    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('active');
    }

    var targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.classList.add('active');
    }
}

function bothfunction(div) {
    showDiv(div);
    setActiveDiv(div);

}

// =================================================================================
// function to make menu active on click

var lis = document.querySelectorAll('.menu-nav li');
function selectmenu(event) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active-menu');
    }

    event.target.classList.add('active-menu');
}

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', selectmenu);
}


// ================================================================================

// search function

function showItems(category) {
    let items = document.querySelectorAll('.items');
    items.forEach(item => item.style.display = 'none');

    // Show only the items with the selected category
    let selectedItems = document.querySelectorAll('.category');
    selectedItems.forEach(item => {
        if (item.textContent.trim() === category) {
            item.parentElement.style.display = 'flex';
        }
    });

    document.querySelector('.heading h3').textContent = category;

    document.querySelector('.order-items').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.menu-nav li').forEach(li => {
    li.addEventListener('click', function () {
        let category = li.textContent;
        showItems(category);
    });
});

// ==================================================================================

// function to add item to cart
const itemContainers = document.querySelectorAll(".items");

// Select the .cart section
const cartSection = document.querySelector(".cart");

const cartItemTitle = cartSection.querySelector(".itemtitle h5");
const cartItemPrice = cartSection.querySelector(".itemprice p");
const cartItemImg = cartSection.querySelector(".itemimg img");

itemContainers.forEach((item) => {
    item.addEventListener("click", () => {
        const itemTitle = item.querySelector(".item-title").textContent.trim();
        const itemPrice = item.querySelector(".item-price").textContent.trim();
        const itemImg = item.querySelector(".item-img img").src;

        // Set the cart item title with the clicked item title
        cartItemTitle.textContent = itemTitle;
        cartItemPrice.textContent = itemPrice;
        cartItemImg.src = itemImg;

        // Display the cart section
        cartSection.style.display = "flex";
    });


});

// Function to close the cart (You can define this function)
function removeModal() {
    cartSection.style.display = "none";
}
