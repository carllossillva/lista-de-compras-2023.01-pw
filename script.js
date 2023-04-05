let tabela = document.querySelector("#tabela tbody");
let total = document.querySelector("#total");

function adicionarProduto() {
  let produto = document.querySelector("#produto").value;
  let quantidade = Number(document.querySelector("#quantidade").value);
  let valor = Number(document.querySelector("#valor").value);
  

  if (produto === "" || quantidade === 0 || valor === 0) {
    alert("Preencha todos os campos.");
    return;
  }

  let linha = document.createElement("tr");
  let colunaProduto = document.createElement("td");
  let colunaQuantidade = document.createElement("td");
  let colunaValor = document.createElement("td");
  let colunatotal = document.createElement("td");

  colunaProduto.textContent = produto;
  colunaQuantidade.textContent = quantidade;
  colunaValor.textContent = valor;
  colunatotal.textContent = total;

  linha.appendChild(colunaProduto);
  linha.appendChild(colunaQuantidade);
  linha.appendChild(colunaValor);
  tabela.appendChild(linha);
  linha.appendChild(colunatotal);

  let totalAtual = Number(total.textContent);
  let valorFinal = quantidade * valor;
  total.textContent = totalAtual + valorFinal;
}

function limparTabela() {
  tabela.innerHTML = "";
  total.textContent = "0";
}
