import React, { useState } from 'react'

const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = React.createRef()

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div>
      <button onClick={handleClick}>{isPlaying ? 'Stop' : 'Play'}</button>
      {isPlaying && (
        <audio
          ref={audioRef}
          src='/mp3/countdwn-23609.mp3'
          autoPlay
          controls
          onEnded={handleAudioEnded}
        />
      )}
    </div>
  )
}

export default AudioButton
