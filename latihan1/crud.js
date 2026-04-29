let input = document.getElementById("input")
let tambah = document.getElementById("tambah")
let list = document.getElementById("list")

let body = document.body
let dark = document.getElementById("dark")

tambah.addEventListener("click", () => {
    let li = document.createElement("li")

    let span = document.createElement("span")
    span.textContent = input.value

    let edit = document.createElement("button")
    edit.classList.add("edit")
    edit.textContent = "Edit"

    let hapus = document.createElement("button")
    hapus.classList.add("hapus")
    hapus.textContent = "Hapus"

    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(hapus)


   list.appendChild(li) 


//    Hapus
    hapus.addEventListener("click", () => {
        li.remove()
    })

    // edit
    edit.addEventListener("click", () => {
        let inputEdit = document.createElement("input")
        inputEdit.value = span.textContent

        let save = document.createElement("button")
        save.classList.add("save")
        save.textContent = "Save"

        li.replaceChild(inputEdit, span)
        li.insertBefore(save, edit)

        save.addEventListener("click", () => {
            span.textContent = inputEdit.value
            li.replaceChild(span, inputEdit)
            save.remove()
        })
    })

  

    console.log(edit)
})


//kode thema

dark.addEventListener("click", () => {
    if(dark.textContent === "Dark Thema") {
        dark.textContent = "Light Thema"
        body.classList.add("dark")
    } else {
        dark.textContent = "Dark Thema"
        body.classList.remove("dark")
    }

})