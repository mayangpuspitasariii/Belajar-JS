

// const semangka= arraySaya.includes('semangka') // apakah array saya mengandung semangka (include)


// if(semangka) {
//     const posisiSemangka = arraySaya.indexOf('semangka') // posisi array
//     const indesBefore = posisiSemangka - 1
//     const indexAfter = posisiSemangka + 1
//     const before = arraySaya[indesBefore]
//     const after = arraySaya[indexAfter]
//     console.log(`posisi sebelum semangka adala ${before} dan sesudah buah semangka adla ${after}`)
//     console.log(`buah semangka itu ada di posisi ${posisiSemangka}`)
//     const buahAwal = arraySaya.shift()
//     console.log(`buah awal adalah ${buahAwal}`)
//     const buahAkhir = arraySaya.pop()
//     console.log(`buah akhir adlah buah ${buahAkhir}`)
// }else{
//     console.log('Saya Tidak Tau')
// }

// const arraySaya = ['jeruk', 'semangka', 'jambu', 'rambutan','alpukat'];
// const newArraySaya = [...arraySaya]

// newArraySaya [0] = 'salah'

// console.log(arraySaya);
// console.log(newArraySaya);

// const arraySaya = ['jeruk', 'semangka', 'jambu', {
//     tomato: function () {
//     console.log('ini tomat')
// },}, ['eat', 'food']];

// arraySaya[3].tomato()


// const arraySaya = ['jeruk', 'semangka', 'jambu', 'rambutan','alpukat'];
// const arrayKamu = ['j', 's', 'r','al'];

// const mergeArray = arraySaya.concat(arrayKamu) //gabungkan array

// for(list of mergeArray) console.log(list) //list array

const datas = [
    {
        name: 'Mayang',
        stack: 'React',
        age:24
    },
    {
        name: 'Puspita',
        stack: 'PHP',
        age:27
    },
    {
        name: 'Dilraba',
        stack: 'Next.js',
        age:32
    },
    {
        name: 'Yuan',
        stack: 'Javasxript',
        age:35
    },
]

datas.sort((a, b) => a.age - b.age).map((values) => console.log(values)) //menampilkan berdasarkan usia dari kevcil ke besar

//sort,filter,map

