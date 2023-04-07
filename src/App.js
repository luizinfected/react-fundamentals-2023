import './App.css';
import { useState } from 'react';
import Imagem from './components/ImagemExemplo';
import ComponenteData from './components/ComponenteData';
import ListData from './components/ListData';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import CarList from './components/CarList';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
function App() {
  function showMessage(){
    console.log('Função enviada através de props')
  }

  const [name] = useState('Luiz')
  const [message,setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <Imagem tamanho="550" tamanho2="550" />

      <ComponenteData/>

      <ListData/>

      <ConditionalRender/>

      {/* destructure props, super importante. */}
      <CarDetails brand="VW" color="Preto" newCar={true} turbo={true}/>
      <CarDetails brand="Mitsubishi" color="Branco" newCar={true} turbo={false} />
      {/* reaproveitando componente */}

      {/* Usando map para mapear */}
      <CarList/>

      {/* children */}
      <Container dado="Luiz">
      <p>Children</p>
      </Container>

      {/* funcao por props */}
      <ExecuteFunction myFunction={showMessage}/>

      <Message msg={message}/>

      <ChangeMessage handleMessage={handleMessage}/>

      <h2 style={name === 'Luiz' ? {color: "blue"} : {color: "red"}}>{name}</h2>
      
    </div>
  );
}

export default App;
