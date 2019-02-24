const toSpeak = new SpeechSynthesisUtterance();

const useSpeech = ({ text, rate = 1, pitch = 2, volume = 1 }, onEnd) => {
  toSpeak.text = text;
  toSpeak.rate = rate;
  toSpeak.pitch = pitch;
  toSpeak.volume = volume;

  if (onEnd) {
    toSpeak.onend = onEnd;
  }
  return [
    toSpeak,
    ({ text, rate = 1, pitch = 2, volume = 1 }) => {
      toSpeak.text = text;
      toSpeak.rate = rate;
      toSpeak.pitch = pitch;
      toSpeak.volume = volume;
    }
  ];
};

export default useSpeech;
