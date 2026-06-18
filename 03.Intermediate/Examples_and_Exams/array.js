// Basic array
console.log("\n");
console.log("1. Basic Array");
console.log("\n");
{
  const arrayNumber = [1, 2, 3, 4, 5];
  arrayNumber.push(6);
  arrayNumber.pop();

  for (let i = 0; i < arrayNumber.length; i++) {
    console.log(arrayNumber[i]);
  }
}

// Array method
console.log("\n");
console.log("2. Array Method");
console.log("\n");
// Map()
{
  let arrayNama = [10, 15, 20, 25];
  let ubah = arrayNama.map((n) => n * 3);
  console.log(ubah);
  // filter()

  let filter = arrayNama.filter((n) => [15, 20].includes(n));
  console.log(filter);

  //reduce()
  let reduce = arrayNama.reduce((acc, n) => acc + n, 0);
  console.log(reduce);
}

// Nested Array

console.log("\n");
console.log("3. Nested Array");
console.log("\n");
{
  const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(nestedArray[1][1]);
  console.log((nestedArray[2][2] = 0));
  console.log(nestedArray); //print all
}
