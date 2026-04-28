let dark = document.getElementById("dark")
let mode = document.getElementById("mode")
let red =document.getElementById("red")
let tambah = document.getElementById("tambah")
let kurang = document.getElementById("kurang")
let bagi = document.getElementById("bagi")
let kali = document.getElementById("kali")
let inputSatu = document.getElementById("input-satu")
let inputDua = document.getElementById("inputDua")
let inputHasil = document.getElementById("inputHasil")

let body = document.body

dark.addEventListener("click", () => {
    body.classList.remove("red")
    if(mode.textContent === "Light Mode") {
        mode.textContent = "Dark Mode"
        dark.textContent = "Light Mode"
        body.classList.add("dark")
    }else {
        mode.textContent = "Light Mode"
        dark.textContent = "Dark Mode"
        body.classList.remove("dark")
    }

})

red.addEventListener("click", () => {
    body.classList.remove("dark")
    if(body.classList.contains("red")) {
        body.classList.remove("red")
        red.textContent = "Red Mode"
        mode.textContent = "Light Mode"
    }else {
        body.classList.add("red")
        mode.textContent = "Red Mode"
        red.textContent = "Light Mode"
    }
})

tambah.addEventListener("click", () => {
    
})

