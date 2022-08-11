import logo from "./logo.svg";
import "./App.css";
import { ApiData } from "./components/ApiData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ApiData />
      </header>
    </div>
  );
}

export default App;
