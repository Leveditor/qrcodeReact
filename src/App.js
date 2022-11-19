import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRcodeLink from 'qrcode';

import './App.css';

function App() {
  const [ link, setLink] = useState('');
  const [ qrcodeLink, setQrcodeLink ] = useState('');


  function handleGenerate(link_url) {
    QRcodeLink.toDataURL(link_url, {
      width: 300,
      margin: 3,
    }, function(url) {
      setQrcodeLink(url);
    })
  }

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='container'>
        <QRCode value={link} />
        <input className='input' placeholder='Type your link' value={link} onChange={(e) => handleQrCode(e)} />

        <a href={qrcodeLink} download={`qrcode.png`}>Download Qrcode</a>
    </div>
  );
}

export default App;
