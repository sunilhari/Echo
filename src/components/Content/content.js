import React, { useState } from "react";
import { useSpeech } from "../../hooks";
import Settings from "../Settings";

function Content({ voices }) {
  const [text, setText] = useState("");
  const { pitch, volume, rate, voice } = window.localStorage;
  const [speech, setSpeech] = useSpeech({
    text: String(text).toLowerCase(),
    pitch,
    volume,
    rate,
    voice,
    voices
  });
  const handleWordInput = e => {
    const value = String(e.target.value).trim();
    if (value && value !== null) {
      setText(value);
    } else {
      setText("");
    }
  };
  const handleSpeak = () => {
    const { pitch, volume, rate, voice } = window.localStorage;
    setSpeech({ text, pitch, volume, rate, voice, voices });
    window.speechSynthesis.speak(speech);
  };
  return (
    <div className="hero-body">
      <div className="container has-text-centered is-fluid">
        <div className="field has-addons has-addons-centered columns">
          <p className="control is-expanded is-dark column is-8">
            <input
              type="text"
              maxLength="20"
              placeholder="Word"
              className="input has-text-left"
              autoComplete="off"
              required="required"
              onChange={handleWordInput}
            />
          </p>
          <p className="control column is-4">
            <button
              type="submit"
              className="button is-info"
              disabled={!Boolean(text)}
              onClick={handleSpeak}
            >
              Speak
            </button>
          </p>
        </div>
        <div className="column is-12">
          <Settings voices={voices} />
        </div>
      </div>
    </div>
  );
}

export default Content;
