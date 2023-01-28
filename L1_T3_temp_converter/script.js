function convertTemperature(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let inputValue = input.value;
    let outputValue = output.value;

    //Celsius
    if(inputValue === "celsius" && outputValue === "Fahrenheit"){
      result.value = Number((val.value) * 9/5) + 32;
    }
    else if(inputValue === "celsius" && outputValue === "celsius"){
      result.value = val.value;
    }


    //Fahrenheit
    if(inputValue === "Fahrenheit" && outputValue === "celsius"){
      result.value = Number((val.value - 32) * 5) / 9;
    }
    else if(inputValue === "Fahrenheit" && outputValue === "Fahrenheit"){
      result.value = val.value;
    }



  }

  function reset(){
    convertTemperature();
  }