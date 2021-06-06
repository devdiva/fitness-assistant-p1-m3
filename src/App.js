import logo from './poser.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import { isCompositeComponent } from 'react-dom/test-utils';

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
  const simpleTensor = tf.tensor([[1, 2], [3, 4]]);
  simpleTensor.print();
  console.log('Run training')
};