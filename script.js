let selectedCar = "";
let selectedPrice = 0;

/* Select Car */

function selectCar(name, price, category, image) {


selectedCar = name;
selectedPrice = price;

document.getElementById("selectedCarName").innerText = name;

document.getElementById("selectedCarDescription").innerText =
    "You selected " + name + " (" + category + ").";

document.getElementById("priceDisplay").innerText =
    "₹" + price.toLocaleString() + " / day";

document.getElementById("dailyPrice").innerText =
    "₹" + price.toLocaleString();

document.getElementById("selectedCarImage").src = image;

calculatePrice();

document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
});


}

/* Filter Cars */

function filterCars(category) {

let cars = document.querySelectorAll(".car-card");

cars.forEach(function(car) {

    if (category === "all") {

        car.style.display = "block";

    } else {

        if (car.getAttribute("data-category") === category) {

            car.style.display = "block";

        } else {

            car.style.display = "none";

        }
    }

});


}

/* Calculate Price */

function calculatePrice() {


let fromDate =
    document.getElementById("fromDate").value;

let toDate =
    document.getElementById("toDate").value;


if (fromDate === "" || toDate === "") {

    document.getElementById("numberOfDays").innerText = "0";

    document.getElementById("totalPrice").innerText = "₹0";

    return;
}


let start = new Date(fromDate);
let end = new Date(toDate);


let difference =
    end.getTime() - start.getTime();


let days =
    Math.ceil(difference / (1000 * 60 * 60 * 24));


if (days <= 0) {

    document.getElementById("numberOfDays").innerText = "0";

    document.getElementById("totalPrice").innerText = "₹0";

    return;
}


let total = days * selectedPrice;


document.getElementById("numberOfDays").innerText =
    days;

document.getElementById("totalPrice").innerText =
    "₹" + total.toLocaleString();

document.getElementById("dailyPrice").innerText =
    "₹" + selectedPrice.toLocaleString();


}

/* Booking */

function bookCar() {


let name =
    document.getElementById("name").value;

let phone =
    document.getElementById("phone").value;

let fromDate =
    document.getElementById("fromDate").value;

let toDate =
    document.getElementById("toDate").value;

let location =
    document.getElementById("location").value;


if (selectedCar === "") {

    alert("Please select a car first.");

    return;
}


if (
    name === "" ||
    phone === "" ||
    fromDate === "" ||
    toDate === "" ||
    location === ""
) {

    alert("Please fill all the booking details.");

    return;
}


let start = new Date(fromDate);
let end = new Date(toDate);

let difference =
    end.getTime() - start.getTime();

let days =
    Math.ceil(difference / (1000 * 60 * 60 * 24));


if (days <= 0) {

    alert("Please select valid dates.");

    return;
}


document.getElementById("successMessage").style.display =
    "flex";


}

/* Close Success */

function closeSuccess() {


document.getElementById("successMessage").style.display =
    "none";


}