function convert() {
  let real = document.getElementById("real").value;
  let dolar = document.getElementById("dolar").value;
  let euro = document.getElementById("euro").value;
  let bitcoin = document.getElementById("bitcoin").value;
  let realToDolar = 0.2;
  let realToEuro = 0.18;
  let realToBitcoin = 0.0000082;
  let dolarToReal = 5.04;
  let dolarToEuro = 0.92;
  let dolarToBitcoin = 0.000042;
  let euroToReal = 5.51;
  let euroToDolar = 1.09;
  let euroToBitcoin = 0.000046;
  let bitcoinToReal = 120130.71;
  let bitcoinToDolar = 23817.5;
  let bitcoinToEuro = 21824.45;

  if (dolar == "" && euro == "" && bitcoin == "") {
    dolar = (real * realToDolar).toLocaleString("pt-br", {
      style: "currency",
      currency: "USD"
    });
    euro = (real * realToEuro).toLocaleString("pt-br", {
      style: "currency",
      currency: "EUR"
    });
    bitcoin = (real * realToBitcoin).toLocaleString("pt-br", {
      style: "currency",
      currency: "BTC"
    });
  } else if (real == "" && euro == "" && bitcoin == "") {
    real = (dolar * dolarToReal).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
    euro = (dolar * dolarToEuro).toLocaleString("pt-br", {
      style: "currency",
      currency: "EUR"
    });
    bitcoin = (dolar * dolarToBitcoin).toLocaleString("pt-br", {
      style: "currency",
      currency: "BTC"
    });
  } else if (real == "" && dolar == "" && bitcoin == "") {
    real = (euro * euroToReal).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
    dolar = (euro * euroToDolar).toLocaleString("pt-br", {
      style: "currency",
      currency: "USD"
    });
    bitcoin = (euro * euroToBitcoin).toLocaleString("pt-br", {
      style: "currency",
      currency: "BTC"
    });
  } else if (real == "" && dolar == "" && euro == "") {
    real = (bitcoin * bitcoinToReal).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
    dolar = (bitcoin * bitcoinToDolar).toLocaleString("pt-br", {
      style: "currency",
      currency: "USD"
    });
    euro = (bitcoin * bitcoinToEuro).toLocaleString("pt-br", {
      style: "currency",
      currency: "EUR"
    });
  }

  document.getElementById("real").value = real;
  document.getElementById("dolar").value = dolar;
  document.getElementById("euro").value = euro;
  document.getElementById("bitcoin").value = bitcoin;
}

let inputReal = document.getElementById("real");
inputReal.addEventListener("keydown", function (e) {
  document.getElementById("dolar").value = "";
  document.getElementById("euro").value = "";
  document.getElementById("bitcoin").value = "";
});

let inputDolar = document.getElementById("dolar");
inputDolar.addEventListener("keydown", function (e) {
  document.getElementById("real").value = "";
  document.getElementById("euro").value = "";
  document.getElementById("bitcoin").value = "";
});

let inputEuro = document.getElementById("euro");
inputEuro.addEventListener("keydown", function (e) {
  document.getElementById("real").value = "";
  document.getElementById("dolar").value = "";
  document.getElementById("bitcoin").value = "";
});

let inputBitcoin = document.getElementById("bitcoin");
inputBitcoin.addEventListener("keydown", function (e) {
  document.getElementById("real").value = "";
  document.getElementById("dolar").value = "";
  document.getElementById("euro").value = "";
});