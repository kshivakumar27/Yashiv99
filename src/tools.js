import React from "react";
import vscode from './images/vscode.png';
import netbeans from './images/netbeans.png';
import postman from './images/postman.png';
import xammp from './images/xammp.png';
import github from './images/github.png';

function Tools() {
    return (
        <>
            <div>
                < section className="colorlib-experience" data-section="tools">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading animate-box">Tools</h2>
                            </div>
                        </div>
                        <div>
                        <img src={`${vscode}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                       
                      
                        <img src={`${netbeans}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                       
                        
                        <img src={`${postman}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                       
                       
                        <img src={`${xammp}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                       
                       
                        <img src={`${github}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        </div>
                    </div>
                </ section>
            </div>
        </>
    );
}

export default Tools;