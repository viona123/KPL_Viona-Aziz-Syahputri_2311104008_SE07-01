// if
const a = 5
const b = 7
const c = 2

if(a > b) {
    console.log("A lebih besar daripada B")
}

if(a % 2 === 0) {
    console.log("A habis dibagi 2")
} else if (b % 2 === 0) {
    console.log("B habis dibagi 2")
} else if (c % 2 === 0) {
    console.log("C habis dibagi 2")
} else {
    console.log("Semua value variable tidak habis dibagi 2")
}

// switch
let pilihan = 2

switch(pilihan){
    case 1:
        console.log("ini pilihan 1")
        break;
    case 2:
        console.log("ini pilihan 2")
        break;
    default:
        console.log("Gada Boy")
        break;
}