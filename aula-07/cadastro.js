window.onload = function (e) {
  var btnCadastrar = document.getElementById("btnCadastrar");

  var txtNome = document.getElementById("txtNome");

  var txtSobrenome = document.getElementById("txtSobrenome");

  var txtEmail = document.getElementById("txtEmail");

  var txtTelefone = document.getElementById("txtTelefone");

  var slcGenero = document.getElementById("slcGenero");

  var txtSenha = document.getElementById("txtSenha");

  txtNome.focus();

  btnCadastrar.onclick = function (e) {
    e.preventDefault();

    var nome = txtNome.value;

    var sobrenome = txtSobrenome.value;

    var email = txtEmail.value;

    var telefone = txtTelefone.value;

    var gereno = slcGenero.value;

    var senha = txtSenha.value;

    if (nome == "") {
      exibirMensagemErro("Informa o nome.");
    } else if (sobrenome == "") {
      exibirMensagemErro("Informa o sobrenome.");
    } else if (email == "") {
      exibirMensagemErro("Informa o email");
    } else if (telefone == "") {
      exibirMensagemErro("Informa o telefone.");
    } else if (senha == "") {
      exibirMensagemErro("Informa a senha.");
    } else {
      cadastrar(nome, sobrenome, email, telefone, gereno, senha);
    }
  };

  function exibirMensagemErro(mensagem) {
    var spnErro = document.getElementById("spnErro");

    spnErro.innerText = mensagem;

    spnErro.style.display = "block";

    setTimeout(function () {
      spnErro.style.display = "none";
    }, 5000);
  }

  function cadastrar(nome, txtSobrenome, email, gereno, senha) {
    alert("O cadastro foi realizado com sucesso para o usuário " + email);
  }
};
