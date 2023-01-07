import { FiSearch } from 'react-icons/fi';
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="container_input">
        <input type="text" placeholder='Digite seu CEP...' />

        <button className='btn_search'><FiSearch size={25} color='#ffffff'></FiSearch></button>
      </div>

      <main className="main">
        <h2>CEP: 13240000</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
