import fs from "fs";

const dir = "./upload";

if (!fs.existsSync(dir)) {
    console.log("Criando diretório");
    fs.mkdir(dir, (err)=>{
        console.log("Diretório criado com sucesso")
    });
    
} else{
    console.log("Acessando o diretório ", dir);
}

let msg = "O segundo melhor time de basquete do mundo é o Lakers";
let file = "Lakers.txt";
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
    fs.writeFile(path, msg, (err)=>{});
    console.log("Arquivo criando com sucesso ", file); 
}