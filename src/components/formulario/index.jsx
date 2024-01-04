import { useState, useEffect } from "react";
import './Formulario.module.css'
const Formulario = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState(null);
  const [faixaIMC, setFaixaIMC] = useState('');


  useEffect(() => {
    calcularIMC();
  }, [peso, altura])


  const calcularIMC = () => {


    // Converter peso e altura para números
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    // Calcular o IMC
    const imc = pesoNumero / Math.pow(alturaNumero, 2);
    const imcArredondado = imc.toFixed(1);
    setResultadoIMC(imcArredondado);

    console.log(imcArredondado);
    // Determinar a faixa de IMC

    if (imcArredondado < 18.5) {
      setFaixaIMC('Abaixo do Peso');
    } else if (imcArredondado < 24.9) {
      setFaixaIMC('Peso Normal');
    } else if (imcArredondado < 29.9) {
      setFaixaIMC('Sobrepeso');
    } else if (imcArredondado < 34.9) {
      setFaixaIMC('Obesidade Grau I');
    } else if (imcArredondado < 39.9) {
      setFaixaIMC('Obesidade Grau II');
    } else {
      setFaixaIMC('Obesidade Grau III');
    }    // Atualizar o estado com o resultado do IMC e a faixa



    console.log(faixaIMC);
  };


  return (
    <div className="container">
      <div>
        <h1> Calcula IMC</h1>
      </div>
      <div>
        <input type="number" placeholder="Peso em kg (ex: 120)" onChange={event => setPeso(event.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Altura em metros (ex: 1,85)" onChange={event => setAltura(event.target.value)} />
      </div>
      <div>
        {resultadoIMC > 0 && (
          <>
            <h4> Seu IMC é : {resultadoIMC}</h4>
            <p>{faixaIMC}</p>
          </>
        )}

      </div>

    </div>

  )
}

export default Formulario;
