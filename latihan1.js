const nilaiSiswa = () => {
    let nilai = [80,65,90,70,50,85]

    for (let i = 0; i < nilai.length; i++) { 
        if(nilai[i] >= 70) {
            console.log(`Lulus = ${nilai[i]} `)
        }else{
            console.log(`Tidak Lulus =  ${nilai[i]}`)
        }
   
    }

    let jumlahLulus = 0
    let tidakLulus =0
    let totalNilaiLulus=0
    let nilaiTertinggi = nilai[0]
    for(let i =0; i < nilai.length; i++) {
        if(nilai[i] > nilaiTertinggi) {
            nilaiTertinggi = nilai[i]
            totalNilaiLulus += nilaiTertinggi
            console.log(`Ini Adalah Nilai Tertinggi = ${nilaiTertinggi}`)

        }
    }

}
nilaiSiswa()