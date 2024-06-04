'use strict'

const countdownTime = () => {
    const BirthDay = new Date("August 31 2024    00:00:00").getTime()
    const nowTime = new Date().getTime()
    const gap = BirthDay - nowTime

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    const todayDay = Math.floor(gap / days)

    document.querySelector('.days').innerHTML = todayDay

    const todayHours = Math.floor((gap % days) / hours)
    document.querySelector('.hours').innerHTML = todayHours


    const todayMinutes = Math.floor((gap % hours) / minutes)
    document.querySelector('.minutes').innerHTML = todayMinutes

    const todaySeconds = Math.floor((gap % minutes) / seconds)
    document.querySelector('.seconds').innerHTML = todaySeconds

}

setInterval(() => {
    countdownTime()
}, 1000);

