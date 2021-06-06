import logo from './poser.svg';
import './App.css';

function App() {
  return (
    <div className="App"><img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <button onClick={handleRunTraining}>Run training</button>
      </header>
    </div>
  );
}

export default App;

 const handleRunTraining = (event) => {
   console.log('Run training')
 };