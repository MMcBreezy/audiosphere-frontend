import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className="App-body">
        <Button onClick={() => alert("Button clicked!")}>Click Me!</Button>
      </body>
    </div>
  );
}

export default App;
