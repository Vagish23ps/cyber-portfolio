const texts = [
    "sudo secure_the_world",
    "python build_security.py",
    "nmap scan --target network",
    "git push origin main",
    "sudo apt update"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 45 : 80);
}

typeEffect();


// Mobile menu

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "75px";
        navLinks.style.right = "5%";
        navLinks.style.padding = "20px";

        navLinks.style.background = "#0b1018";
        navLinks.style.border = "1px solid #1b2635";
        navLinks.style.borderRadius = "8px";
    }

});