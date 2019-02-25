import React from "react";
import { useLocalStorage } from "../../hooks";

function Settings({ voices }) {
  const [rate, setRate] = useLocalStorage("rate", 1);
  const [pitch, setPitch] = useLocalStorage("pitch", 2);
  const [volume, setVolume] = useLocalStorage("volume", 1);
  const [voice, setVoice] = useLocalStorage("voice", 1);

  const handleRateChange = e => setRate(e.target.value);
  const handlePitchChange = e => setPitch(e.target.value);
  const handleVolumeChange = e => setVolume(e.target.value);
  const handleVoiceChange = e => setVoice(e.target.value);

  return (
    <nav className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Volume</p>
          <p className="title">
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              onChange={handleVolumeChange}
              value={volume}
            />
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Rate</p>
          <p className="title">
            <input
              type="range"
              min={0.1}
              max={2}
              step={0.1}
              onChange={handleRateChange}
              value={rate}
            />
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Pitch</p>
          <p className="title">
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              onChange={handlePitchChange}
              value={pitch}
            />
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Voice</p>
          <select onChange={handleVoiceChange} value={voice}>
            {voices.map((voice, index) => {
              return (
                <option value={index} key={index}>
                  {voice.name}({voice.lang})
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Settings;
