
const audio = new Audio("assets/youssef-song.mp3");
audio.loop = true;
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try{
    if(audio.paused){
      await audio.play();
      musicBtn.textContent = "♫";
      musicBtn.classList.add("playing");
    }else{
      audio.pause();
      musicBtn.textContent = "♪";
      musicBtn.classList.remove("playing");
    }
  }catch(e){
    alert("ضيفي الأغنية باسم youssef-song.mp3 داخل فولدر assets ثم اضغطي علامة الموسيقى 🎵");
  }
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
