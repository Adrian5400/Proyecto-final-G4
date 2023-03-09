import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
  const videoId = 'uLeAot4Zrxo'; // El ID del video de YouTube que quieres reproducir

  const videoId2 = 'f20qrZcD1LE';

  return (
    <div>
    <div>
      <YouTube videoId={videoId} opts={{ width: '640', height: '360' }} />
    </div>

<div>
<YouTube videoId={videoId2} opts={{ width: '640', height: '360' }} />
</div>
</div>
  );
}

export default VideoPlayer;