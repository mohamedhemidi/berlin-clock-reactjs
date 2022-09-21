import './App.css';
import {ClockBody, Title} from './components/index.js';
import UIVariables from './UIVariables';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Title />
        <ClockBody />
      </div>
    </div>
  );
}

export default App;
