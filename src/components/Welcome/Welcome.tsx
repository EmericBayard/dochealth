import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../core-ui/Welcome.css';
import Navbar from '../Navbar/Navbar';

function Welcome() {
  return (
        <div className="Welcome">
            <Navbar />
            <div className="WelcomeContent">
                <div className="subtitleText"> STAY STRONG, LIVE LONG.</div>
                <div className="titleText"> <div className="subtitleTextBlue">Take care</div> of your body and it will take care of <div className="subtitleTextBlue">you.</div></div>
                <div className="bodyText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</div>
                <div className="ButtonContainerWelcome">
                    <button className="ButtonFull">Get appointment</button>
                    <button className="ButtonEmpty">View Profile</button>
                </div>
            </div>
        </div>
  )
}

export default Welcome;
