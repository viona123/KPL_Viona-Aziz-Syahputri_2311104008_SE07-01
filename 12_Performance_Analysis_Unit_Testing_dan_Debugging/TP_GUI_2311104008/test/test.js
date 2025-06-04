const assert = require("assert");
const { CariTandaBilangan } = require("../renderer.js");

// Unit test
assert.strictEqual(CariTandaBilangan(10), "Positif");
assert.strictEqual(CariTandaBilangan(-5), "Negatif");
assert.strictEqual(CariTandaBilangan(0), "Nol");

console.log("✅ Semua test berhasil dijalankan.");

