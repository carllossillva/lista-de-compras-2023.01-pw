
      function adicionarProduto() {
        let produto = document.getElementById("produto").value;
        let quantidade = parseInt(document.getElementById("quantidade").value);
        let valor = parseFloat(document.getElementById("valor").value);
        let valorTotal = quantidade * valor;
        
        let tabela = document.getElementById("tabela");
        let novaLinha = tabela.insertRow(-1);
        let celulaProduto = novaLinha.insertCell(0);
        let celulaQuantidade = novaLinha.insertCell(1);
        let celulaValor = novaLinha.insertCell(2);
        let celulaValorTotal = novaLinha.insertCell(3);
        
        celulaProduto.innerHTML = produto;
        celulaQuantidade.innerHTML = quantidade;
        celulaValor.innerHTML = valor.toFixed(2);
        celulaValorTotal.innerHTML = valorTotal.toFixed(2);
        
        atualizarTotal();
      }
      
      function atualizarTotal() {
        let total = 0;
        let tabela = document.getElementById("tabela");
        for (let i = 1; i < tabela.rows.length; i++) {
          total += parseFloat(tabela.rows[i].cells[3].innerHTML);
        }
        document.getElementById("total").innerHTML = total.toFixed(2);
      }

      let produto = document.getElementById("produto");
      produto.addEventListener("blur", function() {
        if (produto.value === "") {
          alert("Por favor, é necessário preencher o produto!");
        }
      });

      const handlelimparCampos = () => {
        tabela = [];
        tabela.innerHTML = "";
        produto.focus();
      };

      limparCampos.onclick = handlelimparCampos;