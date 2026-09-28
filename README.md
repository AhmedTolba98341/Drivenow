# DriveNow

DriveNow is a front-end car rental booking website designed for browsing available cars, viewing offers, booking a vehicle, and tracking reservations in the browser.

## Overview

This project is a static web application built with HTML, CSS, Bootstrap, and JavaScript. It simulates a car rental experience with multiple pages for browsing vehicles, selecting offers, and completing bookings.

## Features

- Home landing page with booking search form
- Car listing and filtering/search functionality
- Offer promotions and special deals
- Booking flow for individual car reservations
- Confirmation page after successful booking
- Booking history stored in browser localStorage
- Login and signup page workflow
- Responsive layout for desktop and mobile screens

## Tech Stack

- HTML5
- CSS3
- Bootstrap
- JavaScript
- Font Awesome

## Project Structure

```text
.
├── about.html
├── booking.html
├── bookings.html
├── cars.html
├── confirmation.html
├── home.html
├── locations.html
├── login.html
├── offer-booking.html
├── offers.html
├── signup.html
├── css/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── style.css
├── images/
├── js/
│   ├── all.min.js
│   ├── bootstrap.bundle.min.js
│   └── drivenow.js
├── webfonts/
└── README.md
```

## Getting Started

Because this is a static website, there is no installation or build step required.

### Option 1: Open directly in the browser

- Open `home.html` in your browser.

### Option 2: Run a local web server

From the project root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/home.html
```

## How It Works

1. Open the home page and search for a car or navigate to the cars page.
2. Select a vehicle and continue to the booking form.
3. Enter your booking information and confirm the reservation.
4. Your booking is saved in the browser using localStorage.
5. You can view saved bookings from the My Bookings page.

## Notes

- This project is a front-end demo and does not include a backend, database, or real authentication service.
- Data persistence happens in the browser, so bookings are stored locally on the device used to access the site.


