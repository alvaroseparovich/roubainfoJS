
function FazLivro(documento) {
  this.titulo = documento.querySelector(".informacoes > h2").textContent;
  this.autor = [];
  documento.querySelectorAll(".informacoes .autor").forEach(autor=>{
    this.autor.push(autor.textContent);
  });
  this.autor = this.autor.join(", ");

  this.foto = documento.querySelector(".imagem > img").src;

  this.preco = documento.querySelector(".informacoes .comprar strong");
  if(this.preco == null){
    this.preco = documento.querySelector(".informacoes .comprar span").textContent
  }else{
    this.preco = parseFloat(documento.querySelector(".informacoes .comprar strong").textContent.substring(2).replace(",","."));
  }


  this.descricao = documento.querySelector(".infos-extras .sinopse").textContent;

  c = 1;
  while (c < documento.querySelector(".ficha-tecnica").childElementCount+1){
    atualInfo = documento.querySelector(".ficha-tecnica > li:nth-child(" + c + ")").textContent.split(":");
    switch (atualInfo[0]) {
      case "Formato":
        this.formato = atualInfo[1];
        tamanho = atualInfo[1].split("x");
        this.larg = tamanho[0];
        this.alt = tamanho[1];
        break;
      case "Páginas":
        this.paginas = parseInt(atualInfo[1]);
        break;
      case "Peso":
        this.peso = parseInt(atualInfo[1]);
        break;
      case "Acabamento":
        this.acabamento = atualInfo[1];
        break;
      case "ISBN":
        this.isbn = atualInfo[1];
        break;
      case "Edição":
        this.ano = atualInfo[1];
        break;
      case "Selo":
        this.selo_editorial = atualInfo[1];
        break;
      case "Categorias":
        this.categoria = atualInfo[1];
        break;

      default: ;

    }

    console.log(c);
    c++;
  }
}

function createTd(content){
  td = document.createElement("td");
  td.textContent = content;
  return td
}
function renderpage(){
  var LivroAtual = new FazLivro(document);
  console.log('Livro feito ');
  tb = document.createElement("table")
  tb.classList.add("COPIAR");
  tr = document.createElement("tr");
  tr.appendChild(createTd(LivroAtual.titulo));tr.appendChild(createTd(LivroAtual.foto));
  tr.appendChild(createTd(LivroAtual.preco));tr.appendChild(createTd(LivroAtual.autor));tr.appendChild(createTd(LivroAtual.descricao));
  tr.appendChild(createTd(LivroAtual.peso));tr.appendChild(createTd(LivroAtual.formato));tr.appendChild(createTd(LivroAtual.larg));tr.appendChild(createTd(LivroAtual.alt));
  tr.appendChild(createTd(LivroAtual.isbn));tr.appendChild(createTd(LivroAtual.ano));
  tr.appendChild(createTd(LivroAtual.paginas));tr.appendChild(createTd(LivroAtual.acabamento));
  tr.appendChild(createTd(LivroAtual.selo_editorial));tr.appendChild(createTd(LivroAtual.categoria));


  tb.appendChild(tr);



  document.querySelector('body').innerHTML = tb.outerHTML;
  copy = document.querySelector('body');
  var range = document.createRange();
    range.selectNode(copy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    if(document.execCommand('copy')){history.back();}
    //document.execCommand('copy');
    //history.back();
    //window.close();
}
if(window.location.href.substr(0,45) == "https://www.hagnos.com.br/produtos.asp?codigo"){
  renderpage();
}
