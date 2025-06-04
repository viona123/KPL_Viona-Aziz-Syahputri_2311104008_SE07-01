function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

function cekTanda() {
  const input = document.getElementById("inputAngka").value;
  const hasil = CariTandaBilangan(Number(input));
  document.getElementById("hasil").innerText = hasil;
}

// Agar bisa dipakai di unit test
if (typeof module !== "undefined") {
  module.exports = { CariTandaBilangan };
}

