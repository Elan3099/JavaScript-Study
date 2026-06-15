/*
1. Diskon Belanja

Rudi membeli sepatu seharga 500000. Toko memberi diskon 20%.

Buat program untuk menghitung:

besar diskon
total yang harus dibayar

Output contoh:

Diskon: 100000
Total bayar: 400000
*/

{
    console.log("Soal 1")
    console.log("\n")
    const barang = 500000
    let diskon = 20

    let getDiskon = barang * (diskon/100)
    let totalBayar = barang - getDiskon

    console.log(`
        Diskon: ${getDiskon}
        Total Bayar: ${totalBayar}
        `)
}

/*
2. Cek Umur Masuk Bioskop
Seseorang boleh menonton film jika umurnya minimal 17.

Buat variabel:

let nama = "Budi"
let umur = 16

Gunakan comparison operator dan ternary operator untuk menampilkan:
Budi belum boleh menonton
atau
Budi boleh menonton
*/
  console.log("\n")
  console.log("Soal 2")
  console.log("\n")
{
    let umur = 16
    let nama = "Budi"

    let status = umur >= 17 ? `${nama} boleh menonton` : `${nama} Tidak boleh menonton`

    console.log(status)
}

/*
3. Saldo Cukup atau Tidak

Afika punya saldo 150000. Dia ingin membeli tas seharga 175000.

Buat program untuk mengecek apakah saldo cukup.
Output:

Saldo tidak cukup
atau
Saldo cukup
*/

  console.log("\n")
  console.log("Soal 3")
  console.log("\n")
{
let saldo = 150000
let tas = 175000

let StatusSaldo = saldo >= tas ? 'Saldo Cukup' : 'Saldo Tidak Cukup'

console.log(StatusSaldo)
}

/*
4. Login Aplikasi

User hanya boleh login jika:

username benar
password benar

Data yang benar:

let usernameBenar = "admin"
let passwordBenar = "12345"

Input user:

let usernameInput = "admin"
let passwordInput = "12345"

Gunakan logical operator &&.
*/

 console.log("\n")
  console.log("Soal 4")
  console.log("\n")
{
    let usernameBenar = "admin"
    let passwordBenar = "12345"

    let usernameInput = "admin"
    let passwordInput = "12345"

    if(usernameInput === usernameBenar && passwordInput === passwordBenar){
        console.log("Anda berhasil login")
    }else{
         console.log("Anda gagal login")
    }
}

/*
5. Cek Member VIP

Seseorang mendapat diskon jika dia adalah member VIP atau total belanjanya lebih dari 500000.

Data:

let nama = "Afika"
let isVIP = false
let totalBelanja = 600000

Gunakan logical operator ||.

Output:

Afika mendapat diskon
atau
Afika tidak mendapat diskon
*/
console.log("\n")
console.log("Soal 5")
console.log("\n")

{
    let nama = "Afika"
    let isVIP = false
    let totalBelanja = 600000

    if(totalBelanja >= 500000 || isVIP === true){
       console.log("Afika mendapat diskon") 
    }else{
        console.log("Afika tidak mendapat diskon") 
    }
}

/*
6. Tambah Poin Game
Budi sedang bermain game.

Poin awal:
let point = 10

Setiap menang, point bertambah 1.

Gunakan operator:
point++

Simulasikan Budi menang 3 kali.
Output:
Point akhir: 13
*/
console.log("\n")
console.log("Soal 6")
console.log("\n")
{
    let point = 10
    let win = 3

    for(let i = 1 ; i <= win ; i++){
        point++
    }
   console.log(point)
}

/*
7. Perhitungan Gaji Karyawan

Seorang karyawan memiliki gaji pokok 5000000.

Dia mendapat:
bonus 10% dari gaji pokok
potongan pajak 5% dari gaji pokok

Hitung:
bonus
pajak
total gaji bersih

Output contoh:

Bonus: 500000
Pajak: 250000
Gaji bersih: 5250000
*/
console.log("\n")
console.log("Soal 7")
console.log("\n")
{
    let gajiPokok = 5000000
    let bonus = 10
    let pajak = 5

    let totalBonus = gajiPokok * (bonus/100)
    let totalPajak = gajiPokok * (pajak/100)

    let totalGajiBersih = gajiPokok - totalPajak + totalBonus
    console.log(`Bonus: ${totalBonus}
Pajak: ${totalPajak}
Gaji Bersih: ${totalGajiBersih}`)
}