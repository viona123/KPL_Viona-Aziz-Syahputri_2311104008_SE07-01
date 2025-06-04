const crypto = require("crypto");

// Hash password
function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi username
function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]{5,20}$/;
    return regex.test(username);
}

// Validasi password
function isValidPassword(password, username) {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/;
    return regex.test(password) && !password.includes(username);
}

module.exports = { hashPassword, isValidUsername, isValidPassword };

