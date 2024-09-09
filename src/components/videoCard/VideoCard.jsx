import VideoOffcanvas from "../videoOffcanvas/VideoOffcanvas";

import "./videoCard.css";

export default function VideoCard({ data }) {
  return (
    <div
      className="video-card position-relative fs-1"
      style={{
        backgroundImage: `url(${data.path})`,
        width: `${data.width}`,
        height: `${data.height}`,
        minHeight: `${data.minHeight}`,
      }}
    >
      <div className="position-absolute top-50 start-50 translate-middle">
        <VideoOffcanvas />
      </div>
    </div>
  );
}
