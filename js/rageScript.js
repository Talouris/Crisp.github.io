let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");
const inputElements = document.querySelectorAll(".input");
const rangeFill = document.querySelector(".range-fill");

function validateRange() {
  let minPrice = parseInt(inputElements[0].value);
  let maxPrice = parseInt(inputElements[1].value);

  // if (isNaN(minPrice)) minPrice = 0;
  // if (isNaN(maxPrice)) maxPrice = 500;

  if (minPrice > maxPrice) {
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  const minPercentage =  ((minPrice+5) / 500) * 100;
  const maxPercentage =  ((maxPrice) / 500) * 100;

  console.log(maxPrice, ' ', minPrice)
  console.log(maxPercentage, ' ', minPercentage)

  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";

  minValue.innerHTML = minPrice + ".00" + " " +"EUR";
  maxValue.innerHTML = maxPrice + ".00" + " " + "EUR";
}

inputElements.forEach((element) => {
  element.addEventListener("input", validateRange);
});

validateRange();