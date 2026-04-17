const updateNilaiSiswa = () => {
    const siswa = [
        {nama : "Mayang", nilai : 80, skill : "React"},
        {nama : "Dilraba", nilai : 90, skill : "Acting"},
        {nama : "Ega", nilai: 60, skill : "Game"}
        
    ]
    const poin = siswa.map ((p) => {
        return {
            ...p,
            nilai: p.nilai+5,
            status : p.nilai >= 70 ? "Lulus" : "Tidak Lulus"
            
        }
    })
    

    console.log(poin)
}

updateNilaiSiswa()

