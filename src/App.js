import './App.css';
import {ClockBody, Title} from './components/index.js';

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
