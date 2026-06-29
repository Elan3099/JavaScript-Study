/*
📝 Mini Project Expert – Event Ticket Validation
Cerita Realistis:

Kamu bekerja di tim IT perusahaan Event Organizer. Sistem ingin mengecek peserta yang mendaftar untuk sebuah konser VIP online.

Skenario Nyata:

Sebelum konser dimulai, admin meng-upload daftar peserta:
Nama peserta
Umur peserta
Tiket yang dibeli (tipe dan harga)

Sistem harus:
Menghitung rata-rata umur peserta
Menentukan peserta VIP (umur ≥ 18 dan harga tiket ≥ 500000)
Menampilkan daftar VIP peserta
Beberapa peserta baru bisa ditambahkan sebelum event, misal yang mendaftar menit terakhir.
Karena data diambil dari server, setiap proses async harus menunggu 2 detik (simulasi network / pemrosesan).
Setelah semua proses selesai, sistem harus memanggil callback yang menampilkan:
"Proses Validasi Peserta Selesai"

Tugas:
Buat array peserta awal → object { name, age, ticket: { type, price } }
Fungsi untuk menghitung rata-rata umur peserta
Gunakan destructuring + reduce
Tambahkan peserta baru menggunakan Spread Operator
Filter peserta VIP menggunakan filter + map → tampilkan nama peserta VIP
Tambahkan delay 2 detik sebelum menampilkan:
Rata-rata umur peserta
Daftar peserta VIP
Panggil callback setelah semua proses selesai
*/

const arrayPeserta = [
  { name: "Budi", age: 18, ticket: { type: "Basic", price: 300000 } },
  { name: "Crisian", age: 20, ticket: { type: "Basic", price: 800000 } },
  { name: "Maya", age: 19, ticket: { type: "Basic", price: 100000 } },
  { name: "Jojon", age: 22, ticket: { type: "Basic", price: 500000 } },
];

const newPeserta = [
  { name: "Mina", age: 18, ticket: { type: "Basic", price: 150000 } },
  { name: "Loli", age: 19, ticket: { type: "Basic", price: 400000 } },
  { name: "Mako", age: 20, ticket: { type: "Basic", price: 700000 } },
];

//average umur
const avgUmur = (array) => {
  let totalUmur = array.reduce((acc, { age }) => acc + age, 0);
  return totalUmur / array.length;
};

//vip checking
const vipChecking = (array) => {
  let getStatus = array.filter(
    ({ age, ticket: { price } }) => age >= 18 && price >= 500000,
  );
  let printStatus = getStatus.map((n) => n.name);
  return printStatus;
};

//Peserta baru
let listPeserta = [...arrayPeserta, ...newPeserta];

function prosesChecking(array) {
  let vipList = vipChecking(array);

  let listNotVIP = array.filter(({ name }) => !vipList.includes(name));
  let show = listNotVIP.map((n) => n.name);

  return new Promise((resolve, reject) => {
    if (vipList.length > 0) {
      resolve({ listVIP: vipList, nonVIP: show });
    } else {
      reject({ err: "Tidak Ada Data VIP" });
    }
  });
}

//callback
function calls() {
  console.log("Proses Checking Selesai");
}

// delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// prosesChecking(listPeserta)
//   .then(({ listVIP, nonVIP }) => {
//     console.log("Data VIP : \n", listVIP.join(","), "\n");
//     console.log("Data Non VIP :", nonVIP.join(","), "\n");
//   })
//   .catch((err) => console.log(err));

async function asyncCheckTicket(peserta, array, callback) {
  console.log("Mulai Checking...");
  let finallist = [...peserta, ...listPeserta];
  await delay(2000);
  let ratarata = await avgUmur(finallist);
  console.log("Rata-rata umur peserta : ", ratarata.toFixed(2));
  try {
    let { listVIP, nonVIP } = await prosesChecking(finallist);
    console.log("Daftar Peserta VIP :", listVIP.join(","));
    console.log("Daftar Peserta Non VIP :", nonVIP.join(","));
  } catch (err) {
    console.log(err);
  }
  callback();
}

const new2 = [
  { name: "Lowdw", age: 22, ticket: { type: "Basic", price: 400000 } },
  { name: "dwwd", age: 20, ticket: { type: "Basic", price: 700000 } },
];

const new3 = [
  { name: "Lowewfwedw", age: 27, ticket: { type: "Basic", price: 800000 } },
  { name: "ewfef", age: 20, ticket: { type: "Basic", price: 700000 } },
  { name: "Lowwefwefdw", age: 25, ticket: { type: "Basic", price: 300000 } },
  { name: "dwwfeqwd", age: 29, ticket: { type: "Basic", price: 700000 } },
];

asyncCheckTicket(new2, listPeserta, calls);
asyncCheckTicket(new3, listPeserta, calls);
