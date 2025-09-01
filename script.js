document.addEventListener("DOMContentLoaded", () => {
  // Tahun di footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Bintang random
  const stars = document.querySelector(".stars");
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    stars.appendChild(s);
  }
  
document.addEventListener("DOMContentLoaded", () => {
  const noteEl = document.getElementById("note");

  const notes = [
    "“Keep going, you’re closer than you think.”",
    "“Small steps every day lead to big changes.”",
    "“Breathe. Relax. You’ve got this.”",
    "“Focus on progress, not perfection.”",
    "“Your future self will thank you.”",
    "“Don’t be afraid to start again.”",
    "“Consistency beats motivation.”",
    "“Dare to dream, then do it.”",
    "“Fall seven times, stand up eight.”",
    "“Better an oops than a what if.”",
    "“Believe in yourself a little more.”",
    "“Your vibe attracts your tribe.”",
    "“Do something today your future self will thank you for.”",
    "“Great things take time—be patient.”",
    "“Choose courage over comfort.”"
  ];

  function setRandomNote() {
    // kasih efek fade out
    noteEl.classList.add("fade");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * notes.length);
      noteEl.textContent = notes[randomIndex];

      // fade in lagi
      noteEl.classList.remove("fade");
    }, 500); // harus sama dengan durasi transition di CSS
  }

  setRandomNote();
  setInterval(setRandomNote, 5000);
});
