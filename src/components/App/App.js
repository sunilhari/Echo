import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header";
import Content from "../Content";

function App() {
  const [voices, setVoices] = useState([]);
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = function() {
      setVoices(window.speechSynthesis.getVoices());
    };
  }, []);
  return (
    <div className="container">
      <section className="hero is-dark is-fullheight">
        <Header />
        <Content voices={voices} />
      </section>
    </div>
  );
}

export default App;
