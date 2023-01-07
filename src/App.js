import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './App.css'
import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [CEP, setCEP] = useState({})

  async function handleSearch() {
    if (input === '') {
      alert('Preencha algum CEP!')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCEP(response.data)
      setInput('')
    } catch {
      alert('Erro!')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="container_input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Digite seu CEP...' />

        <button className='btn_search' onClick={handleSearch}><FiSearch size={25} color='#ffffff'></FiSearch></button>
      </div>

      {Object.keys(CEP).length > 0 && (
        <main className="main">
          <h2>CEP: {CEP.cep}</h2>

          <span>{CEP.logradouro}</span>
          <span>Complemento: {CEP.complemento}</span>
          <span>{CEP.bairro}</span>
          <span>{CEP.localidade} - {CEP.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
