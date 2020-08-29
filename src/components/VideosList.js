import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //destructuring
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    ); //left side is props value
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
