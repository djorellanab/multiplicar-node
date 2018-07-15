const fs = require('fs');
const colors = require('colors');

let getMultiplyTable = async (base, total) => {
    let stringBuilder = "";
    console.log(`===== Tabla de ${base} al ${total} =====`.green);
    for(let i = 1; i <= total; i++)
    {
        stringBuilder += `${base}*${i}=${base*i}`;
        stringBuilder +='\r\n';
    }
    return stringBuilder;
};

var listTable = async(base, total) =>
{
    if (!Number(base)) {throw new Error("La base no es un numero");}
    if (!Number(total)) {throw new Error("El total no es un numero");}
    let table = await getMultiplyTable(base,total);
    return table;
}

var printTable = async(base, total) =>
{
    if (!Number(base)) {throw new Error("La base no es un numero");}
    if (!Number(total)) {throw new Error("El total no es un numero");}
    let table = await getMultiplyTable(base,total);
    fs.writeFile(`tablas/tabla-${base}-al-${total}.txt`, table, (err) => {
    if (err) throw err;
    else return `tablas/tabla-${base}-al-${total}.txt`;
  });
};

module.exports = {listTable,printTable};