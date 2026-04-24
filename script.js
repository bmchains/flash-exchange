
const countdown = document.getElementById('countdown');

if(countdown){
const launch = new Date();
launch.setDate(launch.getDate()+10);

setInterval(()=>{
const now = new Date();
const diff = launch - now;

const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor(diff/1000/60/60)%24;
const m = Math.floor(diff/1000/60)%60;

countdown.innerHTML = `Launching in ${d}d ${h}h ${m}m`;
},1000);
}
