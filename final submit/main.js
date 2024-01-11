// Real-time Timer
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timerElement.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);

// Form submission
function submitForm() {
    const form = document.getElementById("surveyForm");
    const formData = new FormData(form);

    // Process and handle the form data as needed
    const data = Object.fromEntries(formData);
    const jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.value = JSON.stringify(data, null, 2);
    var mobileInput = document.getElementById('mobile');
    if (mobileInput.value.length !== 10) {
        alert('Mobile number should be 10 digits');
        return;
    }
    var emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        alert('Invalid email address. Please enter a valid email address');
        return;
    }
    var nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        alert('Please fill out the Name field');
        return;
    }
}

