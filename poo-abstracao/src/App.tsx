import './App.css'
import { useState } from 'react';
import { EmailService } from './services/EmailService';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [corpo, setCorpo] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    const email = new EmailService();
    email.enviar(destinatario, assunto, corpo);
    setEnviado(true);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Destinatário"
        value={destinatario}
        onChange={e => setDestinatario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assunto"
        value={assunto}
        onChange={e => setAssunto(e.target.value)}
      />
      <textarea
        placeholder="Corpo do e-mail"
        value={corpo}
        onChange={e => setCorpo(e.target.value)}
      />
      <button onClick={handleEnviar}>Enviar</button>
      {enviado && <p>E-mail enviado com sucesso!</p>}
    </div>
  );
}

export default App
