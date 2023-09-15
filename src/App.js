import logo from "./logo.svg";
import "./App.css";
import firstBG from './images/first.png'

function App() {
  return (
    <div className="container">
      <div style={{backgroundImage: `url(${firstBG})`,  backgroundSize: "cover", backgroundPosition: "center" }} className="full-size">
        <p></p>
      </div>
      
      <div className="full-size"></div>

    </div>
  );
}

export default App;
