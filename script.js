const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.15});

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(18px)';
  revealObserver.observe(el);
});

const style = document.createElement('style');
style.textContent = `.reveal.visible{opacity:1 !important; transform:translateY(0) !important; transition:all .8s ease}`;
document.head.appendChild(style);

function subscribe(e){
  e.preventDefault();
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');
  if(msg){ msg.textContent = `Thanks! ${email.value} will be notified.`; }
  if(email) email.value='';
  return false;
}

function pad(n){ return String(n).padStart(2,'0'); }
const countdown = document.getElementById('countdown');
if(countdown){
  const target = new Date();
  target.setDate(target.getDate() + 68);
  target.setHours(target.getHours() + 20);
  function tick(){
    const diff = Math.max(0, target - new Date());
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `<div><span>${pad(d)}</span><label>Days</label></div><div><span>${pad(h)}</span><label>Hours</label></div><div><span>${pad(m)}</span><label>Minutes</label></div><div><span>${pad(s)}</span><label>Seconds</label></div>`;
  }
  tick(); setInterval(tick, 1000);
}
