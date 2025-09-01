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
  "“Choose courage over comfort.”",
  "“The best way out is always through.”",
  "“Doubt kills more dreams than failure ever will.”",
  "“You don’t have to be perfect to be amazing.”",
  "“One day or day one. You decide.”",
  "“Your only limit is your mind.”",
  "“Dream big. Start small. Act now.”",
  "“Don’t watch the clock; do what it does—keep going.”",
  "“Discipline is choosing between what you want now and what you want most.”",
  "“Difficult roads often lead to beautiful destinations.”",
  "“Don’t limit your challenges. Challenge your limits.”",
  "“Progress, not perfection.”",
  "“Hustle in silence, let your success be the noise.”",
  "“Make yourself proud.”",
  "“Little by little, a little becomes a lot.”",
  "“Your potential is endless.”",
  "“Don’t wait for opportunity. Create it.”",
  "“Storms don’t last forever.”",
  "“Push yourself, because no one else is going to do it for you.”",
  "“Work hard in silence, let success make the noise.”",
  "“Small progress is still progress.”",
  "“Believe you can and you’re halfway there.”",
  "“Good things happen to those who hustle.”",
  "“Your dreams don’t work unless you do.”",
  "“Stay patient and trust your journey.”",
  "“Do what you can, with what you have, where you are.”",
  "“Be stronger than your excuses.”",
  "“Focus on being productive instead of busy.”",
  "“Great things never came from comfort zones.”",
  "“Action is the foundational key to all success.”",
  "“Don’t stop when you’re tired. Stop when you’re done.”",
  "“Success is the sum of small efforts repeated day in and day out.”",
  "“Nothing will work unless you do.”",
  "“Your vibe creates your reality.”",
  "“Start where you are. Use what you have. Do what you can.”",
  "“Keep moving forward, even if it’s one step at a time.”"
];

  function setRandomNote() {
    noteEl.classList.add("fade");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * notes.length);
      noteEl.textContent = notes[randomIndex];

      noteEl.classList.remove("fade");
    }, 500); 
  }

  setRandomNote();
  setInterval(setRandomNote, 5000);
});

