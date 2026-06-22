/*
Tugas:
Buat array of books
Setiap buku adalah object dengan properti:
title → judul buku
pages → jumlah halaman
author → nama penulis

Function untuk rata-rata halama
Buat fungsi yang menerima array books dan mengembalikan rata-rata halaman.
Gunakan destructuring untuk mengambil properti pages.
Gunakan reduce untuk menjumlahkan halaman.

Tambahkan buku baru
Buat array baru yang menambahkan buku baru menggunakan Spread Operator.
Tambahkan bonus halaman
Buat fungsi yang menerima sisa halaman tambahan menggunakan Rest Operator dan menambahkan ke setiap buku sesuai urutan.

Filter buku highlight
Tentukan buku highlight: pages ≥ 300
Tampilkan judul buku highlight menggunakan map.

Cetak hasil
Tampilkan rata-rata awal
Daftar buku setelah ditambah buku baru
Daftar buku setelah bonus halaman
Daftar buku highlight

Catatan:
Gunakan semua konsep Advanced:
Object / Nested Object
Destructuring
Spread Operator
Rest Operator
Array Methods (reduce, filter, map)
Jangan menyalin kode sebelumnya, buat dari cerita ini
Format output rapi supaya mudah dibaca
*/

let arrayBook = [
  { title: "Judul1", pages: 538, author: "Dina" },
  { title: "Judul2", pages: 139, author: "Udian" },
  { title: "Judul3", pages: 348, author: "Unsi" },
  { title: "Judul4", pages: 146, author: "Hudin" },
];

let arrayNewBook = [
  { title: "Judul5", pages: 444, author: "Dina" },
  { title: "Judul6", pages: 490, author: "Udian" },
];

// function pages average
function avgPages(arraybook) {
  let total = arraybook.reduce((acc, { pages }) => acc + pages, 0);
  return total / arraybook.length;
}

// function add new book
let newBookList = [...arrayBook, ...arrayNewBook];

function bonusPage(...arrayBonus) {
  arrayBonus.forEach((pages, i) => {
    newBookList[i].pages += pages;
  });
  return newBookList;
}

// show book highlight
function highlight(arrayB) {
  let filterResult = arrayB.filter(({ pages }) => pages >= 300);
  let showHihglight = filterResult.map((n) => n.title);
  return showHihglight;
}

// Print result

console.log("Rata-rata Pages Awal : ", avgPages(newBookList).toFixed(2));
console.log("Daftar Buku Setelah Tambah Buku Baru : ", newBookList);
bonusP = bonusPage(19, 25, 30, 40, 10);
console.log("Rata-rata Pages Baru : ", avgPages(newBookList).toFixed(2));
console.log("Daftar Buku Setelah Bonus Halaman : ", bonusP);
console.log("Daftar Buku Highlight : ", highlight(newBookList));
