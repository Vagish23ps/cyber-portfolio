const typed = document.getElementById("typed-text");
const commands = [
  "sudo secure_the_future",
  "python build_security.py",
  "git push origin main",
  "nmap --learn --not_attack",
  "./build_real_world_projects.sh"
];
let commandIndex = 0, charIndex = 0, deleting = false;

function typeCommand() {
  const current = commands[commandIndex];
  typed.textContent = current.slice(0, charIndex);

  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeCommand, 1500);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      commandIndex = (commandIndex + 1) % commands.length;
    }
  }
  setTimeout(typeCommand, deleting ? 35 : 75);
}
typeCommand();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("open"))
);

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
