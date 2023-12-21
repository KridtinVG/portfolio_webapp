import { useState } from 'react'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect'
import AudioPlayer from 'react-audio-player'
import backgroundAudio from '../public/Longing.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from 'react-scroll';
import "./App.css"

function App() {
  const [playMusic, setPlayMusic] = useState(true);

  function musicHandleClick() {
    setPlayMusic(!playMusic);
    console.log(playMusic);
  }

  function musicButton() {
    if (playMusic) {
      return (
        <button className="nav-item" onClick={musicHandleClick}>
          <FontAwesomeIcon icon={faMusic} />
        </button>
      );
    } else {
      return (
        <>
          <AudioPlayer src={backgroundAudio} controls loop volume={0.08} />
          <button className="nav-item" onClick={musicHandleClick}>
            <FontAwesomeIcon icon={faVolumeXmark} />
          </button>
        </>
      );
    }
  }
  return (
    <div className='body'>
      <div className='navbarCustome'>
        <ul className="nav justify-content-center">

          <li className="nav-link active">
            <Link to = "top" smooth={true} duration={500}>
              Top
            </Link>
            </li>

          <li className="nav-link">
            <Link to = "skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="nav-link">
          <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>            
            </li>

          {musicButton()}
          <li className="nav-link">
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>

        </ul>
      </div>
      <div className="bodyName" id='top'>
        <h3>Hi my name is</h3>
        <h1>Kridtin Vigaiwaraphon</h1>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLdfBdzxQOBI9kwoni1IHpVuB_Ep33HL8gPJcYBQSXwcA=s288-c-no" alt="proflie" className='profile' />
      
      <ReactTypingEffect text={["Interested in computer technology and systems to developing systems with computer languages.", "My goal is to improve myself. and the organization for maximum benefit."]} speed={30} eraseDelay={5000} eraseSpeed={10} className='typingeffect' />
      </div>
      <div className="skillMe" id='skill'>Skills
      <div className="imgBox">
        <img src="https://assets.dryicons.com/uploads/icon/preview/11245/small_1x_2366ffb9-7a22-4f76-b6e2-b13da953b1c6.png" width={80}></img>
        <img src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" width={80}></img>
        <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" width={80}></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={80}></img>
        <img src="https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png" width={80}></img>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width={80}></img>
        <img src="https://banner2.cleanpng.com/20180610/sks/kisspng-mysql-database-server-microsoft-sql-server-5b1d8657d3e489.9771192415286615918679.jpg" width={80}></img>
      </div></div>
      <div className="project-container" id='project'>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Crud</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Movie Shop</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Redux Crud</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Vaccines Covid</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Todolist</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
        <div className="card">
          <img src="https://themes.artbees.net/wp-content/uploads/2022/02/blog-css-animation-1-1024x512.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Typescript</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go to github</a>
          </div>
        </div>
      </div>
      <div className="contacts-container" id='contact'>
        
              <button className='fackbook'>Fackbook</button>
              <button className='lineid'>Lineid</button>
            
              <button className='mail'>E-Mail</button>
              <button className='phone'>085-349-xxxx</button>
      </div>
    </div>
  )
}
export default App
