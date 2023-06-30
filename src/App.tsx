import './App.css';

import Board from './components/Board';
import Row from './components/Row';
import SolveBtn from './components/SolveBtn';

function App() {
  return (
    <>
      <Board />
      <SolveBtn />
      <br/>
      <Row rowIndex={0} />
    </>
  );
}

export default App;
