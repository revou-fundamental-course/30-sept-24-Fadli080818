// Public Variable for Alert Box
let alertBox = document.getElementById("customAlertBox");
let alert_Message_container = document.getElementById("alertMessage");
let close_img = document.querySelector("close");

// Function Reset Button Click
function btnReverse() {
  var idConvert = document.getElementById("convertRole").value;
  if (idConvert == 0) {
    document.getElementById("convertRole").value = 1;
    document.getElementById("text1").innerHTML = "Fahrenheit (&degF)";
    document.getElementById("text2").innerHTML = "Celcius (&degC)";
    document.getElementById("text-convert").innerHTML =
      "Fahrenheit (&degF) to Celcius (&degC)";

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
      "Celcius (&degC) to Fahrenheit (&degF)";

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

// Function Reset Button Click
function btnReset() {
  document.getElementById("text-input").value = "";
  document.getElementById("text-result").value = "";
  document.getElementById("text1").innerHTML = "Celcius (&degC)";
  document.getElementById("text2").innerHTML = "Fahrenheit (&degF)";
  document.getElementById("text-convert").innerHTML =
    "Celcius (&degC) ke Fahrenheit (&degF)";
  document.getElementById("text-calculate").value = "S = Value * (9 / 5) + 32";
  document.getElementById("text-input").focus();
  document.getElementById("convertRole").value = 0;
}

// Function Covert Button Click
function btnConvert() {
  let textInput = document.getElementById("text-input").value;

  if (textInput == "") {
    alert_Message_container.innerHTML = "Please input a conversion number !";
    alertBox.style.display = "block";
    document.getElementById("text-input").focus();
  } else if (
    parseInt(textInput) != textInput &&
    parseFloat(textInput) != textInput
  ) {
    alert_Message_container.innerHTML = "Please input a valid number !";
    alertBox.style.display = "block";
    document.getElementById("text-input").value = "";
    document.getElementById("text-input").focus();
  } else {
    var idConvert = document.getElementById("convertRole").value;

    if (idConvert == "0") {
      var convertValue = parseFloat(
        document.getElementById("text-input").value
      ).toFixed(0);
      document.getElementById("text-input").value = convertValue;
      document.getElementById("text-result").value = parseFloat(
        convertValue * (9 / 5) + 32
      ).toFixed(0);

      document.getElementById("text-calculate").value =
        "S = " + convertValue + " * (9 / 5) + 32";
    } else if (idConvert == "1") {
      var convertValue = parseFloat(
        document.getElementById("text-input").value
      ).toFixed(0);
      document.getElementById("text-input").value = convertValue;
      document.getElementById("text-result").value = parseFloat(
        (convertValue - 32) * (5 / 9)
      ).toFixed(0);

      document.getElementById("text-calculate").value =
        "S = " + "(" + convertValue + " - 32)" + " * (5 / 9)";
    }
  }
}

// Click to Close Alert
function closeAlert() {
  alertBox.style.display = "none";
}

// Function Close Alert by click anywhere not on the alert box
document.addEventListener("click", function (e) {
  if (e.target == alertBox) {
    alertBox.style.display = "none";
    document.getElementById("text-input").focus();
  }

  document.getElementById("text-input").focus();
});
