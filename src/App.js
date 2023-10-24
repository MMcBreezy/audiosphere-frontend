import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Feed />
        <SideContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
