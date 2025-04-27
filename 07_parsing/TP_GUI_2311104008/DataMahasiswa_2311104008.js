const fs = require('fs');

function ReadJson(filePath) {
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        console.log("Hasil Deserialisasi:");
        console.log(
            `Name: ${jsonData.name.depan} ${jsonData.name.belakang} dengan nim ${jsonData.nim} dari fakultas ${jsonData.fakultas}`
        );

        return jsonData;
    }catch (error) {
        console.error("Error reading or parsing file:", error.massage);
        return null;
    }
}

const filePath = "jurnal7_1_2311104008.json";
const jsonData = ReadJson(filePath);

if (jsonData) {
    console.log("Data berhasil dibaca dan diparsing.");
} else {
    console.log("Gagal membaca atau memparsing data.");
}

