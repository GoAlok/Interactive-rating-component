

var numberElements = document.querySelectorAll('.numb');

numberElements.forEach(function (element) {
    element.addEventListener('click', function () {
        // remove Active class from all elements.
        numberElements.forEach(function (elem) {
            elem.classList.remove('active');
        });
        element.classList.add('active');
    });
});



const submit = () => {
    let mainContainer = document.querySelector('.main_container');
    
    let activeRating = document.querySelector(".active");
    let clickedValue = activeRating.textContent
    

    mainContainer.innerHTML = '';
    let newImg = mainContainer.appendChild(document.createElement("img"));
    newImg.src = "./images/illustration-thank-you.svg";
    newImg.className = "new_img";

    let rating_text = mainContainer.appendChild(document.createElement("div"));
    rating_text.className = "rating_text";
    rating_text.textContent = "You selected " + clickedValue + "out of 5";

    let h2Thank = mainContainer.appendChild(document.createElement("h2"));
    h2Thank.className = "h2Thank_you";
    h2Thank.textContent = "Thank you!";

    let ratingP = mainContainer.appendChild(document.createElement("p"));
    ratingP.className = "ratingP";
    ratingP.textContent = "  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! "
}






