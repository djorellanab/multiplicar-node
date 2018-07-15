// Requireds
const {listTable,printTable} = require('./multiplicar/multiplicar');
const {argv, getComando} = require('./configs/comandos');

let start = async () =>
{
    let comando = await getComando();
    switch(comando)
    {
        case "listar":
        {
            console.log("Comando listar");
            let list = await listTable(argv.base,argv.limite);
            console.log(list);
            break;
        }
    
        case "crear":
        {
            console.log(argv.limite);
            printTable(argv.base,argv.limite)
                .then(archivo => console.log("se ha creado el archivo"))
                .catch(err => console.log(err.message));
            console.log("Comando crear");
            break;
        }
        default: console.log("Comando desconocido");
    }
}

start()
    .then(()=>{console.log("Se ha terminado el programa")})
    .catch((err)=>{console.log("Se tuvo un error: ",err.message)});