import ReactPlayer from "react-player";
import React, { useRef } from "react";
import "./index.scss";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

function PlayerComponent() {
  const playerRef = useRef(null);
  return (
    <div className="getherly-video">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        playing
        width={"80%"}
        height="450px"
        controls
        muted
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </div>
  );
}
export default PlayerComponent;
