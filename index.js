const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const people = document.querySelector("#people");
const reset = document.querySelector("button");
const radios = document.querySelectorAll("input[type='radio']");

custom.addEventListener("click", () => {
  radios.forEach((radio) => {
    if (radio.checked) radio.checked = false;
  });
});

window.addEventListener("keyup", () => {
  if (
    bill.value.length > 1 ||
    custom.value.length > 1 ||
    people.value.length > 1
  )
    reset.style.filter = "opacity(1)";
  else reset.style.filter = "opacity(0.1)";

  calculate();
});

window.addEventListener("click", () => {calculate()});

function calculate() {
  const billAmount = parseFloat(bill.value);
  let tipPercentage = parseFloat(custom.value / 100);
  const person = parseFloat(people.value);

  radios.forEach((radio) => {
    if (radio.checked) tipPercentage = parseFloat(radio.value / 100);
  });

  const tipPerPerson = parseFloat((billAmount / person) * tipPercentage);
  const totalTip = parseFloat(tipPerPerson * person);

  if (tipPerPerson && totalTip) {
    document.querySelector(".person-tip").innerText =
      "$" + tipPerPerson.toFixed(2);
    document.querySelector(".total-tip").innerText = "$" + totalTip.toFixed(2);
  } else {
    document.querySelector(".person-tip").innerText = "$0.00";
    document.querySelector(".total-tip").innerText = "$0.00";
  }
}
