/*
Mini Project Advanced – VIP Lounge

Cerita Utama:
Kamu adalah developer QA Automation di VIP Lounge. Guru ingin mengevaluasi performa murid dan menentukan siapa yang termasuk VIP berdasarkan skor mereka. Kamu diminta membuat program untuk membantu guru dengan data murid.

Tugas:

1. Buat array of students
   - Setiap student adalah object dengan properti:
     - name → nama murid
     - score → skor murid

2. Function untuk rata-rata skor
   - Buat fungsi yang menerima array student dan mengembalikan rata-rata skor
   - Gunakan destructuring untuk mengambil properti score dari masing-masing student
   - Gunakan reduce untuk menjumlahkan skor

3. Tambahkan student baru
   - Buat array baru yang menambahkan student baru menggunakan Spread Operator

4. Menambahkan skor tambahan
   - Buat fungsi yang menerima sisa skor menggunakan Rest Operator dan menambahkan nilai tersebut ke setiap student sesuai urutan

5. Filter VIP students
   - Tentukan VIP student: score ≥ 85
   - Tampilkan nama student yang VIP menggunakan map

6. Cetak hasil
   - Tampilkan rata-rata awal, daftar students setelah ditambah student baru, setelah skor baru, dan daftar VIP students

Catatan:
- Gunakan semua konsep Advanced:
  - Object / Nested Object
  - Destructuring
  - Spread Operator
  - Rest Operator
  - Array Methods (reduce, filter, map)
- Jangan menyalin kode sebelumnya, buat sendiri dari cerita ini
*/

let students = [
  { nama: "Mulia", score: 87 },
  { nama: "Nadam", score: 88 },
  { nama: "Naya", score: 50 },
  { nama: "Opin", score: 90 },
  { nama: "Gigi", score: 70 },
];

let newStudents = [
  { nama: "Gael", score: 90 },
  { nama: "Fani", score: 78 },
];

// return average score

function avgStudents(studentsArray) {
  let total = studentsArray.reduce((acc, { score }) => acc + score, 0);
  return total / studentsArray.length;
}

//bonus score each students
function bonusScore(...newscores) {
  newscores.forEach((score, i) => {
    if (students[i]) {
      students[i].score += score;
    }
  });

  return students;
}

students = [...students, ...newStudents];

let dataVip = students.filter(({ score }) => score >= 85);
// Show the report

console.log(`
 Rata-rata awal :
 ${avgStudents(students)}`);

console.log("\n New List Student :");
console.log(students);

console.log(" \nList Score with new score");
console.log(bonusScore(5, 5, 4, 4, 3, 6, 4));

console.log("\n VIP Students List with score up 85:");
console.log(dataVip.map(({ nama, score }) => [nama, score]));
