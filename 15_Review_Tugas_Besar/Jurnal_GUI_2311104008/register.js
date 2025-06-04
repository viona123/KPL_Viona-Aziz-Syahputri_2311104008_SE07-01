const fs = require("fs");
const readline = require("readline-sync");
const { hashPassword, isValidUsername, isValidPassword } = require("./utils");

let users = [];
const filePath = "users.json";

// Baca data lama
if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath));
}

// Input
const username = readline.question("Masukkan username: ");
const password = readline.questionNewPassword("Masukkan password: ", {
    min: 8,
    confirmMessage: "Konfirmasi password: ",
});

// Validasi
if (!isValidUsername(username)) {
    console.log("Username harus 5-20 karakter alfanumerik.");
    process.exit(1);
}
if (!isValidPassword(password, username)) {
    console.log("Password harus 8-20 karakter, mengandung huruf besar, angka, dan simbol.");
    process.exit(1);
}

// Cek duplikat
if (users.some(user => user.username === username)) {
    console.log("Username sudah digunakan.");
    process.exit(1);
}

// Simpan user
users.push({ username, password: hashPassword(password) });
fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

console.log("Registrasi berhasil!");

