import GameVideo from "../../assets/video.mp4";

function PlayGameSection() {
  return (
    <section className="video-section">
      <video src={GameVideo} loop muted></video>
      <div className="button-container">
        <button type="button">PLAY NOW</button>
        <div className="top-l-border"></div>
        <div className="top-r-border"></div>
        <div className="bottom-l-border"></div>
        <div className="bottom-r-border"></div>
      </div>
    </section>
  );
}

export default PlayGameSection;
