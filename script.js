// scripts.js
//js for dowload app 
document.getElementById('download-app').addEventListener('click', () => {
    alert('The app will be available for download soon!');
});
document.getElementById('sign-in-button').addEventListener('click', function() {
    const signInForm = document.getElementById('sign-in');
    if (signInForm.style.display === 'none' || signInForm.style.display === '') {
        signInForm.style.display = 'block';
    } else {
        signInForm.style.display = 'none';
    }
});
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const reEnterPassword = document.getElementById('re-enter-password').value;

    if (password !== reEnterPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert(`you are registered as ${username}`);

    // Reset the form inputs and close the form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('re-enter-password').value = '';
    document.getElementById('sign-in').style.display = 'none';

});

//js for book now 
document.getElementById('book-now').addEventListener('click', function() {
    document.getElementById('dailyride').classList.toggle('hidden');
    document.getElementById('outstation').classList.toggle('hidden');
});

//js for daily ride button
document.getElementById('dailyride').addEventListener('click', function() {
    document.getElementById('ride-form').classList.toggle('hidden');
});

//js for ride form submission
document.getElementById('ride-form-inner').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the page from refreshing
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropLocation = document.getElementById('drop-location').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    alert(`Finding your ride from ${pickupLocation} to ${dropLocation}`);

    // Display the pickup and drop locations and gender on the screen
    const pickupLocationDisplay = document.createElement('p');
    pickupLocationDisplay.textContent = `Pickup Location: ${pickupLocation}`;
    const dropLocationDisplay = document.createElement('p');
    dropLocationDisplay.textContent = `Drop Location: ${dropLocation}`;
    const genderDisplay = document.createElement('p');
    genderDisplay.textContent = `Gender: ${gender}`;
    document.getElementById('features').appendChild(pickupLocationDisplay);
    document.getElementById('features').appendChild(dropLocationDisplay);
    document.getElementById('features').appendChild(genderDisplay);
});
//js for outstation button
document.getElementById('outstation').addEventListener('click', function() {
    document.getElementById('outstation-form').classList.toggle('hidden');
});


    ///js for outstation form submission
   document.getElementById('outstation-form-inner').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the page from refreshing
    const pickupLocation = document.getElementById('pickup-location-outstation').value;
    const dropLocation = document.getElementById('drop-location-outstation').value;
    const time = document.getElementById('time').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    alert(`Finding your ride from ${pickupLocation} to ${dropLocation} at ${time}`);

    // Display the pickup and drop locations, time, and gender on the screen
    const pickupLocationDisplay = document.createElement('p');
    pickupLocationDisplay.textContent = `Pickup Location: ${pickupLocation}`;
    const dropLocationDisplay = document.createElement('p');
    dropLocationDisplay.textContent = `Drop Location: ${dropLocation}`;
    const timeDisplay = document.createElement('p');
    timeDisplay.textContent = `Time: ${time}`;
    const genderDisplay = document.createElement('p');
    genderDisplay.textContent = `Gender: ${gender}`;
    document.getElementById('features').appendChild(pickupLocationDisplay);
    document.getElementById('features').appendChild(dropLocationDisplay);
    document.getElementById('features').appendChild(timeDisplay);
    document.getElementById('features').appendChild(genderDisplay);
});

//js for refresh button
document.getElementById('refresh').addEventListener('click', function() {
    const displayedElements = document.querySelectorAll('#features p');
    displayedElements.forEach(function(element) {
        element.remove();
    });
});