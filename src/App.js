import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>weatherApp</h1>
        <Weather />
        <footer>
          This project was coded by Gabri Sanchez and is{" "}
          <a
            href="https://github.com/Gabs0223/weather-project-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
