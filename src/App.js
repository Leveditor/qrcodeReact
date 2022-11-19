import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [ link, setLink] = useState('');

  function handleQrCode(e) {
    setLink(e.target.value);
  }

  return (
    <div className='container'>
        <QRCode value={link} />
        <input className='input' placeholder='Type your link' value={link} onChange={(e) => handleQrCode(e)} />
    </div>
  );
}

export default App;
