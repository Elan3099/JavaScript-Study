// Tujuan : memahami implementasi variable dan operator
/*
Rudi bekerja di sebuah klub VIP. Dia ingin mengecek siapa saja yang bisa masuk lounge eksklusif berdasarkan umur dan status VIP mereka. 
Selain itu, dia ingin menghitung beberapa hal untuk persiapan event.
Data diri
Rudi punya nama, umur, dan status VIP.
Ada tiga teman yang datang ke klub: Afika, Dian, dan Budi. Setiap teman juga punya nama, umur, dan status VIP.
Tugas 1: Perkenalan
Tampilkan pesan untuk setiap orang:
"Halo, nama saya ___, umur saya ___ tahun, VIP? ___"
Tugas 2: Umur masa depan
Hitung berapa umur setiap orang 5 tahun ke depan dan buat pesan baru:
"Umur saya 5 tahun lagi: ___"
Tugas 3: Cek VIP Lounge
Aturan masuk lounge:
Harus berumur 18 tahun ke atas
Harus VIP = true
Tampilkan pesan sesuai kondisi:
Jika boleh masuk → "Boleh masuk VIP Lounge"
Jika tidak → "Tidak boleh masuk VIP Lounge"
Tugas 4: Perhitungan tambahan
Hitung jumlah umur semua orang.
Hitung umur masing-masing orang dikalikan 2 lalu dibagi 3.
Tampilkan hasil dengan format yang mudah dibaca.
Tugas 5: Refleksi
Apa yang terjadi jika status VIP seseorang berubah?
Apa yang terjadi jika umur seseorang di bawah 18 tahun?
*/

const nama = ["Afika", "Dian", "Budi"];
let umur = [17, 18, 19];
const status = ["Aktif", "Tidak Aktif", "Aktif"];
let i;

console.log(" \n");
// Tugas 1
console.log("Tugas 1: Perkenalan \n");
for (i = 0; i < 3; i++) {
  console.log(
    `Halo, nama saya ${nama[i]}, umur saya ${umur[i]} tahun, VIP? ${status[i]}`,
  );
}

console.log(" \n");
// Tugas 2
console.log("Tugas 2: Umur Masa Depan \n");
for (i = 0; i < 3; i++) {
  let futureAge = umur[i] + 5;
  console.log(`Umur ${nama[i]} 5 tahun lagi: ${futureAge}`);
}

console.log(" \n");
// Tugas 3
console.log("Tugas 3: Cek VIP Lounge \n");
for (i = 0; i < 3; i++) {
  console.log(`No. ${i + 1}. Nama ${nama[i]} `);
  if (umur[i] >= 18 && status[i] == "Aktif") {
    console.log(`Boleh masuk VIP lounge`);
  } else {
    console.log(`Tidak Boleh masuk VIP lounge`);
  }
}

console.log(" \n");
// Tugas 4
console.log("Tugas 4: Perhitungan tambahan \n");

for (i = 0; i < 3; i++) {
  let hasil = (umur[i] * 2) / 3;
  umur[i] = hasil.toFixed(2);
  console.log(`Nama ${nama[i]}, hasil perhitungan umur ${umur[i]}`);
}

console.log(" \n");

// Tugas 5 : Refleksi
/*
Apa yang terjadi jika status VIP seseorang berubah?
tidak dapat masuk ke dalam lounge VIP
Apa yang terjadi jika umur seseorang di bawah 18 tahun?
tidak dapat masuk ke dalam lounge VIP
*/
