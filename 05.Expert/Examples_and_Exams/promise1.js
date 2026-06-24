// Example 1

{
  console.log("\n");
  console.log("1");
  console.log("\n");

  const checkbook = (check) => {
    return new Promise((resolve, reject) => {
      if (check) {
        resolve("Buku Tersedia");
      } else {
        reject("Buku Tidak Tersedia");
      }
    });
  };

  checkbook(true)
    .then((msg) => console.log("200 Success:", msg))
    .catch((err) => console.log("500 Gagal:", err));

  checkbook(false)
    .then((msg) => console.log("200 Success:", msg))
    .catch((err) => console.log("500 Gagal:", err));
}
