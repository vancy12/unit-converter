'use client'
import {useState} from 'react';

const weightUnits: Record<string, number> = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
}



export default function WeightConverter(){
    const [input, setInput] = useState('');
    const [from, setFrom] = useState('gram');
    const [to, setTo] = useState('kilogram');
    const [result, setResult] = useState('');

    const convert = () => {
        if(input === '' || isNaN(parseFloat(input))){
            setResult("Enter a number to convert");
            return;
        }
        const grams = parseFloat(input) * weightUnits[from];
        const converted = grams / weightUnits[to];
        setResult(`${converted} ${to}`);
    };

    return(
        <div className='p-8 flex flex-col space-y-4 text-center max-w-md mx-auto'>
            <h2 className='text-xl font-bold mb-6'>Weight Converter</h2>
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
                {Object.keys(weightUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>

            <span>to</span>
            <select value={to}
            onChange={(e) => setTo(e.target.value)}
            className='border mr-2'>
                {Object.keys(weightUnits).map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
            <button onClick={convert}
            className='bg-blue-500 text-white rounded'>Convert</button>
            <div className='font-semibold' >{result}</div>
        </div>
    );
}