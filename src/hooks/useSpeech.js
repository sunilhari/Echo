const toSpeak = new SpeechSynthesisUtterance();

const useSpeech = ({ text, rate = 1, pitch = 2, volume = 1, voice,voices }, onEnd) => {
  toSpeak.text = text;
  toSpeak.rate = rate;
  toSpeak.pitch = pitch;
  toSpeak.volume = volume;
  toSpeak.voice = voices[voice];
  if (onEnd) {
    toSpeak.onend = onEnd;
  }
  return [
    toSpeak,
    ({ text, rate = 1, pitch = 2, volume = 1, voice,voices }) => {
      toSpeak.text = text;
      toSpeak.rate = rate;
      toSpeak.pitch = pitch;
      toSpeak.volume = volume;
      toSpeak.voice = voices[voice];
    }
  ];
};

export default useSpeech;
