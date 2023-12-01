// JavaScript for Clock
let hrs=document.getElementById("hrs");
let mm=document.getElementById("mm");
let ss=document.getElementById("ss");

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML= (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mm.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    ss.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)

// JavaScript for Calendar
const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");

const today = new Date();
console.log(today);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 

date.innerHTML= (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML= weekday[today.getDay()];
month.innerHTML= monthName[today.getMonth()];
year.innerHTML= today.getFullYear();
