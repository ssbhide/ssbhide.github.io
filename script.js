document.addEventListener("DOMContentLoaded", () => {
  // —— Your existing smooth-scroll code ——
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // —— New flicker-intro code ——
  const titles = [
    "Software Engineer",
    "Student",
    "Athlete",
    // …add more as you like
  ];
  let idx = 0;
  const flickerEl = document.getElementById("flicker-text");

  function tick() {
    // fade out
    flickerEl.classList.add("fade-out");
    setTimeout(() => {
      // swap text, fade back in
      flickerEl.textContent = titles[idx];
      flickerEl.classList.remove("fade-out");
      idx = (idx + 1) % titles.length;
    }, 500); // must match your CSS transition duration
  }

  // kick it off
  tick();
  setInterval(tick, 3000); // change every 3s
});
