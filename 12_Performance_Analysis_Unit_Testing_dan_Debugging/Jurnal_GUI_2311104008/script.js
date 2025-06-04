function cariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;

    // Cek overflow untuk JavaScript Number (batas tidak eksplisit, tapi bisa kita simulasikan)
    if (!Number.isSafeInteger(hasil)) {
      return -3;
    }
  }

  return hasil;
}

function hitung() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = cariNilaiPangkat(a, b);

  document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}

