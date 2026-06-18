//1. Function Declaration - Fungsi Biasa

console.log("\n");
console.log("1. Function Declaration - Fungsi Biasa");
console.log("\n");
{
  function greet(nama) {
    return `Selamat Datang ${nama}`;
  }

  console.log(greet("Elan"));
}
//Example
{
  let angka1 = 10;
  let angka2 = 5;

  function add(a1, a2) {
    return a1 + a2;
  }
  console.log("ini adalah hasilnya " + add(angka1, angka2));
}

//2. Arrow Function

console.log("\n");
console.log("2. Arrow Function");
console.log("\n");
{
  const add = (a1, a2) => a1 + a2;
  console.log(add(10, 5));
}

//3. Function with default params

console.log("\n");
console.log("3. with default params");
console.log("\n");
{
  const power = (base, exp = 2) => base ** exp;
  console.log(power(3, 4));
}
