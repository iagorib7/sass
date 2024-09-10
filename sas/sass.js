function converter() {
    
    var fahrenheit = document.getElementById('fahrenheit').value;
    
  
    if (isNaN(fahrenheit)) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número válido.';
        return;
    }
    

    var celsius = (fahrenheit - 32) * 5 / 9;
    
  
    document.getElementById('resultado').innerText = `${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`;
}