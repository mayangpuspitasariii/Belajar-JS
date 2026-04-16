

// const inputNilai = parseInt(prompt("Masukan Nilai Ujian Kamu : "))
// const cekNilai = (nilai) => {
//     if(nilai >= 90) {
//         return "A"
//     }else if(nilai >=80 ) {
//         return "B"
//     }else if(nilai >=70) {
//         return "C"
//     }else{
//         return "D"
//     }

// }

// const status = (s) => {
//     if (s >= 70){
//      return "Kamu Lulus"
//     }else {
//         return "Kamu Tidak Lulus"
//     }
// }

// const keteranganNilai = (keterangan) => {
//     if (keterangan >= 90) {
//         return "Sangat Baik"
//     }else if (keterangan >=80 ){
//         return " Baik"
//     }else{
//         return keterangan >=70 ? "cukup" : "Kurang"
//     }
// }
// alert(`Nilai = ${inputNilai} dan itu adalah Nilai ${cekNilai(inputNilai)} Status ${status(inputNilai)} dan Keterangan Nilai Kamu ${keteranganNilai(inputNilai)}`)


const angkaGenap = () => {
    let angka= [1,2,3,4,5,6]
    let total =0
    let jumlah = 0
    

    for(let i =0; i < angka.length; i++){
        if(angka[i] % 2 == 0){
            console.log(`Ini adalah Angka Genap = ${angka[i]}`)
            jumlah++
            total += angka[i]

            
        }
    }
    console.log(`Jumlah = ${jumlah}`)
    console.log(`Total = ${total}`)

}

const  produkMahal = () => {
    let harga = [10000, 5000, 20000,7000]
    let hargaMahal = 8000
    let jumlah = 0
    let total = 0

    for (let i = 0; i < harga.length; i++) {
        if(harga[i] > hargaMahal) {
            console.log(`Harga Termahal = ${harga}`)
            total += hargaMahal
            jumlah++

        }
    }
    console.log(`Jumlah = ${jumlah}`)
    console.log(`Total = ${total}`)

}

produkMahal()
angkaGenap()