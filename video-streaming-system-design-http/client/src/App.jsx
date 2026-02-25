import "./App.css";

function App() {
  return (
    <>
      <h1>Video Streaming System Design</h1>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <video width="700" controls src="http://localhost:5000/video">
          Your browser does not support video.
        </video>
      </div>
    </>
  );
}

export default App;
