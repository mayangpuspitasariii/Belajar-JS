// let namaGuru = ['Jodi', 'bunga', 'rehan'];
// namaGuru.push('Mayang', 'Dhea') // Nambahkan Array
// namaGuru.shift() // menghapus yang awal
// namaGuru.pop() // Menghapus yang akhir
// alert(namaGuru)

// let namaGuru= []

// namaGuru[0] = 'Mayang';
// namaGuru[1] = 'Dhea';

// alert(namaGuru)

// const namaGuru = ['Dhea', 'Fikri', 'Bunga']

// for (let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }
// let i = 0
// while (i < 10) {
//     i++;
//     console.log('Mayang')

// }

// do {
//     i++
//     console.log('May')
// } while (i<10)

// let tabungan = parseInt(prompt('Masukan Jumlah yang ingin di Tabung '))
// let saldoAwal = 50000;
// let saldoAkhir = tabungan + saldoAwal;

// alert(`Anda baru saja memasukan tabungan sejumlah Rp.${tabungan} sedangkan saldo awal kamu yaitu Rp.${saldoAwal} sehingga saldo akhir kamu Rp${saldoAkhir}`)

let hari = new Date().getDay();
let namaHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
alert(`Hari Ini adalah Hari ${namaHari[hari]}`)
