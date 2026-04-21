// 



// const map = () => {
//     const angka = [1,2,3,4,5];

//     const hasil = angka.map ((a) => {
//         if (a % 2 === 0 ) {
//             return a * 2
//         }

//          return a
//     })
//  console.log(hasil)
   
// }
// map()


// const angka = [1,2,3,4,5]

// const hasil = angka.map ((a) => {
//     if (a > 3) {
//         return a + 10
//     }
// return a

// }) 

// console.log(hasil)



// const nilaiSiswa = () => {
//     const siswa = [
//         {nama : "Andi", nilai : 85},
//         {nama : "Budi", nilai : 72},
//         {nama : "Citra", nilai : 60}
//     ]

//     const keteranganSiswa = siswa.map ((k) => {
//         let keterangan;

//         if (k.nilai >= 80) {
//             keterangan = "Bagus"
//         } else if (k.nilai >= 70) {
//             keterangan = "Cukup"
//         }else {
//             keterangan = "Kurang"
//         }

//         return {
//             ...k,
//             keterangan : keterangan
//         }

//     })

//      console.log(keteranganSiswa)
// }

// nilaiSiswa()


const dataSiswa = () => {
    const siswa = [
        {nama : "Andi", nilai : 92},
        {nama : "Budi", nilai : 80},
        {nama : "Citra", nilai : 60}
    ]

    const filterData = siswa.filter((f) => {
        return f.nilai < 80
    })

    const data = filterData.map((s) => {
        let status
        let bonus
        let nilaiAkhir
        let kategori
        if (s.nilai >= 90) {
            status = "Excellent",
            bonus = 10
            nilaiAkhir = s.nilai + bonus
            kategori = "Super"
        } else if (s.nilai >= 75) {
            status = "Lulus",
            bonus = 5,
            nilaiAkhir = s.nilai + bonus
            kategori = "Baik"
        } else {
            status = "Tidak Lulus",
            bonus = 0,
            nilaiAkhir = s.nilai + bonus
            kategori = "Perlu Belajar"
        }

        return {
            ...s,
            status : status,
            bonus : bonus,
            nilaiAkhir : nilaiAkhir,
            kategori : kategori
        }
    })

 
    console.log(data)
}

dataSiswa()

