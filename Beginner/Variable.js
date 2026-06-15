// Variable mutable modern LET
//---BLOCK LEVEL

{
   let umur = 26
   console.log("dari dalam "+umur) // hanya dapat memanggil console dalam block
}
   //console.log(umur) // diluar block {} undifined

//--- Global  LET
    let harga = 7
   {
    console.log('ini adalah harga :' +harga)
   }

// Variable immutable CONST
//---BLOCK LEVEL
{
   const nama = "Budi"
   console.log("dari dalam "+nama) // hanya dapat memanggil console dalam block
}
   //console.log(nama) // diluar block {} undifined

//--- Global  CONST
    let asal = "Jakarta"
   {
    console.log('ini adalah asal :' +asal)
   }

// Variable Mutable VAR
// Function Level
{
    var barang = "pensil"
    console.log("var dari dalam "+barang) // hanya dapat memanggil console dalam block
}
    console.log("var dari luar "+barang) //  dapat memanggil console luar block juga
