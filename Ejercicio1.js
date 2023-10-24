//--------------------------------------Ejercicio 1
const eje1Btn = document.getElementById('eje1-btn');
const eje1Inp1 = document.getElementById('eje1-1');
const eje1Inp2 = document.getElementById('eje1-2');
const eje1Inp3 = document.getElementById('eje1-3');
const eje1Out = document.getElementById('eje1-salida');

eje1Btn.addEventListener('click', () => {
    
    const valorInput1 = eje1Inp1.value;
    const valorInput2 = eje1Inp2.value;
    const valorInput3 = eje1Inp3.value;
    
    const array = [valorInput1, valorInput2, valorInput3]
    const arraySinRepetidos = [...new Set(array)];

    eje1Out.value = `${array.sort((a, b) => a - b)} | ${array.sort((a, b) => b - a)} | ${array.length!=arraySinRepetidos.length ? 'Repetidos' : ''}`;
});

//--------------------------------------Ejercicio 2

const eje2Btn = document.getElementById('eje2-btn');
const eje2Inp1 = document.getElementById('eje2');
const eje2OutF = document.getElementById('eje2-salidaF');
const eje2OutK = document.getElementById('eje2-salidaK');


eje2Btn.addEventListener('click', ()=>{
    const celcius = parseFloat(eje2Inp1.value);
    
    if (isNaN(celcius)) {
        alert('Ingresa un número válido en el campo de Celsius.');
        return; // Sale de la función si no es un número válido
    }

    eje2OutF.value = `${(celcius*(9/5))+32}°F`;
    eje2OutK.value = `${celcius+273.15}°K`;
});