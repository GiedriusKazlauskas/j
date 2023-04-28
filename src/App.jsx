
import './App.scss';
import Button from './komponentas/Button';
import Jokes from './komponentas/Jokes';
import { Code } from './komponentas/Store';

function App() {
  return (
    <Code>
    <div className="App">
      <h1>Some joke's</h1>
      <Button/>
     <Jokes />
    </div>
  </Code>
  );
}

export default App;
