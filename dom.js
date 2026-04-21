const dataSiswa = () => {
    const siswa = [
        {nama : "Andi", nilai : 92},
        {nama : "Budi", nilai : 60},
        {nama : "Citra", nilai : 80},
        {nama : "Ega", nilai : 50},
    ]

    const filterData = siswa.filter ((f) => {
        return f.nilai >= 80
    })

    const tampil = filterData.map ((fd) => {
        return `<p>${fd.nama} - Dengan Nilai ${fd.nilai} = Lulus</p>`
    })

    const hasil = document.getElementById("hasil").innerHTML = tampil.join("")

}
dataSiswa()