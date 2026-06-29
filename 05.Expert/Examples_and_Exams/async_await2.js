// mengabungkan async/await dengan promise

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function transaksi(balance, amount) {
  return new Promise((resolve, reject) => {
    if (balance >= amount) {
      resolve("Transaksi Berhasil");
    } else {
      reject("Transaksi Gagal");
    }
  });
}

async function asyncTransaksi(balance, amount) {
  await delay(2000);
  console.log("Mulai Proses");
  await delay(2000);
  try {
    const hasil = await transaksi(balance, amount);
    console.log(hasil);
  } catch (err) {
    console.log(err);
  }

  await delay(5000);
  console.log("Transaksi Selesai");
}

//Transaksi berhasil
asyncTransaksi(50000, 40000);

//Transaksi Gagal
asyncTransaksi(40000, 50000);
