var count_calc = 0;

function teste() {
  alert("oi");
}
function recebe_console(id) {
  var console = document.getElementById("console").value;
  var buttonID = document.getElementById("button" + id).value;
  var novo_console = (document.getElementById("console").value =
    console + buttonID);
}
function btnlimpaconsole() {
  var limpa = (document.getElementById("console").value = "");
}
function soma(id) {
  var val_console = document.getElementById("console").value;
  var limpa = (document.getElementById("console").value = "");
  var div_Adc = document.getElementById("adcaq");
  var n_txt_console = document.createElement("P");
  n_txt_console.innerHTML =
    '<input id="value_console' +
    count_calc +
    '" value="' +
    val_console +
    '" class="text" readonly/>&nbsp;<input type="button" class="text" id="consoleadd' +
    count_calc +
    '" value="' +
    id +
    '"/>';
  div_Adc.appendChild(n_txt_console);
  count_calc++;
}
function subtr(id) {
  var val_console = document.getElementById("console").value;
  var limpa = (document.getElementById("console").value = "");
  var div_Adc = document.getElementById("adcaq");
  var n_txt_console = document.createElement("P");
  n_txt_console.innerHTML =
    '<input id="value_console' +
    count_calc +
    '" value="' +
    val_console +
    '" class="text" readonly/>&nbsp;<input type="button" class="text" id="consoleadd' +
    count_calc +
    '" value="' +
    id +
    '"/>';
  div_Adc.appendChild(n_txt_console);
  count_calc++;
}
function mult(id) {
  var val_console = document.getElementById("console").value;
  var limpa = (document.getElementById("console").value = "");
  var div_Adc = document.getElementById("adcaq");
  var n_txt_console = document.createElement("P");
  n_txt_console.innerHTML =
    '<input id="value_console' +
    count_calc +
    '" value="' +
    val_console +
    '" class="text" readonly/>&nbsp;<input type="button" class="text" id="consoleadd' +
    count_calc +
    '" value="' +
    id +
    '"/>';
  div_Adc.appendChild(n_txt_console);
  count_calc++;
}
function div(id) {
  var val_console = document.getElementById("console").value;
  var limpa = (document.getElementById("console").value = "");
  var div_Adc = document.getElementById("adcaq");
  var n_txt_console = document.createElement("P");
  n_txt_console.innerHTML =
    '<input id="value_console' +
    count_calc +
    '" value="' +
    val_console +
    '" class="text" readonly/>&nbsp;<input type="button" class="text" id="consoleadd' +
    count_calc +
    '" value="' +
    id +
    '"/>';
  div_Adc.appendChild(n_txt_console);
  count_calc++;
}
function igual(id) {
  var val_console = document.getElementById("console").value;
  var div_Adc = document.getElementById("adcaq");
  var n_txt_console = document.createElement("P");
  n_txt_console.innerHTML =
    '<input id="value_console' +
    count_calc +
    '" value="' +
    val_console +
    '" class="text" readonly/>&nbsp;<input type="button" class="text" id="consoleadd' +
    count_calc +
    '" value="' +
    id +
    '"/>';
  div_Adc.appendChild(n_txt_console);
  count_calc++;
  setTimeout(() => {
    result(id);
  }, 500);
}
function result(id) {
  var result = 0;
  var count_i_menos = 0;
  for (let i = 0; i < count_calc; i++) {
    var console = document.getElementById("consoleadd" + i).value;
    if (console == "+") {
      var value_console = +document.getElementById("value_console" + i).value;
      result += value_console;
    } else if (console == "-") {
      var value_console = +document.getElementById("value_console" + i).value;
      result -= value_console;
    } else if (console == "x") {
      var value_console = +document.getElementById("value_console" + i).value;
      result *= value_console;
    } else if (console == "/") {
      var consvalue_consoleole = +document.getElementById("value_console" + i)
        .value;
      result /= value_console;
    } else {
      count_i_menos = i - 1;
      var console_i_menos = document.getElementById(
        "consoleadd" + count_i_menos
      ).value;

      if (console_i_menos == "+") {
        var val_console_i_menos = +document.getElementById("console").value;
        // alert(val_console_i_menos);
        result += val_console_i_menos;
      } else if (console_i_menos == "-") {
        var val_console_i_menos = +document.getElementById("console").value;
        result -= val_console_i_menos;
      } else if (console_i_menos == "x") {
        var val_console_i_menos = +document.getElementById("console").value;
        result *= val_console_i_menos;
      } else if (console_i_menos == "/") {
        var val_console_i_menos = +document.getElementById("console").value;
        result /= val_console_i_menos;
      }
    }
    alert(result);
  }
  var val_console = (document.getElementById("console").value = result);
  count_calc = 0;
}
function InsereConsole(num) {
  document.form.txtViewCalc.value = document.form.txtViewCalc.value + num;
}
function Igual() {
  var equal = document.form.txtViewCalc.value;
  if (equal != "") {
    document.form.txtViewCalc.value = eval(equal);
  }
}
function ApagaUm() {
  var apgUm = document.form.txtViewCalc.value;
  document.form.txtViewCalc.value = apgUm.substr(1);
}
function ApagaTudo() {
  document.form.txtViewCalc.value = "";
}
