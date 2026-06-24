// Example 2
{
  console.log("\n");
  console.log("2");
  console.log("\n");

  let total = 100000;

  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  const penjumlahan = (a, b) => {
    return new Promise((resolve, reject) => {
      let hasil = a + b;
      if (hasil >= total) {
        resolve("Saldo Cukup");
      } else {
        reject("Saldo Tidak Cukup");
      }
    });
  };

  // saldo cukup
  penjumlahan(60000, 80000)
    .then((msg) => delay(5000).then(() => console.log("Berhasil :", msg)))
    .catch((err) => console.log("ERR :", err));

  // saldo tidak cukup
  penjumlahan(30000, 10000)
    .then((msg) => delay(5000).then(() => console.log("Berhasil :", msg)))
    .catch((err) => console.log("ERR :", err));
}
