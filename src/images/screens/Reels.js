import React, { useState } from 'react';
import ReactPlayer from 'react-player'



const Reels = () => {
  const [videos, setVideos] = useState([
    { url: 'https://www.youtube.com/watch?v=XQJNVF9pFYs' },
    { url: 'https://www.youtube.com/watch?v=XQJNVF9pFYs' }
  ]);

  return (
    <div style={{ overflowX: 'scroll' }}>
      {videos.map((video, index) => (
        <video key={index} controls src='https://www.youtube.com/watch?v=XQJNVF9pFYs' style={{ width: '300px', height: '200px', marginRight: '10px' }} />
      ))}
      <ReactPlayer width='100%'
            height='100%'
            controls = {true}
            url='C:/Users/Sheethala/OneDrive/Desktop/HealthHack/healthhack/src/videos/1.mp4' />
    </div>
  );
};

export default Reels;