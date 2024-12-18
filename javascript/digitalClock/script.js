const time = document.getElementById('time');
const timeFormate = document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);
});
const showTime = ()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    timeFormate.innerHTML = hours>12 ? "PM":"AM";
}

// const time = document.getElementById('time');
// const timeFormate = document.getElementById('timeformate');

// document.addEventListener('DOMContentLoaded', () => {
//     setInterval(showTime, 1000);
// });

// const showTime = () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     // Format hours to 12-hour format
//     let period = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12;
//     hours = hours ? hours : 12; // The hour '0' should be '12' for 12 AM

//     // Add leading zero to minutes and seconds if needed
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;

//     // Display time in 12-hour format
//     time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
//     timeFormate.innerHTML = period;
// };
