/*
Buat program untuk menentukan apakah seseorang “Lulus” atau “Tidak Lulus” berdasarkan nilai.
Refleksi: apa yang terjadi jika else dihapus? (Coba hapus dan lihat outputnya)
- kosong
*/

let nilai = 55;

if (nilai >= 80) {
  console.log(`Selamat Anda Lulus Test, Nilai Kamu ${nilai}`);
} else if (nilai < 80 && nilai > 70) {
  console.log(`Anda Berhak melakukan test ulang, Nilai Kamu ${nilai}`);
} else {
  console.log(`Maaf kamu Tidak Lulus, Nilai Kamu ${nilai}`);
}
