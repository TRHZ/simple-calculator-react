import { useState } from "react"
import './App.css'

function App() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChange1 = (event) => {
    console.log(event);
    setNumeroUno(event.target.value);
  };
  const handleChange2 = (e) => {
    setNumeroDos(e.target.value);
  };
  console.log(numeroUno, numeroDos);

  const handleSumar = (event) => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
    console.log(event);
  }
  const handleRestar = (event) => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
    console.log(event);
  }
  const handleMultiplicar = (event) => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
    console.log(event);
  }
  const handleDividir = (event) => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
    console.log(event);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type="number" 
      placeholder="Numero 1" 
      value={numeroUno} 
      onChange={handleChange1}/>

      <input type="number" 
      placeholder="Numero 2" 
      value={numeroDos} 
      onChange={handleChange2}/>

      <hr/>
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleMultiplicar}>Multiplicar</button>
      <button onClick={handleDividir}>Dividir</button>
      <hr/>
      <p>Resultado: {resultado} </p>
    </>
  )
}

export default App
