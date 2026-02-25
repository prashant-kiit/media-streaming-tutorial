import './App.css'

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://localhost:5000/hls/index.m3u8");
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "http://localhost:5000/hls/index.m3u8";
    }
  }, []);

  return (
    <div>
      <h2>HLS Streaming Demo</h2>
      <video ref={videoRef} controls width="700" />
    </div>
  );
}

export default App;
