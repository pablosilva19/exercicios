window.onload = function (e) {
  var btn1 = document.getElementById("btn1");

  var txtNumero1 = document.getElementById("numero1");

  var txtNumero2 = document.getElementById("numero2");
  btn1.onclick = function (e) {};

  function somar(numero1, numero2) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      "GET",
      "https://localhost:44368/api/aula8/Somar?numero1=" +
        numero1 +
        "&numero10=" +
        numero2
    );

    xhr.send();
  }
};
