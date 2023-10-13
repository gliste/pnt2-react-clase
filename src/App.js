//import logo from './logo.svg';
import User from './componets/User/User';
import './App.css';

function App() {
  const msg = "Soy Gabriela";
  return (
    <div className="App-header">
      <h1>Hola Mundo: {msg}</h1>
      <User Nombre="Veronica" />
    </div>
  );
}

export default App;
