//---CRONOMETRU CONCURS---
var countdown = () => {
    const countDate = new Date('June 25, 2021 11:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    //
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    console.log(gap);

    if(gap < 10){
        document.querySelector('.day').innerText = 0;
        document.querySelector('.hour').innerText = 0;
        document.querySelector('.minute').innerText = 0;
        document.querySelector('.second').innerText = 0;

        document.getElementById('mesaj').innerText = "Concursul a luat sfârșit!";

        clearInterval(a);
    }
};

let a = setInterval(countdown, 1000);