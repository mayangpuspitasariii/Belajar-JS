let input = document.getElementById("input")
let tambah = document.getElementById("tambah")
let list = document.getElementById("list")

tambah.addEventListener("click", () => {

    let li = document.createElement("li")

    // span untuk teks
    let span = document.createElement("span")
    span.textContent = input.value

    // tombol edit
    let edit = document.createElement("button")
    edit.textContent = "Edit"

    // tombol hapus
    let hapus = document.createElement("button")
    hapus.textContent = "Hapus"

    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(hapus)

    list.appendChild(li)

    // HAPUS
    hapus.addEventListener("click", () => {
        li.remove()
    })

    // EDIT
    edit.addEventListener("click", () => {

        let inputEdit = document.createElement("input")
        inputEdit.value = span.textContent

        let save = document.createElement("button")
        save.textContent = "Save"

        li.replaceChild(inputEdit, span)
        li.insertBefore(save, edit)

        save.addEventListener("click", () => {
            span.textContent = inputEdit.value

            li.replaceChild(span, inputEdit)
            save.remove()
        })

    })

})