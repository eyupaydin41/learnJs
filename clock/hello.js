let name = document.querySelector('#myName');

let nameA = prompt("Lütfen isminizi giriniz: ", "Eyüp");

name.innerHTML = nameA;


function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = daysOfWeek[date.getDay()];

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dayString = `${day}`;

    document.getElementById('myClock').innerText = `${timeString} - ${dayString}`;
}

function startClock() {
    showTime(); // Sayfa yüklendiğinde hemen saati göster
    setInterval(showTime, 1000); // Her saniye saati güncelle
}

window.onload = startClock;