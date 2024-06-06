window.onload = function (e) {
  var botonEntrar = document.getElementById("botonEntrar");

  var txtEmail = document.getElementById("txtEmail");

  var txtSenha = document.getElementById("txtSenha");

  txtEmail.focus();

  botonEntrar.onclick = function (e) {
    e.preventDefault();

    var email = txtEmail.value;

    var senha = txtSenha.value;

    if (email == "") {
      exibirMensagemErro("Informe o E-mail");
    } else if (senha == "") {
      exibirMensagemErro("Informe a senha");
    } else {
      relizarLogin(email, senha);
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

  function relizarLogin(email, senha) {
    alert("O login foi realizado para o usuário" + email);
  }
};
