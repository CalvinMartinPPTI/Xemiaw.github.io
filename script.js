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
    "“everyone have their ”",
    "“stay kind, stay soft”",
    "“trust the process”",
    "“breathe, you’re doing fine”",
    "“chill and grow”",
    "“make today count”"
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
