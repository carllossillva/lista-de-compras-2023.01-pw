let products = [];

const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputValor = document.getElementById("inputValor");
const BtAdicionar = document.getElementById("BtAdicionar");
const BtLimpar = document.getElementById("BtLimpar");
const tbody = document.getElementById("tbody");

const createListItem = (tabelaItens) => {
tbody.innerHTML = "";
for(let i = 0; i < tabelaItens.length; i++) {
const tr = document.createElement("tr");
const tdItem = document.createElement("td");
const tdQuantidade = document.createElement("td");
const tdValor = document.createElement("td");
const item = document.createTextNode(tabelaItens[i].name);
const quantidade = document.createTextNode(tabelaItens[i].quantidade);
const valor = document.createTextNode(tabelaItens[i].valor);

tdItem.appendChild(item);
tdQuantidade.appendChild(quantidade);
tdValor.appendChild(valor);

tr.appendChild(tdItem);
tr.appendChild(tdQuantidade);
tr.appendChild(tdValor);
tbody.appendChild(tr);

}
}

const hndBtnAddItem = () =>{
const item = {
name: inputItem.value,
quantidade: inputQuantidade.value,
valor: inputValor.value
};

if(!item.name || !item.quantidade || !item.valor){
alert("Preencha todos os campos!!");
return;
}

products.push(item);
console.log(products);
inputItem.value = "";
inputQuantidade.value = "";
inputValor.value = "";

createListItem(products);
inputItem.focus();
}

const hndBtnClearList = () =>{
inputItem.value = "";
inputQuantidade.value = "";
inputValor.value = "";
products = [];
createListItem(products);
inputItem.focus();
}

BtAdicionar.onclick = hnd