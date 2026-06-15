/*
JavaScript Elementary Exam - Soal Cerita

Cerita Utama:
Di sebuah Sekolah Coding Virtual, guru ingin mengecek performa murid dalam mengerjakan tugas, mengikuti kuis, dan mengelola proyek mini. Kamu diminta membuat program untuk membantu guru.

1. Percabangan If-Else
- Setiap murid punya nilai ujian (0–100).
- Aturan:
  - ≥ 80 → "Grade A"
  - ≥ 60 → "Grade B"
  - < 60 → "Grade C"
- Tampilkan pesan: "Nama ___ mendapatkan Grade ___"
Tambahan refleksi:
- Apa yang terjadi jika else dihapus?

2. Switch Case
- Guru ingin menampilkan hari tugas dikumpulkan berdasarkan nomor hari (1–7):
  - 1 → Senin, 2 → Selasa, … 7 → Minggu
- Jika nomor di luar 1–7 → tampilkan "Hari tidak valid"

3. Ternary Operator
- Setiap murid punya umur.
- Buat pesan singkat: "Dewasa" jika umur ≥ 18, "Belum Dewasa" jika < 18
- Coba ubah umur beberapa kali untuk melihat hasilnya

4. For Loop
- Cetak angka ganjil 1–20 dan tandai dengan "Ini angka ganjil"
- Tambahkan logika:
  - Jika habis dibagi 3 → "Fizz"
  - Jika habis dibagi 5 → "Buzz"
  - Jika habis dibagi 3 & 5 → "FizzBuzz"

5. While Loop
- Guru ingin mengecek daftar murid sampai ketemu murid bernama "Dian"
- Cetak setiap nama yang dicek, hentikan loop begitu ketemu "Dian"

6. Do-While Loop
- Guru ingin meminta input password admin untuk mengakses nilai murid
- Password minimal harus ditanyakan sekali, kemudian dicek:
  - Benar → "Akses diterima"
  - Salah → "Password salah, coba lagi"
- Loop sampai password benar

7. Challenge Tambahan – Mini Project FizzBuzz
- Cetak angka 1–50
- Jika angka habis dibagi 3 → print "Fizz"
- Jika angka habis dibagi 5 → print "Buzz"
- Jika habis dibagi 3 & 5 → print "FizzBuzz"

Petunjuk:
1. Gunakan if-else, switch, ternary, for, while, do-while sesuai kondisi masing-masing.
2. Gunakan console.log untuk output.
3. Jangan takut salah, baca error di console → pahami → perbaiki.
4. Bisa pakai array atau variabel untuk menyimpan data murid.

*/

console.log("\n");
console.log("1. Percabangan If-Else");
console.log("\n");
{
  let nilai = 65;
  let nama = "Nurul";
  let grade;
  if (nilai >= 80) {
    grade = "Grade A";
  } else if (nilai >= 60) {
    grade = "Grade B";
  } else {
    grade = "Grade C";
  }

  console.log(`Nama ${nama} mendapatkan Grade ${grade}`);
}

console.log("\n");
console.log("2. Switch Case");
console.log("\n");
{
  let hari = 1;

  switch (hari) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jumat");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      console.log("Hari Tidak Valid");
  }
}

console.log("\n");
console.log("3. Ternary Operator");
console.log("\n");
{
  let umur = 17;
  let keterangan = umur >= 18 ? "Dewasa" : "Belum Dewasa";

  console.log(keterangan);
}

console.log("\n");
console.log("4. For Loop");
console.log("\n");
{
  let status = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        status = "FizzBuzz";
      } else if (i % 3 === 0) {
        status = "Fizz";
      } else if (i % 5 === 0) {
        status = "Buzz";
      } else {
        status = "Ini Angka Ganjil";
      }
      console.log(`${i}. ${status}`);
    }
  }
}

console.log("\n");
console.log("5. While Loop");
console.log("\n");
{
  let arrayNama = ["nunu", "lala", "rufi", "dian", "maya"];
  let i = 0;
  while (i < arrayNama.length) {
    if (arrayNama[i] === "dian") {
      console.log(arrayNama[i]);
      break;
    }
    console.log(arrayNama[i]);
    i++;
  }
}

console.log("\n");
console.log("6. Do-While Loop");
console.log("\n");

{
  let tryPassword = ["nuru", "caca", "nus", "dudung"];
  let i = 0;
  do {
    console.log("Masukkan Password :");
    console.log(tryPassword[i]);
    if (tryPassword[i] === "nus") {
      console.log("Akses diterima");
      break;
    } else {
      console.log("Akses ditolak");
      i++;
    }
  } while (i < tryPassword.length);
}
