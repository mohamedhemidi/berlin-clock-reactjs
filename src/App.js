import './App.css';
import {ClockBody, Title} from './components/index.js';
import { Converter } from './interfaces';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Title />
        <Converter />
      </div>
    </div>
  );
}

export default App;
