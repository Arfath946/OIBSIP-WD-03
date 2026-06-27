function convertTemperature() {

    const temperatureInput = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");
    const celsiusResult = document.getElementById("celsiusResult");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const kelvinResult = document.getElementById("kelvinResult");

    error.textContent = "";

    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";

    if (temperatureInput === "") {
        error.textContent = "Please enter a temperature value.";
        return;
    }

    const temperature = Number(temperatureInput);

    if (isNaN(temperature)) {
        error.textContent = "Please enter a valid numeric value.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        if (temperature < -273.15) {
            error.textContent = "Temperature cannot be below absolute zero (-273.15°C).";
            return;
        }

        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;

    }

    else if (unit === "fahrenheit") {

        if (temperature < -459.67) {
            error.textContent = "Temperature cannot be below absolute zero (-459.67°F).";
            return;
        }

        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    else if (unit === "kelvin") {

        if (temperature < 0) {
            error.textContent = "Temperature cannot be below absolute zero (0 K).";
            return;
        }

        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";
}