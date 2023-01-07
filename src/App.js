import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './App.css'

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    if (input === '') {
      alert('Preencha algum CEP!')
      return
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="container_input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Digite seu CEP...' />

        <button className='btn_search' onClick={handleSearch}><FiSearch size={25} color='#ffffff'></FiSearch></button>
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
