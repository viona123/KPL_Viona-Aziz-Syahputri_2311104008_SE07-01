const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const config = new BankTransferConfig().getConfig();
const lang = config.lang;

function prompt(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

(async () => {
  const promptText =
    lang === "id"
      ? "Please insert the amount of money to transfer: "
      : "Masukkan jumlah uang yang akan di-transfer: ";
  const amountStr = await prompt(promptText);
  const amount = parseInt(amountStr);

  const fee =
    amount <= config.transfer.threshold
      ? config.transfer.low_fee
      : config.transfer.high_fee;
  const total = amount + fee;

  if (lang === "en") {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
  }

  const methodText =
    lang === "en" ? "Select transfer method:" : "Pilih metode transfer:";
  console.log(methodText);
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });
  await prompt("> "); // user memilih metode, tapi tidak diproses lebih lanjut

  const confirmWord =
    lang === "en" ? config.confirmation.en : config.confirmation.id;
  const confirmPrompt =
    lang === "en"
      ? `Please type "${confirmWord}" to confirm the transaction: `
      : `Ketik "${confirmWord}" untuk mengkonfirmasi transaksi: `;
  const confirmation = await prompt(confirmPrompt);

  if (confirmation.toLowerCase() === confirmWord.toLowerCase()) {
    console.log(
      lang === "en" ? "The transfer is completed" : "Proses transfer berhasil"
    );
  } else {
    console.log(
      lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan"
    );
  }

  rl.close();
})();