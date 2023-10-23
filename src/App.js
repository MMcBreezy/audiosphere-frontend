import "./App.css";
import Button from "./components/Button";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className="App-body">
        <Feed />
        <SideContent />
        {/* <Button onClick={() => alert("Button clicked!")}>Click Me!</Button> */}
      </body>
      <Footer />
    </div>
  );
}

export default App;
