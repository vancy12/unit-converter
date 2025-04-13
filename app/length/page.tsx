'use client'
import {useState} from 'react';

const lengthUnits : Record<string,number> = {
    milimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
};

export default function LengthConverter(){
    // enter the length to convert
    const [input, setInput] = useState('');
    // unit from
    const [from, setFrom] = useState('meter'); // default
    // unit to
    const [to, setTo] = useState('kilometer'); // default
    // result
    const [result, setResult] = useState('');

    // convert logic on clicking convert button
    const convert = () => {
        if (input === '' || isNaN(parseFloat(input))) {
            setResult('Enter a number to convert');
            return;
        }
        // convert to standard meters
        const meters = parseFloat(input) * lengthUnits[from];
        const converted = meters / lengthUnits[to];
        setResult(`${converted} ${to}`);
    }

    return(
        <div className='p-8 flex flex-col space-y-4 text-center max-w-md mx-auto'>
            <h2 className='text-xl font-bold mb-6'>Length Converter</h2>
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
                {Object.keys(lengthUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>

            <span>to</span>
            <select value={to}
            onChange={(e) => setTo(e.target.value)}
            className='border mr-2'>
                {Object.keys(lengthUnits).map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
            <button onClick={convert}
            className='bg-blue-500 text-white rounded'>Convert</button>
            <div className='font-semibold' >{result}</div>
        </div>
    );
}
