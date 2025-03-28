const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", function(huruf) {
    huruf = huruf.toUpperCase();
    
    // Mengecek huruf vokal atau konsonan
    if (['A', 'I', 'U', 'E', 'O'].includes(huruf)) {
        console.log(`Huruf ${huruf} merupakan huruf vokal`);
    } else {
        console.log(`Huruf ${huruf} merupakan huruf konsonan`);
    }
    
    // Membuat array bilangan genap
    const bilanganGenap = [2, 4, 6, 8, 10];
    
    // Melakukan iterasi dan mencetak output
    bilanganGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });
    
    rl.close();
});
