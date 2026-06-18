/*
1️⃣ Function Declaration
Buat fungsi biasa bernama sum yang menerima dua parameter angka dan mengembalikan hasil penjumlahan.
Panggil fungsi ini dengan beberapa angka berbeda dan tampilkan hasilnya.
*/
console.log("\n");
console.log("Soal 1");
console.log("\n");

{
  function sum(ang1, angk2) {
    return ang1 + angk2;
  }

  console.log(
    `4 + 5 = ${sum(4, 5)}
7 + 9 = ${sum(7, 9)}
`,
  );
}

/*
2️⃣ Arrow Function
Ubah fungsi sum menjadi arrow function.
Buat fungsi tambahan greetArrow yang menerima nama murid dan mengembalikan string "Hello <nama>".
Panggil fungsi dengan beberapa nama murid dan tampilkan hasil.
*/

console.log("\n");
console.log("Soal 2");
console.log("\n");

{
  const sum = (angk1, angk2) => angk1 + angk2;

  console.log(`
4 + 5 = ${sum(4, 5)}
7 + 9 = ${sum(7, 9)}       
        `);
}
/*
3️⃣ Function dengan Default Parameter
Buat fungsi power(base, exp=2) → menghitung pangkat base^exp.
Panggil fungsi dengan hanya base, dan juga dengan base dan exp, tampilkan hasil.
*/
console.log("\n");
console.log("Soal 3");
console.log("\n");
{
  const power = (base, exp = 2) => base ** exp;

  console.log(`
4 ^ 2 = ${power(4)}
5 ^ 6 = ${power(5, 6)}        
        `);
}

/*
4️⃣ Array Dasar
Buat array nilaiMurid → [70, 80, 90, 60]
Tambahkan nilai baru ke array, hapus nilai terakhir
Cetak seluruh elemen array di console
*/
console.log("\n");
console.log("Soal 4");
console.log("\n");
{
  const nilaiMurid = [70, 80, 90, 60];

  nilaiMurid.push(90);
  nilaiMurid.pop();

  console.log(nilaiMurid);
}

/*
5️⃣ Array Methods
Dari array nilaiMurid:
Gunakan map untuk kalikan semua nilai dengan 2
Gunakan filter untuk ambil nilai > 100
Gunakan reduce untuk jumlahkan semua elemen
Cetak setiap hasilnya di console
*/
console.log("\n");
console.log("Soal 5");
console.log("\n");
{
  const nilaiMurid = [70, 80, 90, 60];

  let map = nilaiMurid.map((n) => n * 2);
  let atas = map.filter((n) => n > 100);
  let reduce = atas.reduce((acc, n) => acc + n, 0);
  console.log("MAP :" + atas);
  console.log("FILTER :" + atas);
  console.log("REDUCE :" + reduce);
}
/*
6️⃣ Nested Array
Buat nested array 3x3 untuk menyimpan angka 1–9
Ambil nilai tengah dan cetak
Ubah pojok kanan bawah menjadi 0, cetak array baru
*/
console.log("\n");
console.log("Soal 6");
console.log("\n");

{
  const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  nestedArray[2][2] = 0;
  console.log(`
    Ambil angka tengah : ${nestedArray[1][1]}    
    Cetak semua array : ${nestedArray}
        `);
}

/*
7️⃣ Mini Project – Rata-rata
Buat fungsi average(numbers) untuk menghitung rata-rata array nilai
Gunakan array [70, 80, 90, 60]
Cetak hasil rata-rata di console
*/
console.log("\n");
console.log("Soal 7");
console.log("\n");
{
  const arraynNilai = [70, 80, 90, 60];

  let total = arraynNilai.reduce((acc, n) => acc + n, 0);
  const avgNilai = (nilai) => nilai / arraynNilai.length;

  console.log("Rata-ratanya adalah :" + avgNilai(total));
}
