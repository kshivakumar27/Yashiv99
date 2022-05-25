import React from "react";
import url from './images/url.jpg';
import bms from './images/bookmyshow.jpg';
import swipe from './images/swipe.png';
import hire from './images/hiring.jpg';
import smartcity from './images/smartcity.jpg';
import spid1 from './images/spid1.jpg';
import cro from './images/crop.jfif';
import boo from './images/booklist.jpg';
import por from './images/port.png';
import speech from './images/spechtosign.jfif';
import loa from './images/loanCalculator.jpg';
import newss from './images/news.jpg';
import busi from './images/business.jpeg';
import azur from './images/azure.png';
import devop from './images/devopspro.jfif';
import face from './images/facerecog.jfif';
import rai from './images/rain.jfif';
import shop from './images/shopping.jfif';

import code from './images/codeig.jfif';

import emp from './images/employee.jfif';

import ag from './images/age.png';


function Projects() {
    return (
        <>
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        






                            <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${bms})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>BookMyTrain tickets</a></h3>
                                            <span>A Full Stack Website for booking a Train ticket.<br/>Here the user will book a movie train after logging into his account and he can view his tickets.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Spring boot/Java<br/>Angular<br/>Mysql</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${smartcity})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Smart City</a></h3>
                                            <span>A Full Stack Website for Smart City (Django web app).<br/>Here i have done Django(python) full stack web app with postgresql.<br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Django<br/>Postgresql<br/>Pgadmin</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${emp})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Employee Managemet Login/Registration blog</a></h3>
                                             <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJS<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${ag})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Age Teller</a></h3>
                                           <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJS<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         

                           
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${hire})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Student Placements</a></h3>
                                            <span>A Full Stack Website for Student placement management.<br/>Web app will manage student placement activities.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Angular<br/>Spring boot<br/>Mysql</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>










                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${shop})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Shopping webiste</a></h3>
                                             <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJS<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>














                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${swipe})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Employee Management</a></h3>
                                            <span>A Full Stack Website for Employee management.<br/>Here the user will finds the Details.<br/>Manager will post the tasks and he can see the list of tasks assigned.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Javascript<br/>PHP<br/>JQuery<br/>Bootstrap<br/>CSS<br/>Html</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${speech})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Sign to speech with CNN and LSTM /Vice-Versa</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>






































                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${spid1})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Cyber security</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python / Javascript / HTML / CSS / Firebase</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${loa})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Loan calculater for year and month</a></h3>
                                             <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Javascript<br/>Bootstrap<br/>CSS<br/>Html</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${newss})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>online news webiste</a></h3>
                                             <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Javascript<br/>JQuery<br/>Bootstrap<br/>CSS<br/>Html</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${busi})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Business Website YAshiv</a></h3>
                                             <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJS<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${por})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Portfolio</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJS</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${boo})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Booklist Manager</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Javascript<br/>Bootstrap<br/>CSS<br/>Html</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${cro})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Crop Prediction</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span><br/>python<br/>jupyter<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>














                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${rai})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Rainfall Prediction for specific regions in India</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python<br/>Jupyter<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${face})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Face Recognition</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python<br/>spider<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${devop})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>devops example projects</a></h3>
                                              <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span><br/>Java<br/>Devops Automation</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${azur})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Azure devops sample projects</a></h3>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>azure devops<br/>piplines<br/>Automation<br/>new piplines<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${url})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Vedio to jpeg converter</a></h3>
                                          
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python<br/>Jupyter<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${code})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>crud-Codeigniter-Ajax-Implementation-Form-Validation-Session-CSRF-Token-protection-turned-On</a></h3>
                                            <span><br/><br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>PHP<br/> Codeigniter<br/></span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




















                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects;