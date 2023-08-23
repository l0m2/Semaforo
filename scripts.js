const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const vermelhoP = document.getElementById("vermelhoP");
const verdeP = document.getElementById("verdeP");
const amarelo2 = document.getElementById("amarelo2");
const vermelho2 = document.getElementById("vermelho2");
const verde2 = document.getElementById("verde2");
const vermelhoP2 = document.getElementById("vermelhoP2");
const verdeP2 = document.getElementById("verdeP2");


const estados = [
    { cor: "vermelho", duracao: 7000 },  
    { cor: "amarelo2", duracao: 1000 }, 
    { cor: "verde", duracao: 7000 },  
    { cor: "amarelo", duracao: 1000 },   
];


let estadoAtual = 0;


function alternarCores() {
    const estado = estados[estadoAtual];
    
    if (estado.cor === "vermelho") {
        vermelho.style.backgroundColor = "rgb(255, 0, 0)";
        verdeP.style.backgroundColor = "rgb(4, 255, 4)";
        vermelhoP2.style.backgroundColor = "rgb(255, 0, 0)";
        verde2.style.backgroundColor = "rgb(4, 255, 4)";
        vermelho2.style.backgroundColor = "";
        vermelhoP.style.backgroundColor = "";
    } else {
        verdeP.style.backgroundColor = "";
        verde2.style.backgroundColor = "";
       
    }

    amarelo2.style.backgroundColor = estado.cor === "amarelo2" ? "rgb(255, 255, 12)" : "";

    if (estado.cor === "verde") {
        vermelho.style.backgroundColor = "";
        vermelhoP.style.backgroundColor = "rgb(255, 0, 0)";
        verde.style.backgroundColor = "rgb(4, 255, 4)";
        verdeP2.style.backgroundColor = "rgb(4, 255, 4)";
        vermelho2.style.backgroundColor = "rgb(255, 0, 0)";
        vermelhoP2.style.backgroundColor = "";
    } else {  
        verde.style.backgroundColor = "";
        verdeP2.style.backgroundColor = "";
    }

    amarelo.style.backgroundColor = estado.cor === "amarelo" ? "rgb(255, 255, 12)" : "";

    estadoAtual = (estadoAtual + 1) % estados.length;
    
    setTimeout(alternarCores, estado.duracao);
  
}
alternarCores(); 