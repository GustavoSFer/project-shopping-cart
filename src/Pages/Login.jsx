import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MyContext from '../MyContext/MyContext';
import { isValidEmail, isValidPassword } from '../Utils/Validacao';
import '../App.css';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);
  const { MIN_PASSWORD_LANGTH } = useContext(MyContext);

  const handleClick = () => {
    if (isValidEmail(email) && isValidPassword(password, MIN_PASSWORD_LANGTH)) {
      alert('redirecionar para a proxima tela');
    } else {
      setMsgErro(true);
    }
  };

  return (
    <main className="container-login container position-absolute top-50 start-50 translate-middle">
      <h1 className="txt-login">Login</h1>
      <div className="width-input-login">
        <Input
          type="text"
          name="email"
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p className="min-password text-end">
          {`Caracteres minimo para senha: ${MIN_PASSWORD_LANGTH}`}
        </p>
        <Button click={handleClick}>Entrar</Button>
        { msgErro && <p className="text-danger">E-mail ou senha incorreto!</p> }
      </div>
      <p className="txt-cadastro">
        Não possui cadastro?
      </p>
      <Button click={() => history('/cadastro')} sty="cadastrar"> Cadastrar</Button>
    </main>
  );
}

export default Login;
