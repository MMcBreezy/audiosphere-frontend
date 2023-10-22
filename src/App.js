import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => alert("Button clicked!")}>Click Me!</Button>
      </header>
    </div>
  );
}

export default App;
