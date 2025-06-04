const fs = require("fs");
const readline = require("readline-sync");
const { hashPassword } = require("./utils");

const filePath = "users.json";

if (!fs.existsSync(filePath)) {
    console.log("Belum ada data user. Registrasi dulu.");
    process.exit(1);
}

const users = JSON.parse(fs.readFileSync(filePath));
const username = readline.question("Username: ");
const password = readline.question("Password: ", { hideEchoBack: true });

const hashed = hashPassword(password);
const match = users.find(user => user.username === username && user.password === hashed);

if (match) {
    console.log("Login berhasil!");
} else {
    console.log("Login gagal. Username atau password salah.");
}

