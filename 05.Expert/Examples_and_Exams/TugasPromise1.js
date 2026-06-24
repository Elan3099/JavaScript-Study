/*
Tugas:
Buat array of peserta
Setiap peserta adalah object dengan properti:
name → nama peserta
age → umur peserta
ticket → object { type, price }

Function untuk rata-rata umur peserta
Gunakan destructuring untuk mengambil umur
Gunakan reduce untuk menghitung total → bagi dengan jumlah peserta

Tambahkan peserta baru
Buat array baru menggunakan Spread Operator
Tambahkan 2–3 peserta baru

Fungsi bonus umur
Gunakan Rest Operator untuk menerima sisa umur tambahan
Tambahkan umur tambahan ke peserta sesuai urutan array

Tentukan peserta VIP
Kriteria VIP: age ≥ 18 dan ticket.price ≥ 500000
Gunakan filter + map untuk menampilkan nama peserta VIP

Simulasikan asynchronous
Tambahkan delay 2 detik sebelum menampilkan hasil rata-rata dan daftar VIP
Gunakan Promise + delay
Callback

Setelah semua selesai, panggil callback yang menampilkan: "Proses Evaluasi Peserta Selesai"
*/
let namaPeserta = [];
const arrayPeserta = [
  { name: "Muti", age: 18, ticket: { type: "A", price: 10000 } },
  { name: "Maria", age: 17, ticket: { type: "B", price: 4000000 } },
  { name: "Sio", age: 19, ticket: { type: "B", price: 60000 } },
];

const newPeserta = [
  { name: "Murni", age: 16, ticket: { type: "A", price: 50000 } },
  { name: "Mato", age: 17, ticket: { type: "B", price: 40000 } },
  { name: "Siona", age: 18, ticket: { type: "B", price: 600000 } },
];

// average umur
function avgUmur(array) {
  let total = array.reduce((acc, { age }) => acc + age, 0);
  total = total / array.length;
  return total;
}

// Menambahkan peserta baru
let listPeserta = [...arrayPeserta, ...newPeserta];

//fungsi bonus umur
function bonusUmur(...array) {
  array.forEach((umur, i) => {
    listPeserta[i].age += umur;
  });
  return listPeserta;
}

// tentukan peserta VIP
function pesertaVIP(array) {
  let VIP = array.filter(
    ({ age, ticket: { price } }) => age >= 18 && price >= 500000,
  );
  let show = VIP.map((n) => n.name);

  return show;
}

//promise evaluasi

function evaluate(array) {
  return new Promise((resolve, reject) => {
    let getList = pesertaVIP(array);
    let avg = avgUmur(array);
    if (getList.length > 0) {
      resolve({ msg: "ADA VIP", list: getList, avg: avg });
    } else {
      reject(`Tidak Ada Yang Terdaftar Sebagai VIP`);
    }
  });
}

// delay
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const callback = () => {
  console.log("Proses Evaluasi Selesai");
};

bonusUmur(3, 4, 6, 1, 3);

// Tampilkan
evaluate(listPeserta)
  .then(({ msg, list, avg }) =>
    delay(2000).then(() => {
      (console.log("Berhasil :", msg, ", Name :", list.join(", ")),
        console.log("Average Umur :", avg.toFixed(2)));
    }),
  )
  .catch((err) => console.log("Gagal :", err))
  .finally(callback);
