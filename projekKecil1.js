const todoList = () => {
    const todos = [
        {id : 1, text: "Belajar Javascript", selesai : false},
        {id : 2, text: "Belajar React", selesai : false},
        {id : 3, text: "Belajar Node", selesai : true},
        {id : 4, text: "Belajar Next", selesai : false},
    ]

    
   const ubah = todos.map((item) => {
    if(item.selesai === false) {
        return {
            ...item,
            selesai:true
        }
    }
    return item;
   })

   console.log(ubah)
}
document.getElementById("tglBtn").addEventListener("click", todoList)

todoList()
