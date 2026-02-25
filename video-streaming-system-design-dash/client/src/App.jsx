import './App.css'
import React, { useEffect, useRef } from "react";
import * as dashjs from "dashjs";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = dashjs.MediaPlayer().create();
    player.initialize(
      videoRef.current,
      "http://localhost:5000/dash/manifest.mpd",
      true
    );
  }, []);

  return (
    <div>
      <h2>DASH Streaming Demo</h2>
      <video ref={videoRef} controls width="700" />
    </div>
  );
}

export default App;
