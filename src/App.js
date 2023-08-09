import Header from './components/Header';
import Weather from './components/Weather';
import './style.css';

function App() {
  return (
    <div className="App">
        <Header className="App-Header"></Header>
        <Weather></Weather>
    </div>
  );
}

export default App;
