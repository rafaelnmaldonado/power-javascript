var arrayPower = document.querySelectorAll(".power");

for (let i = 0; i < arrayPower.length; i++) {
  console.log(i)
  var power = arrayPower[i];

  var unBase = power.querySelector(".num-base");
  var base = unBase.textContent;

  var unExponent = power.querySelector(".num-exponent");
  var exponent = unExponent.textContent;

  var unResult = power.querySelector(".num-result");
  var unPronounce = power.querySelector(".txt-pronounce");

  var baseIsValid = true;
  var exponentIsValid = true;

  if (isNaN(base) && isNaN(exponent)) {
    power.classList.add("invalid-power");
    console.log("Invalid base and exponent!");
    baseIsValid = false;
    exponentIsValid = false;
    unResult.textContent = "Invalid base and exponent!";
  }
  else {
    if (isNaN(base)) {
      power.classList.add("invalid-power");
      console.log("Invalid base!");
      baseIsValid = false;
      unResult.textContent = "Invalid base!";
    }

    if (isNaN(exponent)) {
      power.classList.add("invalid-power");
      console.log("Invalid exponent!");
      exponentIsValid = false;
      unResult.textContent = "Invalid exponent!";
    }
  }
  determined: {
    if (baseIsValid && exponentIsValid) {

      var result = 1;
      var det = true;

      if (exponent > 0) {
        for (let i = 1; i <= exponent; i++) {
          result = result * base;
        }
      }

      else if (exponent == 0) {
        if (base == 0) {
          det = false;
          unResult.textContent = "No agreed-upon value to zero to the power of zero!";
          power.classList.add("invalid-power");
          break determined;
        }
        result = 1;
      }

      else {
        if (base == 0) {
          unResult.textContent = "No agreed-upon value to zero to the power of a negative number!";
          power.classList.add("invalid-power");
          break determined;
        }
        for (let i = -1; i >= exponent; i--) {
          result = result * base;
        }
        result = 1/result;
      }
      result = result.toFixed(2);
      unResult.textContent = result;

      if (exponent > 0) {
        if (exponent % 10 == 1) {
          unPronounce.textContent = base + " raised to the " + exponent + "st power equals to " + result;
        }
        else if (exponent % 10 == 2) {
          unPronounce.textContent = base + " raised to the " + exponent + "nd power equals to " + result;
        }
        else if (exponent % 10 == 3) {
          unPronounce.textContent = base + " raised to the " + exponent + "rd power equals to " + result;
        }
        else {
          unPronounce.textContent = base + " raised to the " + exponent + "th power equals to " + result;
        }
      }
      else {
        unPronounce.textContent = base + " raised to the power of " + exponent + " equals to " + result;
      }
    }
  }
}
