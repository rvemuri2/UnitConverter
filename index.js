let button = document.getElementsByTagName("button");

let value = document.getElementsByTagName("input");

let length = document.getElementsByTagName("p");

button[0].addEventListener("click", function () {
  //console.log(value[0].value)
  let num1 = Number(value[0].value * 3.281);
  let num2 = Number(value[0].value) / 3.281;
  length[0].innerHTML = `${value[0].value} meters = ${
    Math.round(num1 * 1000) / 1000
  } feet | ${value[0].value} feet = ${Math.round(num2 * 1000) / 1000} meters`;

  let num3 = Number(value[0].value * 0.264);
  let num4 = Number(value[0].value / 0.264);

  length[1].innerHTML = `${value[0].value} liters = ${
    Math.round(num3 * 1000) / 1000
  } gallons | ${value[0].value} gallons = ${
    Math.round(num4 * 1000) / 1000
  } liters`;

  let num5 = Number(value[0].value * 2.204);
  let num6 = Number(value[0].value / 2.204);

  length[2].innerHTML = `${value[0].value} kilograms = ${
    Math.round(num5 * 1000) / 1000
  } pounds | ${value[0].value} pounds = ${
    Math.round(num6 * 1000) / 1000
  } kilograms`;
});
