function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}

function convertFahrenheitToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("result").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
}