import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
class aboutMe extends Component {
    constructor(props:any) {
        super(props);
        this.state = {
        }
    }
    render(): React.ReactNode {
        return(
            
                <>
                <div className="bodyName">
        <h3>Hi my name is</h3>
        <h1>Kridtin Vigaiwaraphon</h1>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLdfBdzxQOBI9kwoni1IHpVuB_Ep33HL8gPJcYBQSXwcA=s288-c-no" alt="proflie" />
      </div>
      <ReactTypingEffect text={["Interested in computer technology and systems to developing systems with computer languages.","My goal is to improve myself. and the organization for maximum benefit."]} speed={30} eraseDelay={5000} eraseSpeed={10} className='typingeffect'/>
                </>
            
            )
    }}
        
export default aboutMe