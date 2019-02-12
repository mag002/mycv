import React from "react";
import contentCss from "../Content/Content.module.css";
import interestCss from "./Interest.module.css";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import video1 from "./dance1.mp4";
import video2 from "./dance2.mp4";

const VideoList = () => {
  return (
    <div className={interestCss.video}>
      <Player playsInline src={video1} fluid={false} height={200} muted />

      <Player playsInline src={video2} fluid={false} height={200} muted />
    </div>
  );
};
const interest = props => {
  return (
    <section id={props.id} className={interestCss.interest}>
      <h1 className={contentCss.title}>interest</h1>
      <p>{props.interest.content}</p>

      <h2>My dance videos (cut)</h2>
      <VideoList />
    </section>
  );
};

export default interest;
