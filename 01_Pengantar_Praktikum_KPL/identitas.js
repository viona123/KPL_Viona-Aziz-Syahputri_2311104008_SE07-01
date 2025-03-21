<<<<<<< HEAD
import process from "process";  
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("siapa nama kamu?" , (nama) => {
    console.info(`Hallo ${nama}`)

    input.close();
=======
import process from "process";  
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("siapa nama kamu?" , (nama) => {
    console.info(`Hallo ${nama}`)

    input.close();
>>>>>>> 8049f7b8c225dc489f771e701cfbb1c8e9b28607
})