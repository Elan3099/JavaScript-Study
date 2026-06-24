/*
Latihan Cerita:
Buat fungsi calculateSum(a, b, callback)
Fungsi menghitung a + b
Setelah selesai → panggil callback yang menampilkan: “Perhitungan selesai!”

Fokus latihan: memahami urutan eksekusi. Callback dipanggil setelah fungsi utama selesai, bukan bersamaan.
*/
console.log("\n");
console.log("Callback Function");
console.log("\n");
{
  console.log("contoh 1. \n");
  const kalkulator = (a, b, callback) => {
    let result = a + b;
    console.log(result);
    callback();
  };
  const calls = () => console.log("Perhitungan Selesai");

  kalkulator(4, 6, calls);
}
