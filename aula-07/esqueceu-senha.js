window.onload = function (e) {
  var btnRecuperarSenha = document.getElementById("btnRecuperarSenha");

  var txtEmail = document.getElementById("txtEmail");

  txtEmail.focus();

  btnRecuperarSenha.onclick = function (e) {
    e.preventDefault();

    var email = txtEmail.value;

    if (email == "") {
      exibirMensagemErro("Informe o E-mail");
    } else {
      relizarLogin(email);
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

  function relizarLogin(email) {
    alert("Foi enviado com sucesso no email " + email);
  }
};
