import React from "react";
import javascriptcource from './images/javascriptcource.png';
import Devops from './images/Devops.jpg';
import Cisco from './images/Cisco.jpg';
//import sih from './images/SIH.jpg';
import ABC from './images/ABCtrainingATMECERTIFICATION_1.jpg';
import Ankyah from './images/Ankyahcertification_1.jpg';
import Arena from './images/ATMECodeArenacertification_1.jpg';
import Relay from './images/ATMEcoderelaycertification_1.jpg';
import Focus from './images/ATMEFocusAcademyTrainingcertification_1.jpg';
import Geeks from './images/ATMEGeeksforgeeksIOTCertification_1.jpg';

//ABCtrainingATMECERTIFICATION_1

function Certificate() {
    return (
        <>
            <div>
            < section className="colorlib-experience" data-section="certificate">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading animate-box">Certificates</h2>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${javascriptcource})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Devops})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Cisco})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Geeks})` }}>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Relay})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Arena})` }}>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Focus})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Ankyah})` }}>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${ABC})` }}>
                                </div>
                            </div>

                        </div>
                    </div>
                </ section>
            </div>
        </>
    );
}

export default Certificate;