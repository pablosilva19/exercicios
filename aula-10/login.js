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
    var data = JSON.stringify({
      email: email,
      senha: senha,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var LoginResult = JSON.parse(this.responseText);

        if (LoginResult.sucesso) {
          alert("logou");
        } else {
          exibirMensagemErro(LoginResult.mensagem);
        }
      }
    });

    xhr.open("POST", "https://localhost:44368/api/usuario/login");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  }
};