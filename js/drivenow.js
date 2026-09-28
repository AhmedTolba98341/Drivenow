/* start car search */

let search = document.getElementById("search_car");
let cars = document.getElementsByClassName("car_card");

if (search) {

    search.onkeyup = function () {

        let search_value = search.value.toLowerCase();

        for (let i = 0; i < cars.length; i++) {

            let car_name = cars[i].getElementsByClassName("car_name")[0].innerHTML.toLowerCase();

            if (car_name.includes(search_value)) {
                cars[i].style.display = "block";
            }

            else {
                cars[i].style.display = "none";
            }

        }

    };

}

/* end car search */


/* start normal car booking */

function bookCar(car_name) {

    window.location.href = "booking.html?car=" + encodeURIComponent(car_name);

}

/* end normal car booking */


/* start selected car */

let selected_car = document.getElementById("selected_car");

if (selected_car) {

    let url = new URLSearchParams(window.location.search);
    let car = url.get("car");

    if (car) {
        selected_car.value = car;
    }

}

/* end selected car */


/* start normal booking */

function confirmBooking() {

    let name = document.getElementById("customer_name").value;
    let email = document.getElementById("customer_email").value;
    let location = document.getElementById("pickup_location").value;
    let pickup_date = document.getElementById("pickup_date").value;
    let return_date = document.getElementById("return_date").value;
    let car = document.getElementById("selected_car").value;

    if (car == "") {

        alert("Please select a car.");
        return;

    }

    if (name == "") {

        alert("Please enter your name.");
        return;

    }

    if (email == "") {

        alert("Please enter your email.");
        return;

    }

    if (location == "") {

        alert("Please enter the pick-up location.");
        return;

    }

    if (pickup_date == "") {

        alert("Please select a pick-up date.");
        return;

    }

    if (return_date == "") {

        alert("Please select a return date.");
        return;

    }

    if (return_date < pickup_date) {

        alert("Return date cannot be before pick-up date.");
        return;

    }

    let booking = {

        type: "Car Booking",
        car: car,
        name: name,
        email: email,
        location: location,
        pickup: pickup_date,
        return: return_date

    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    window.location.href =
        "confirmation.html?" +
        "car=" + encodeURIComponent(car) +
        "&name=" + encodeURIComponent(name) +
        "&location=" + encodeURIComponent(location) +
        "&pickup=" + encodeURIComponent(pickup_date) +
        "&return=" + encodeURIComponent(return_date);

}

/* end normal booking */


/* start offer booking */

let offer_name = document.getElementById("selected_offer_name");

if (offer_name) {

    let url = new URLSearchParams(window.location.search);
    let offer = url.get("offer");

    if (offer == "weekend") {

        offer_name.innerHTML = "Weekend Special";

        document.getElementById("selected_offer_discount").innerHTML = "15% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "Enjoy your weekend with a premium car at a special price.";

    }

    else if (offer == "premium") {

        offer_name.innerHTML = "Premium Cars";

        document.getElementById("selected_offer_discount").innerHTML = "20% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "Upgrade your journey and save on selected premium cars.";

    }

    else if (offer == "long-rental") {

        offer_name.innerHTML = "Long Rental";

        document.getElementById("selected_offer_discount").innerHTML = "25% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "Rent for a longer period and enjoy bigger savings.";

    }

    else if (offer == "first-booking") {

        offer_name.innerHTML = "First Booking";

        document.getElementById("selected_offer_discount").innerHTML = "10% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "New to DriveNow? Get a discount on your first booking.";

    }

    else if (offer == "suv") {

        offer_name.innerHTML = "SUV Special";

        document.getElementById("selected_offer_discount").innerHTML = "18% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "Explore more with our comfortable and spacious SUVs.";

    }

    else if (offer == "member") {

        offer_name.innerHTML = "Member Special";

        document.getElementById("selected_offer_discount").innerHTML = "30% OFF";

        document.getElementById("selected_offer_description").innerHTML =
            "Join DriveNow and unlock exclusive member-only savings.";

    }

}

/* end offer booking */


/* start confirm offer booking */

function confirmOfferBooking() {

    let name = document.getElementById("offer_customer_name").value;
    let email = document.getElementById("offer_customer_email").value;
    let car = document.getElementById("offer_car").value;
    let location = document.getElementById("offer_pickup_location").value;
    let pickup_date = document.getElementById("offer_pickup_date").value;
    let return_date = document.getElementById("offer_return_date").value;

    let url = new URLSearchParams(window.location.search);
    let offer = url.get("offer");

    if (offer == null || offer == "") {

        alert("Please select an offer.");
        return;

    }

    if (name == "") {

        alert("Please enter your name.");
        return;

    }

    if (email == "") {

        alert("Please enter your email.");
        return;

    }

    if (car == "") {

        alert("Please select a car.");
        return;

    }

    if (location == "") {

        alert("Please enter the pick-up location.");
        return;

    }

    if (pickup_date == "") {

        alert("Please select a pick-up date.");
        return;

    }

    if (return_date == "") {

        alert("Please select a return date.");
        return;

    }

    if (return_date < pickup_date) {

        alert("Return date cannot be before pick-up date.");
        return;

    }

    let offer_title = "";
    let discount = "";

    if (offer == "weekend") {

        offer_title = "Weekend Special";
        discount = "15% OFF";

    }

    else if (offer == "premium") {

        offer_title = "Premium Cars";
        discount = "20% OFF";

    }

    else if (offer == "long-rental") {

        offer_title = "Long Rental";
        discount = "25% OFF";

    }

    else if (offer == "first-booking") {

        offer_title = "First Booking";
        discount = "10% OFF";

    }

    else if (offer == "suv") {

        offer_title = "SUV Special";
        discount = "18% OFF";

    }

    else if (offer == "member") {

        offer_title = "Member Special";
        discount = "30% OFF";

    }

    let booking = {

        type: "Offer Booking",
        offer: offer_title,
        discount: discount,
        car: car,
        name: name,
        email: email,
        location: location,
        pickup: pickup_date,
        return: return_date

    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    window.location.href =
        "confirmation.html?" +
        "type=offer" +
        "&offer=" + encodeURIComponent(offer_title) +
        "&discount=" + encodeURIComponent(discount) +
        "&car=" + encodeURIComponent(car) +
        "&name=" + encodeURIComponent(name) +
        "&location=" + encodeURIComponent(location) +
        "&pickup=" + encodeURIComponent(pickup_date) +
        "&return=" + encodeURIComponent(return_date);

}

/* end confirm offer booking */


/* start confirmation */

let confirmation_car = document.getElementById("confirmation_car");

if (confirmation_car) {

    let url = new URLSearchParams(window.location.search);

    let car = url.get("car");
    let name = url.get("name");
    let location = url.get("location");
    let pickup = url.get("pickup");
    let return_date = url.get("return");
    let type = url.get("type");
    let offer = url.get("offer");
    let discount = url.get("discount");

    confirmation_car.innerHTML = car || "";

    document.getElementById("confirmation_name").innerHTML = name || "";

    document.getElementById("confirmation_location").innerHTML = location || "";

    document.getElementById("confirmation_pickup").innerHTML = pickup || "";

    document.getElementById("confirmation_return").innerHTML = return_date || "";

    let confirmation_offer = document.getElementById("confirmation_offer");

    let confirmation_discount = document.getElementById("confirmation_discount");

    if (type == "offer") {

        if (confirmation_offer) {
            confirmation_offer.innerHTML = offer || "";
        }

        if (confirmation_discount) {
            confirmation_discount.innerHTML = discount || "";
        }

    }

}

/* end confirmation */


/* start my bookings */

let bookings_container = document.getElementById("bookings_container");
let no_bookings = document.getElementById("no_bookings");

if (bookings_container) {

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length == 0) {

        bookings_container.innerHTML = "";

        if (no_bookings) {
            no_bookings.style.display = "block";
        }

    }

    else {

        if (no_bookings) {
            no_bookings.style.display = "none";
        }

        for (let i = 0; i < bookings.length; i++) {

            let booking = bookings[i];

            let booking_card = document.createElement("div");

            booking_card.className = "booking_card";

            if (booking.type == "Offer Booking") {

                booking_card.innerHTML =
                    "<h3>" +
                    booking.offer +
                    "</h3>" +

                    "<p><strong>Discount:</strong> " +
                    booking.discount +
                    "</p>" +

                    "<p><strong>Car:</strong> " +
                    booking.car +
                    "</p>" +

                    "<p><strong>Name:</strong> " +
                    booking.name +
                    "</p>" +

                    "<p><strong>Pick-up Location:</strong> " +
                    booking.location +
                    "</p>" +

                    "<p><strong>Pick-up Date:</strong> " +
                    booking.pickup +
                    "</p>" +

                    "<p><strong>Return Date:</strong> " +
                    booking.return +
                    "</p>";

            }

            else {

                booking_card.innerHTML =
                    "<h3>" +
                    booking.car +
                    "</h3>" +

                    "<p><strong>Name:</strong> " +
                    booking.name +
                    "</p>" +

                    "<p><strong>Email:</strong> " +
                    booking.email +
                    "</p>" +

                    "<p><strong>Pick-up Location:</strong> " +
                    booking.location +
                    "</p>" +

                    "<p><strong>Pick-up Date:</strong> " +
                    booking.pickup +
                    "</p>" +

                    "<p><strong>Return Date:</strong> " +
                    booking.return +
                    "</p>";

            }

            bookings_container.appendChild(booking_card);

        }

    }

}

/* end my bookings */


/* start signup */

function signupUser() {

    let name = document.getElementById("signup_name").value;
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_password").value;

    if (name == "") {

        alert("Please enter your name.");
        return;

    }

    if (email == "") {

        alert("Please enter your email.");
        return;

    }

    if (password == "") {

        alert("Please enter your password.");
        return;

    }

    let old_email = localStorage.getItem("account_email");

    if (old_email == email) {

        alert("This email is already registered.");
        return;

    }

    localStorage.setItem("account_name", name);

    localStorage.setItem("account_email", email);

    localStorage.setItem("account_password", password);

    alert("Account created successfully.");

    window.location.href = "login.html";

}

/* end signup */


/* start login */

function loginUser() {

    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;
    let remember = document.getElementById("remember").checked;

    if (email == "") {

        alert("Please enter your email.");
        return;

    }

    if (password == "") {

        alert("Please enter your password.");
        return;

    }

    let account_email = localStorage.getItem("account_email");
    let account_password = localStorage.getItem("account_password");

    if (
        email == account_email &&
        password == account_password
    ) {

        localStorage.setItem("loggedIn", "true");

        if (remember == true) {

            localStorage.setItem("remember", "true");

        }

        else {

            localStorage.setItem("remember", "false");

        }

        window.location.href = "home.html";

    }

    else {

        alert("Incorrect email or password.");

    }

}

/* end login */


/* start login / logout */

let login_button = document.getElementById("login_button");

if (login_button) {

    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn == "true") {

        login_button.innerHTML = "Logout";
        login_button.href = "#";

        login_button.onclick = function () {

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("remember");

            window.location.href = "login.html";

        };

    }

    else {

        login_button.innerHTML = "Login";
        login_button.href = "login.html";

    }

}

/* end login / logout */