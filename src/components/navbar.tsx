import { useState } from 'react'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect'
import AudioPlayer from 'react-audio-player'
import backgroundAudio from '../../public/Longing.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

function Navbar (){

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
  
    return (
  
      <>
        <div className='navbarCustome'>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects">Projects</Link>
            </li>
            {musicButton()}
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="bodyName">
          <h3>Hi my name is</h3>
          <h1>Kridtin Vigaiwaraphon</h1>
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLdfBdzxQOBI9kwoni1IHpVuB_Ep33HL8gPJcYBQSXwcA=s288-c-no" alt="proflie" />
        </div>
        <ReactTypingEffect text={["Interested in computer technology and systems to developing systems with computer languages.","My goal is to improve myself. and the organization for maximum benefit."]} speed={30} eraseDelay={5000} eraseSpeed={10} className='typingeffect'/>
      </>
    )
  }
export default Navbar