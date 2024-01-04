
import Repo from './components/repo';
import Perfil from './components/perfil';
import './global.css';


function App() {

  return (
    <>
      <Perfil endereco="https://github.com/augustosilveriosoares.png" nome="Augusto" />
      <Repo />
    </>
  )
}

export default App
