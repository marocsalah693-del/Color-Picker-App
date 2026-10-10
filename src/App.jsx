import { useState } from 'react'
import './App.css'

export default function App() {
  const [color, setColor] = useState("#ffffff")

  const colorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <p className="title">Choose a color using the color input below:</p>
      <input 
        type="color" 
        id="color-input" 
        value={color}
        onChange={colorChange} 
      />
    </div>
  )
}