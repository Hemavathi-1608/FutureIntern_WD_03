document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;
    let unit;

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number.');
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Conversion logic
    switch (selectedUnit) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            unit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            unit = 'Celsius';
            break;
        case 'Kelvin':
            // Additional conversions
            if (temperature < 0) {
                alert('Kelvin cannot be negative.');
                return;
            }
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
            unit = 'Celsius';
            break;
    }

    // Display the result
    document.getElementById('resultArea').innerText = 
        `Converted Temperature: ${convertedTemperature.toFixed(2)} °${unit.charAt(0)}`;
});
