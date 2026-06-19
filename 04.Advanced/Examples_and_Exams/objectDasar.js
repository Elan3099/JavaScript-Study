/*
Buat objek car dengan properti:
brand → nama merek mobil
year → tahun produksi
color → warna mobil
Tampilkan semua properti di console
*/

console.log("\n");
console.log("1. Object Dasar");
console.log("\n");

{
  let merkMobil = {
    brand: "Toyota",
    year: "2000",
    color: "Yellow",
  };

  console.log(`
    Brand Mobil : ${merkMobil.brand},
    Tahun Keluar : ${merkMobil.year},
    Warna Mobil : ${merkMobil.color}
    `);
}

/*
Buat objek school dengan properti:
name → nama sekolah
student → nested object yang berisi:
name → nama murid
grade → kelas murid
Cetak nama sekolah di console.
Cetak nama murid dan kelas menggunakan dot notation bertingkat.
Tambahkan properti baru di nested object student:
isVIP → boolean (true atau false)
Ubah nilai properti grade dari murid menjadi kelas baru, lalu cetak seluruh nested object.
*/

console.log("\n");
console.log("2. Nested Object");
console.log("\n");

{
  let school = {
    namaSekolah: "SMA N 1 HARAPAN",
    student: {
      nama: "LILIS",
      grade: "11",
      isVIP: true,
    },
  };

  console.log(`
        Nama Sekolah : ${school.namaSekolah},
        Identitas Siswa :
                Nama : ${school.student.nama}
                grade : ${school.student.grade}
                Status : ${school.student.isVIP === true ? "VIP" : "NOT VIP"}
        `);
}

/*
Gunakan object car { brand, year, color }
Ambil properti brand dan year menggunakan destructuring
Cetak kedua variabel di console
*/
console.log("\n");
console.log("3. Destructuring Object");
console.log("\n");

{
  let car = {
    brand: "Toyota",
    year: "2020",
    color: "Blue",
    price: {
      total: 40000,
    },
  };

  let {
    brand: merk,
    year: tahun,
    color: warna,
    price: { total: harga },
  } = car;

  console.log(`
      Brand : ${merk}
      Year : ${tahun}
      Color : ${warna}  
      Price : ${harga}
        `);
}

/*
Contoh SPREAD DAN REST OPERATOR
*/
console.log("\n");
console.log("4. Spread Operator dan Rest Operator");
console.log("\n");
{
  //buat array baru
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  // Spread Operator
  let array3 = [...array1, ...array2, 9, 9];
  // Rest Operator
  const mutiple = (angka) => angka.map((n) => n * 3);
  const total = (angka) => angka.reduce((acc, n) => acc + n, 0);
  console.log(array3);
  console.log(mutiple(array3));
  console.log(total(array3));
}
