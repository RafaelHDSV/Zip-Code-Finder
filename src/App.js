import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder='Digite seu CEP...' />

        <button className='btn_search'><FiSearch size={25} color='#ffffff'></FiSearch></button>
      </div>


    </div>
  );
}

export default App;
