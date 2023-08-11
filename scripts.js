const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const vermelhoP = document.getElementById("vermelhoP");
const verdeP = document.getElementById("verdeP");

const estados = [
    { cor: "vermelho", duracao: 10000 }, 
    { cor: "amarelo", duracao: 3000 },   
    { cor: "verde", duracao: 10000 },  
    { cor: "amarelo", duracao: 3000 },     
];


let estadoAtual = 0;


function alternarCores() {
    const estado = estados[estadoAtual];
    
    if (estado.cor === "vermelho") {
        vermelho.style.backgroundColor = "rgb(255, 0, 0)";
        verdeP.style.backgroundColor = "rgb(4, 255, 4)";
      
    } else {
        vermelho.style.backgroundColor = "";
        verdeP.style.backgroundColor = "";
    }
    
    amarelo.style.backgroundColor = estado.cor === "amarelo" ? "rgb(255, 255, 12)" : "";
    
    if (estado.cor === "verde") {
        verde.style.backgroundColor = "rgb(4, 255, 4)";
        vermelhoP.style.backgroundColor = "rgb(255, 0, 0)";

    } else {
        verde.style.backgroundColor = "";
        vermelhoP.style.backgroundColor = "";
    }

    amarelo.style.backgroundColor = estado.cor === "amarelo" ? "rgb(255, 255, 12)" : "";

    estadoAtual = (estadoAtual + 1) % estados.length;
    
    setTimeout(alternarCores, estado.duracao);
  
}
alternarCores(); 