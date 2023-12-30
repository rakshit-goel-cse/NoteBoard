import React, { useState } from 'react';
import Board from '../Board/Board.js';
import './Container.css'
function Container(){

    const [color, setColor] = useState();
    const [size, setsize] = useState(2);
    const handleColor = (event) =>{
        const newColor = event.target.value;
        setColor(newColor);
    }
    const sizes =[];
    for (let i=1; i <= 16; i+=1){
        sizes.push(i);
    }

    return(
        <div className='background' style={{backgroundColor:color}}>
            <input className='color' type="color" id="color"
            value={color} onChange={handleColor}></input>
            <input className='size' type='range' min={0.5 } max={16} value={size} step={.5}
            onChange={(e)=>{setsize(
                e.target.value
            )}}></input>
            <span className='value'>{size}</span>
            <select className='selector' id='selectsize' value={size}
            onChange={(e)=>{setsize(
                e.target.value
            )}}>
                {sizes.map((value,index) =>(
                    <option value={value}>{value}</option>
                ))}
            </select>
            <Board selectedColor={color} selectedSize={size}/>
        </div>
    )
}

export default Container;