// server.js
const NodeMediaServer = require("node-media-server");

const config = {
  logType: 4,
  rtmp: {
    port: 1935, // RTMP ingest port
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000, // HLS output port
    mediaroot: "./media",
    allow_origin: "*",
  },
  trans: {
    ffmpeg: "/opt/homebrew/bin/ffmpeg", // FFmpeg path
    tasks: [
      {
        app: "live",
        hls: true,
        hlsFlags: "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
        mp4: false,
        dash: false,
      },
    ],
  },
};

const nms = new NodeMediaServer(config);

nms.on("prePublish", (id, StreamPath) => {
  console.log("🟢 Stream started:", StreamPath);
});

nms.on("donePublish", (id, StreamPath) => {
  console.log("🔴 Stream ended:", StreamPath);
});

nms.run();

console.log("RTMP server: rtmp://localhost:1935/live/<stream-key>");
console.log("HLS  output: http://localhost:8000/live/<stream-key>/index.m3u8");
