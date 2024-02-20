function convert() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    var kelvin = (celsius + 273.15);
    document.getElementById('kelvinResult').innerText = 'Temperatura em Kelvin: ' + kelvin.toFixed(2);
}