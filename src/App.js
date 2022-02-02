import react from 'react';
import './App.css';
import Atanagildo from './img/rey_atanagildo.png';
import Ataulfo from './img/rey_ataulfo.png';
import Ervigio from './img/rey_ervigio.png';
import incognito from './img/rey_incognito.png';

function App() {
  let names = ['Atanagildo', 'Ataulfo', 'Ervigio'];

  const cambioTexto = (evt) => evt.target.innerHTML === 'visto' ? evt.target.innerHTML = '' : evt.target.innerHTML = 'visto';
  const cambioIncognito = (evt) => {
    evt.target.src.includes('incognito') ? evt.target.style.visibility = 'hidden' : evt.target.src = incognito;
    evt.target.parentNode.style.backgroundColor = 'white';
  };

  return (
    <div className='container'>
      <div className='container_box'>
        <img className='img' src={Atanagildo} onClick={cambioIncognito} />
        <div className='names' onClick={cambioTexto}> {names[0]} </div>
      </div>

      <div className='container_box'>
        <img className='img' src={Ataulfo} onClick={cambioIncognito} />
        <div className='names' onClick={cambioTexto}> {names[1]} </div>
      </div>

      <div className='container_box'>
        <img className='img' src={Ervigio} onClick={cambioIncognito} />
        <div className='names' onClick={cambioTexto}> {names[2]} </div>
      </div>
    </div>
  );
}

export default App;
