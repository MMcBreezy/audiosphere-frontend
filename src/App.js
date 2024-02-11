import "./App.css";
import Feed from "./components/Feed/Feed.js"
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import SideContent from "./components/SideContent.js";

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
