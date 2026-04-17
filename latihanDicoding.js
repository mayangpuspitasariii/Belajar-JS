const siswaLulus = () => {
    let nilai =[80,65,90,70,50,85]
    let urut = nilai.sort((a,b) => b-a)
    let jumlah = 0
    let total = 0
    let lulus = nilai.filter((n => n >= 70))

    const nilaiSiswa =lulus.map((n) => {
        if(n >= 70 ) {
            jumlah++
            total += n
            return `Nilai ${n} : Lulus`
        }
        
    })
    let rata = total/jumlah
    console.log(nilaiSiswa)
    console.log(`Total Nilai Lulus : ${total}`)
    console.log(`Jumlah Yang Lulus ; ${jumlah}`)
    console.log(`Jumlah Rata-Rata ; ${rata}`)
}

siswaLulus()

