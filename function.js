/*1. Membuat perhitungan Mtematika
  -Luas Lingkaran
  -Luas Segitiga
  -Luas Persegi Panjang
  -Luas Jajargenjang
**/

//Luas Lingkaran
const luasLingkaran = (r) => {
  return lk = 3.14 * r * r;
}

//Luas Segitiga
const luasSegitiga = (alas,tinggi) => {
  return 0.5 * alas * tinggi;
}

//luas Persegi Panjang
const luasPersegiPanjang = (panjang,lebar) => {
  return panjang * lebar;
}

//luas Jajargenjang
const luasJajargenjang = (alas,tinggi) => {
  return alas*tinggi;
}

console.log(`ini adalah luas Lingkaran ${luasLingkaran(17)}`);
console.log(`ini adalah luas segitiga ${luasSegitiga(7,8)}`)
console.log(`ini adalah luas persegi panjang ${luasPersegiPanjang(7,10)}`)
console.log(`ini adalah luas jajargenjang ${luasJajargenjang(12,6)}`)

// //Menghitung total gaji yang didapat dalam satu bulan dengan input minimal :
//   -nama karyawan
//   -gaji perhari
//   -jumlah hari masuk kerja

const gajiKaryawan = (nama,gaji,jumlahHari) => {
  const hitungGaji = gaji*jumlahHari;
  console.log('Nama Karyawan :', nama)
  console.log('Gaji Perhari adalah Rp.100.000')
  console.log('Total Gaji = ', hitungGaji)
}

gajiKaryawan("Mayang", 100000,24)

