/*
Mini Project – Hitung Rata-rata Array
Cerita:

Di sebuah kelas Virtual Coding, guru ingin mengetahui rata-rata nilai murid untuk mengevaluasi performa kelas.

Ada sebuah array yang menyimpan nilai murid, misal [70, 80, 90, 60].
Guru ingin membuat fungsi yang menerima array nilai sebagai input dan mengembalikan rata-rata.
Fungsi harus menggunakan metode array jika perlu (misal untuk menjumlahkan semua elemen).
Setelah fungsi dibuat, guru ingin menampilkan hasil rata-rata di console.
Tugas:
Buat function untuk menghitung rata-rata array nilai.
Gunakan parameter function untuk input array.
Cetak hasil rata-rata ke console.
Refleksi: apa yang terjadi jika array kosong?
*/
//2. Arrow Function

console.log("\n");
console.log("Soal 1");
console.log("\n");

const nilai = [70, 80, 90, 60];

const func = {
  total: (nilaiparam) => nilaiparam.reduce((acc, n) => acc + n, 0),
  avg: (total) => total / nilai.length,
};

let total = func.total(nilai);
console.log(func.avg(total));
