import './App.css';
import countdownMaker from "./components/countdown";

function App() {

  const CountDown = countdownMaker();

  return (
      <div className="App">
        <header className="App-header">
          <CountDown/>
        </header>
      </div>
  );
}

export default App;
