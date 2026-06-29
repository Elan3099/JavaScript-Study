const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("Mulai proses...");

  await delay(2000); // tunggu 2 detik
  console.log("Data diproses");

  await delay(1000); // tunggu 1 detik
  console.log("Proses selesai");
}
run();
