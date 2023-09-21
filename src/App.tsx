import { useState } from 'react'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect'
import AudioPlayer from 'react-audio-player'
import backgroundAudio from '../public/Longing.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import "./App.css"



function App() {
  const [playMusic, setplaymusic] = useState(true)

    function musicHandleclick() {
      setplaymusic(!playMusic)
      console.log(playMusic)
    }
  
    function musicButton() {
      if (playMusic == true) {
        return <>
          
          <button className="nav-item" onClick={musicHandleclick}>
            <FontAwesomeIcon icon={faMusic} />
          </button>
        </>
      }
      else if (playMusic == false) {
        return <>
        <AudioPlayer src={backgroundAudio} autoPlay loop volume={0.08}/>
          <button className="nav-item" onClick={musicHandleclick}>
            <FontAwesomeIcon icon={faVolumeXmark} />
          </button>
        </>
    }
  }
  return(
    <div className='body'>
        <div className='navbarCustome'>
          <ul className="nav justify-content-center">
            
              <li className="nav-link active">HOME</li>
            
              <li className="nav-link">Skills</li>
            
              <li className="nav-link">Projects</li>
            
            {musicButton()}
              <li className="nav-link">Contact</li>
            
          </ul>
        </div>
        <div className="bodyName">
          <h3>Hi my name is</h3>
          <h1>Kridtin Vigaiwaraphon</h1>
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLdfBdzxQOBI9kwoni1IHpVuB_Ep33HL8gPJcYBQSXwcA=s288-c-no" alt="proflie" className='profile' />
        </div>
        <ReactTypingEffect text={["Interested in computer technology and systems to developing systems with computer languages.","My goal is to improve myself. and the organization for maximum benefit."]} speed={30} eraseDelay={5000} eraseSpeed={10} className='typingeffect'/>
        <div className="skillMe">Skills</div>
        <div className="imgBox">
        <img src="https://assets.dryicons.com/uploads/icon/preview/11245/small_1x_2366ffb9-7a22-4f76-b6e2-b13da953b1c6.png" width={80}></img>
        <img src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" width={80}></img>
        <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" width={80}></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={80}></img>
        <img src="https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png" width={80}></img>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width={80}></img>
</div>
      </div>
  )
  }
export default App
