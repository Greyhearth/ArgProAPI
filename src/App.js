import './App.css';
import Clima from './componentes/Clima';
import Transito from './componentes/Transito';

// App principal, llama a Clima.jsx y a Transito.jsx, además, su CSS da el estilo que divide ambas "dashboards"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clima/>
        <Transito/>
      </header>
    </div>
  );
}

export default App;
