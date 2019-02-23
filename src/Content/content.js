import React, { useState } from "react";

function Content() {
  const [word, setWord] = useState("");
  const [speak, setSpeak] = useState(false);
  const handleWordInput = e => {
    const value = e.target.value;
    if (value && value !== null) {
      setSpeak(true);
      setWord(value);
    } else {
      setSpeak(false);
    }
  };
  const handleSpeak = () => {
    const speech = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(speech);
  };
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title  is-1 is-cursor-pointer is-size-1-touch">
          Your Pronunciation Helper
        </h1>
        <div className="field has-addons has-addons-centered">
          <p className="control is-expanded is-dark is-large">
            <input
              type="text"
              maxLength="20"
              placeholder="Word"
              className="input has-text-left is-large"
              autoComplete="off"
              required="required"
              onChange={handleWordInput}
            />
          </p>
          <p className="control">
            <button
              type="submit"
              className="button is-info is-large"
              disabled={!speak}
              onClick={handleSpeak}
            >
              Speak
            </button>
          </p>
        </div>
        <div className="field fieldmsg has-text-centered">Word meaning</div>
      </div>
    </div>
  );
}

export default Content;
