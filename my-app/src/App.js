import './App.css';
import './CSS/Homepage.css';
import Homepage from './Pages/Homepage.js';
import Highlight from './Components/Highlight.jsx';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <Highlight />
      </header>
    </div>
  );
}

export default App;
