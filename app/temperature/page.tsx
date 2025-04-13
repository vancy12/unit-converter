'use client'
import {useState} from 'react';

const convertTemperature = (value: number, from: string, to: string) => {
    if(from === to) return value;

    // Convert from -> Celsius
    let celcius = 0;
    if (from === 'Fahrenheit') celcius = (value - 32) * (5 / 9);
    else if (from === 'Kelvin') celcius = value - 273.15;
    else celcius = value;

    // Convert Celsius -> to
    if (to === 'Fahrenheit') return celcius * (9 / 5) + 32;
    else if (to === 'Kelvin') return celcius + 273.15;
    else return celcius;
}

export default function TemperatureConverter(){
    const [input, setInput] = useState('');
    const [from, setFrom] = useState('Celcius');
    const [to, setTo] = useState('Kelvin');
    const [result, setResult] = useState('');

    const convert = () => {
        if(input === '' || isNaN(parseFloat(input))){
            setResult('Enter a number to convert');
            return;
        }
        const value = parseFloat(input);
        const converted = convertTemperature(value, from, to);
        setResult(`${converted} ${to}`);
    };
    return(
        <div className='p-8 flex flex-col space-y-4 text-center max-w-md mx-auto'>
            <h2 className='text-xl font-bold mb-6'>Temerature Converter</h2>
            {/* take input */}
            <input type="number"
             value={input} 
             onChange={(e) => setInput(e.target.value)}
             placeholder='Enter number to convert'
             className='border p-2 mr-2'/>

            {/* dropdown menu */}
            <select value={from} 
            onChange={(e) => setFrom(e.target.value)}
            className='border mr-2'>
                {['Celsius', 'Fahrenheit', 'Kelvin'].map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>

            <span>to</span>
            <select value={to}
            onChange={(e) => setTo(e.target.value)}
            className='border mr-2'>
                {['Celsius', 'Fahrenheit', 'Kelvin'].map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
            <button onClick={convert}
            className='bg-blue-500 text-white rounded'>Convert</button>
            <div className='font-semibold' >{result}</div>
        </div>
    );
}