import './App.css';
import Clima from './componentes/Clima';
import Transito from './componentes/Transito';

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
