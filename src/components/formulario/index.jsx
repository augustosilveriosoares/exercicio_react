import { useState, useEffect } from "react";

const Formulario = () => {

  let [notaA, setNotaA] = useState(0);
  let [notaB, setNotaB] = useState(0);
  let [notaC, setNotaC] = useState(0);

  useEffect(() => {
    console.log("mudanca de estado")
  }, [notaA, notaB])


  return (
    <form>
      <ul>
        {['João', 'Maria', 'Jose'].map(item => (
          <>
            <li >{item}</li>
          </>
        ))}
      </ul>
      <input type="number" placeholder="Nota A" onChange={event => setNotaA(event.target.value)} />
      <input type="number" placeholder="Nota B" onChange={event => setNotaB(event.target.value)} />
      <input type="number" placeholder="Nota C" onChange={event => setNotaC(event.target.value)} />
      <br />
      {notaA}
      <br />
      {notaB}
      <br />
      {notaC}
      <br />
    </form>
  )
}

export default Formulario;
