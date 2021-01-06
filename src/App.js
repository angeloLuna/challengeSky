import NumberMask from './components/NumberMasking'
import OrdinalNumbers from './components/OrdinalNumbers'
import PolishNotation from './components/PolishNotation'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sky Alert Challenge</h1>
        <h2>by Angel Luna</h2>
      </header>
      <body>
        <NumberMask />
        <OrdinalNumbers />
        <PolishNotation />
      </body>
    </div>
  );
}

export default App;
