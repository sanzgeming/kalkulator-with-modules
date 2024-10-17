// main.js
const readline = require('readline-sync');
const { processHasil } = require('./calculator');
const { tambahRiwayat, tampilkanRiwayat } = require('./history');

let hasilSebelumnya = null;

while (true) {
    console.log("\n--- Kalkulator ---");

    let angkaPertama;
    if (hasilSebelumnya !== null) {
        const usePrevious = readline.question("Gunakan hasil sebelumnya (" + hasilSebelumnya + ")? (y/n): ").toLowerCase();
        if (usePrevious === 'y') {
            angkaPertama = hasilSebelumnya;
        } else {
            angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama: "));
        }
    } else {
        angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama: "));
    }

    const operator = readline.question("Pilih Operator ( +, -, *, /, %) : ");
    
    let angkaKedua = null;
    let angkaValid = false;

    // Validasi input angka kedua, tidak boleh nol untuk pembagian atau modulus
    while (!angkaValid) {
        angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua: "));
        if (operator === '/' || operator === '%') {
            if (angkaKedua === 0) {
                console.log("Error: Pembagian dan modulus dengan nol tidak diperbolehkan. Silahkan masukkan angka kedua yang benar.");
            } else {
                angkaValid = true;
            }
        } else {
            angkaValid = true;
        }
    }

    const requiredOperator = ["+", "-", "*", "/", "%"];

    if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
        console.log("Inputan anda tidak valid.");
    } else if (!requiredOperator.includes(operator)) {
        console.log("Pilih operator yang valid.");
    } else {
        const hasil = processHasil(angkaPertama, angkaKedua, operator);
        if (hasil !== undefined) {
            hasilSebelumnya = hasil; // Menyimpan hasil kalkulasi untuk penggunaan selanjutnya
            tambahRiwayat(angkaPertama, angkaKedua, operator, hasil); // Tambah ke riwayat
            console.log({ hasil });
        }
    }

    const lihatRiwayat = readline.question("Ingin melihat riwayat kalkulasi? (y/n): ").toLowerCase();
    if (lihatRiwayat === 'y') {
        tampilkanRiwayat(); // Menampilkan riwayat
    }
}