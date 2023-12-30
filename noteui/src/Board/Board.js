import React, { useEffect, useRef } from 'react';
import './Board.css';
function Board({selectedColor,selectedSize}) {
    
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const isDrawing = useRef(false);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!contextRef.current) {  
      const dpi = window.devicePixelRatio;
      canvas.width = canvas.clientWidth * dpi;
      canvas.height = canvas.clientHeight * dpi;
      }

      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.strokeStyle = selectedColor;
      context.lineWidth = selectedSize;
  
      contextRef.current = context;
    }, [selectedColor,selectedSize]);

    
  
    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      isDrawing.current = true;
    };
  
    const draw = ({ nativeEvent }) => {
      if (!isDrawing.current) return;
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    };
  
    const endDrawing = () => {
      contextRef.current.closePath();
      isDrawing.current = false;
    };

    return(
        <>
            <canvas className='canvas'
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            ></canvas>
        </>
    )
}
export default Board;