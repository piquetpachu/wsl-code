
import React from 'react'
import './App.css'
import video from './assets/videoplayback.mp4'

function App() {

  const refvideo = React.useRef(null)
  const play = () => {
    refvideo.current.play()
  }
  const pause = () => {
    refvideo.current.pause()
  }
  return(
    <article>
      <video ref={refvideo} width={420} height={240}>
      <source src={video} type='video/mp4' /  >
      </video>
      <div>
        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
      </div>
      
    </article>
  )
}

export default App
