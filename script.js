// Toggle the visibility of the navbar links on small screens
const navbar = document.getElementById("navbar");
const toggleButton = document.createElement("div");
toggleButton.id = "navbar-toggle";
toggleButton.innerHTML = "&#9776;"; // Hamburger menu icon
document.getElementById("header").prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("show-navbar");
});

// Adjust the layout when the window is resized
window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    const container = document.getElementById("container");

    // Adjust font sizes and other styles based on screen width
    if (screenWidth <= 600) {
        container.style.width = "100%";
        container.style.fontSize = "10px";
    } else {
        container.style.width = "1450px";
        container.style.fontSize = "14px";
    }
});

// Apply initial styles on page load
window.addEventListener("load", () => {
    const screenWidth = window.innerWidth;
    const container = document.getElementById("container");

    if (screenWidth <= 600) {
        container.style.width = "100%";
        container.style.fontSize = "10px";
    } else {
        container.style.width = "1450px";
        container.style.fontSize = "14px";
    }
});

// Hide navbar on page load for small screens
const screenWidth = window.innerWidth;
if (screenWidth <= 600) {
    navbar.style.display = "none";
}

// Close navbar when clicking outside the navbar in small screens
window.addEventListener("click", event => {
    if (
        !navbar.contains(event.target) &&
        !toggleButton.contains(event.target)
    ) {
        if (navbar.classList.contains("show-navbar")) {
            navbar.classList.remove("show-navbar");
        }
    }
});

// Function to animate the count-up
function countUp(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        element.innerHTML = `<b>${current}%</b>`; // Set the current count value in the element
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Execute when the page loads
window.addEventListener("load", () => {
    // Get the stat elements
    const statElements = document.querySelectorAll("#stats #stat");

    // Set the target numbers based on the actual values in the HTML
    const targetNumbers = [98, 25, 1200, 100];

    // Animate each stat element
    statElements.forEach((element, index) => {
        const target = targetNumbers[index];
        countUp(element, 0, target, 2000); // Start counting from 0 to target over 2 seconds
    });
});

// Get the video element
const video = document.getElementById("myVideo");

// Play the video
function playVideo() {
    video.play();
}

// Pause the video
function pauseVideo() {
    video.pause();
}

// Restart the video (rewind to the beginning)
function restartVideo() {
    video.currentTime = 0;
    video.play();
}

// Mute the video
function muteVideo() {
    video.muted = true;
}

// Unmute the video
function unmuteVideo() {
    video.muted = false;
}

// Toggle play/pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Example: Automatically play the video when the page loads
window.addEventListener("load", () => {
    video.play();
});

// Wait for the entire window to load
window.addEventListener("load", () => {
    // Get all elements with the class 'fade-in'
    const elements = document.querySelectorAll(".fade-in");

    // Add the 'fade-in-visible' class to each element
    elements.forEach(element => {
        element.classList.add("fade-in-visible");
    });
});
// Toggle the visibility of the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
document.getElementById("submit").addEventListener("click", function(event) {
    
    var email = document.getElementById("email").value;
    
    if ( !email ||) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});