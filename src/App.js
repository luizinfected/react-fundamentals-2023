import './App.css';


function App() {

  const numberA = 1;
  const numberB = 5;

  function soma(a,b){
    return console.log(a + b)
  }
  return (
    <div className="App">
      <p>{numberA}</p>
      <p>{numberB}</p>

      <button onClick={soma(numberA, numberB)}>Soma</button>
    </div>
  );
}

export default App;
