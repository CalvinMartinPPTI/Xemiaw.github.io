// // Theme toggle + simpan preferensi
// const key = "xemiaw-theme";
// const btn = document.getElementById("themeToggle");
// const root = document.documentElement;

// function setTheme(mode){
//   if(mode === "light"){
//     root.style.setProperty("--card","#ffffffcc");
//     root.style.setProperty("--text","#1d1d1f");
//     root.style.setProperty("--muted","#4b5563");
//     root.style.setProperty("--btn","#ffffffcc");
//     root.style.setProperty("--btn-hover","#f3f4f6cc");
//     root.style.setProperty("--border","#00000022");
//   }else{
//     root.style.removeProperty("--card");
//     root.style.removeProperty("--text");
//     root.style.removeProperty("--muted");
//     root.style.removeProperty("--btn");
//     root.style.removeProperty("--btn-hover");
//     root.style.removeProperty("--border");
//   }
//   localStorage.setItem(key, mode);
//   btn.textContent = mode === "light" ? "☀️" : "🌙";
// }

// const saved = localStorage.getItem(key);
// if(saved){ setTheme(saved); } else { btn.textContent = "🌙"; }

// btn.addEventListener("click", ()=>{
//   const next = (localStorage.getItem(key) === "light") ? "dark" : "light";
//   setTheme(next);
// });

// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

const stars = document.querySelector(".stars");
for(let i=0; i<40; i++){
  const s = document.createElement("div");
  s.className = "star";
  s.style.top = Math.random() * 100 + "%";
  s.style.left = Math.random() * 100 + "%";
  s.style.animationDuration = (1.5 + Math.random() * 2) + "s";
  stars.appendChild(s);
}


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

  const noteEl = document.getElementById("note");

  function setRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    noteEl.textContent = notes[randomIndex];
  }

  // pertama kali load
  setRandomNote();

  // ganti tiap 5 detik (5000 ms)
  setInterval(setRandomNote, 5000);

