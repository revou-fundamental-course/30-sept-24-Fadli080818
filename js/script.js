function btnReverse() {
  var idConvert = document.getElementById("convertRole").value;
  if (idConvert == 0) {
    document.getElementById("convertRole").value = 1;
    document.getElementById("text1").innerHTML = "Fahrenheit (&degF)";
    document.getElementById("text2").innerHTML = "Celcius (&degC)";
    document.getElementById("text-convert").innerHTML =
      "Fahrenheit (&degF) ke Celcius (&degC)";

    let no1 = document.getElementById("text-input").value;
    let no2 = document.getElementById("text-result").value;

    document.getElementById("text-input").value = no2;
    document.getElementById("text-result").value = no1;

    var convertValue = document.getElementById("text-input").value;

    if (convertValue != "") {
      document.getElementById("text-calculate").value =
        "S = " + "(" + convertValue + " - 32)" + " * (5 / 9)";
    } else {
      document.getElementById("text-calculate").value =
        "S = ( Value - 32) * (5 / 9)";
    }
  } else {
    document.getElementById("convertRole").value = 0;
    document.getElementById("text1").innerHTML = "Celcius (&degC)";
    document.getElementById("text2").innerHTML = "Fahrenheit (&degF)";
    document.getElementById("text-convert").innerHTML =
      "Celcius (&degC) ke Fahrenheit (&degF)";

    let no1 = document.getElementById("text-input").value;
    let no2 = document.getElementById("text-result").value;

    document.getElementById("text-input").value = no2;
    document.getElementById("text-result").value = no1;

    var convertValue = document.getElementById("text-input").value;

    if (convertValue != "") {
      document.getElementById("text-calculate").value =
        "S = " + convertValue + " * (9 / 5) + 32";
    } else {
      document.getElementById("text-calculate").value =
        "S = Value * (9 / 5) + 32";
    }
  }
}

function btnReset() {
  document.getElementById("text-input").value = "";
  document.getElementById("text-result").value = "";
  document.getElementById("text1").innerHTML = "Celcius (&degC)";
  document.getElementById("text2").innerHTML = "Fahrenheit (&degF)";
  document.getElementById("text-convert").innerHTML =
    "Celcius (&degC) ke Fahrenheit (&degF)";
  document.getElementById("text-calculate").value = "S = Value * (9 / 5) + 32";
}

function btnConvert() {
  let textInput = document.getElementById("text-input").value;

  if (textInput == "") {
    alert("Please enter a convertion number.");
  } else if (
    parseInt(textInput) != textInput &&
    parseFloat(textInput) != textInput
  ) {
    alert("Please enter a valid number.");
    document.getElementById("text-input").value = "";
    document.getElementById("text-input").focus();
  } else {
    var idConvert = document.getElementById("convertRole").value;

    if (idConvert == "0") {
      var convertValue = document.getElementById("text-input").value;
      document.getElementById("text-result").value = parseFloat(
        convertValue * (9 / 5) + 32
      ).toFixed(2);

      document.getElementById("text-calculate").value =
        "S = " + convertValue + " * (9 / 5) + 32";
    } else if (idConvert == "1") {
      var convertValue = document.getElementById("text-input").value;
      document.getElementById("text-result").value = parseFloat(
        (convertValue - 32) * (5 / 9)
      ).toFixed(2);

      document.getElementById("text-calculate").value =
        "S = " + "(" + convertValue + " - 32)" + " * (5 / 9)";
    }
  }
}
