let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increamentCount() {
    count += 1
    countEl.innerText = count
}