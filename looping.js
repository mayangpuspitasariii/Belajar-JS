//jumlah++ → menghitung berapa kali loop
//jumlah += i → menjumlahkan nilai i

// const prosesNilai = ()=> {

//     const nilai =[80,65,90,70,50,85]

//     let jumlah = 0;
//     let total = 0;

//     for(let i = 0; i < nilai.length; i++) {

//         if(nilai[i] >= 70) {
//             console.log(`Lulus : ${nilai[i]}`)
//             jumlah++
//             total += nilai[i]
//         }

//     }

//     const rata = total / jumlah;

//     console.log(`Jumlah Lulus : ${jumlah}`)
//     console.log(`Total Nilai : ${total}`)
//     console.log(`Rata-rata : ${rata}`)
// }

// prosesNilai()

// const hitungNilai = () => {
//     let nilai = [80,65,90,70,50,85];
//     let jumlah = 0;
//     let total=0;

//     for(let i = 0; i < nilai.length; i++) {
//         if(nilai[i] < 70){
//             jumlah++
//             total += nilai[i]
//             console.log(`NIlai ${nilai[i]} = Tidak Lulus`)
//         }
//         }
//         const rata = total/jumlah;
//         console.log(jumlah)
//         console.log(total)
//         console.log(rata)
//     }


// hitungNilai()


// const nilaiTertinggi = () => {
//     let nilai = [75,90,82,100,65,88]
//     let tertinggi = nilai[0]

//     for(let i = 0; i < nilai.length; i++){
//         if(nilai[i] > tertinggi) {
//             tertinggi = nilai[i]
//         }

//     }
//     console.log(`Nilai Tertinggi = ${tertinggi}`)
// }

// nilaiTertinggi()

// const donasiTerbesar = () => {
//     let donasi=[50000, 150000,75000,200000,120000]
//     let terbesar=donasi[0]
    
//     for (let i = 0; i < donasi.length; i++){
//         if(donasi[i] > terbesar) {
//             terbesar = donasi[i]
//             index = i
//         }
//     }
//     console.log(`Donasi Terbesar = ${terbesar}`)
//     console.log(`Index = ${index}`)
// }

// donasiTerbesar()



const tampilaknNilai = () => {
    let nilai= [80,65,90,70,50,85]
    let terbesar = nilai[0];
    let total= 0
    
   

    for (let i=0; i < nilai.length; i++) {
        if(nilai [i] > terbesar){
            terbesar = nilai[i]
        }

        total =+ nilai[i]
    }
     let rata = total /nilai.length
     let jumlah = 0

     for(let i =0; i < nilai.length; i++){
        if(nilai [i] > rata){
            console.log(`Di atas rata-rata : ${nilai[i]}`)
            jumlah++
        }
     }
     console.log(`Nilai terbesar : ${terbesar}`)
    console.log(`Rata-rata : ${rata}`)
    console.log(`Jumlah : ${jumlah}`)
}

tampilaknNilai()