import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Edmonton" />
        <footer>
          This was coded by{" "}
          <a
            href="https://www.linkedin.com/in/priyanka-ganesh-950629206/"
            target="_blank"
            rel="noreferrer"
          >
            Priyanka{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/PSK76/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://awesome-swirles-4625ca.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
