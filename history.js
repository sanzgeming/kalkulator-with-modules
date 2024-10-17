// history.js
let riwayatKalkulasi = [];

function tambahRiwayat(angkaPertama, angkaKedua, operator, hasil) {
    riwayatKalkulasi.push(`${angkaPertama} ${operator} ${angkaKedua} = ${hasil}`);
}

function tampilkanRiwayat() {
    console.log("\n--- Riwayat Kalkulasi ---");
    if (riwayatKalkulasi.length === 0) {
        console.log("Belum ada kalkulasi yang dilakukan.");
    } else {
        riwayatKalkulasi.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry}`);
        });
    }
}

module.exports = { tambahRiwayat, tampilkanRiwayat };