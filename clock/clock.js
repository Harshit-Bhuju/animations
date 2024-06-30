const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')

let monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = ('0' + today.getHours()).slice(-2); 
    let min = ('0' + today.getMinutes()).slice(-2);
    let sec = today.getSeconds()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.innerHTML = h
    minute.innerHTML = min
    second.innerHTML = sec
},1000);