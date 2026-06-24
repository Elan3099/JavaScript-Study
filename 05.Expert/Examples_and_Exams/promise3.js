const nasabah = {
  name: "Elias",
  balance: 1000000,
};
let transfer;

let { balance: saldo, name: nama } = nasabah;

const delay = (ms) => {
  return new Promise((reject) => {
    setTimeout(() => {
      reject();
    }, ms);
  });
};

function asyncTransfer(obj, transfer) {
  return new Promise((resolve, reject) => {
    if (transfer <= saldo) {
      resolve(
        `Uang berhasil di transfer dari ${nama} sejumlah Rp. ${transfer}`,
      );
    } else {
      let sisah = transfer - saldo;
      reject(
        `Uang gagal di transfer dari ${nama} sejumlah Rp. ${transfer}, mohon isi saldo Rp. ${sisah}`,
      );
    }
  });
}

const call = () => console.log("Proses Transfer Selesai");

//gagal transfer
asyncTransfer(nasabah, 2000000)
  .then((msg) => console.log("200 :", msg))
  .catch((err) => delay(5000).then(() => console.log("204 :", err)))
  .finally(call);

//berhasil transfer
asyncTransfer(nasabah, 100000)
  .then((msg) => console.log("200 :", msg))
  .catch((err) => delay(5000).then(() => console.log("204 :", err)))
  .finally(call);
