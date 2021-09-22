import React from 'react';
import '../../core-ui/WorkContent.css';
import redLogo from '../../assets/img/redIcon.svg';
import brownLogo from '../../assets/img/brownIcon.svg';
import greenLogo from '../../assets/img/greenIcon.svg';
import blueLogo from '../../assets/img/blueIcon.svg';

function WorkContent() {
    return (
        <div className="workContent">
            <div className="titleText titleTextWorkContent">My Skill <div className="underlineBlueText"> depends </div> on work.</div>
            <div className="bodyText bodyTextWorkContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</div>
            <div className="carac">
                <div className="red">
                    <div className="redCircle">
                        <img className="workContentLogo" src={redLogo}/>
                    </div>
                    <div className="subtitleTextBold subtitleTextWC">Patient Safety</div>
                    <div className="secondaryBodyText secondaryBodyTextWC">feugiat viverra est suspendis porta tortor commodo</div>
                </div>
                <div className="brown">
                    <div className="brownCircle">
                        <img className="workContentLogo" src={brownLogo}/>
                    </div>
                    <div className="subtitleTextBold subtitleTextWC">Well Cared</div>
                    <div className="secondaryBodyText secondaryBodyTextWC">feugiat viverra est suspendis porta tortor commodo</div>
                </div>
                <div className="green">
                    <div className="greenCircle">
                        <img className="workContentLogo" src={greenLogo}/>
                    </div>
                    <div className="subtitleTextBold subtitleTextWC">24/7 Service</div>
                    <div className="secondaryBodyText secondaryBodyTextWC">feugiat viverra est suspendis porta tortor commodo</div>
                </div>
                <div className="blue">
                    <div className="blueCircle">
                        <img className="workContentLogo" src={blueLogo}/>
                    </div>
                    <div className="subtitleTextBold subtitleTextWC">Online support</div>
                    <div className="secondaryBodyText secondaryBodyTextWC">feugiat viverra est suspendis porta tortor commodo</div>
                </div>
            </div>
        </div>
    )
}

export default WorkContent;