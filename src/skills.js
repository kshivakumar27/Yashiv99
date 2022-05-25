import React from "react";
import mongo from './images/mongo.png';
import express from './images/express.png';
import react from './images/react-img.png';
import node from './images/node.png';
import html from './images/html.png';
import css from './images/css.png';
import bootstrap from './images/bootstrap.png';
import cpp from './images/cpp_logo.png';
import c from './images/c.png';
import javascript from './images/javascript.png';
import java from './images/java.png';
import aws from './images/aws.png';
import azure from './images/azure.png';
import php from './images/php.png';
import jquery from './images/jquery.png';
import springboot from './images/springboot.png';
import angular from './images/angular.png';
import mysql from './images/mysql.png';


function Skills() {
    return (
        <>
            <div>
                < section className="colorlib-experience" data-section="skill">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading animate-box">Skills</h2>
                            </div>
                        </div>
                        <img src={`${springboot}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${angular}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        <img src={`${azure}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${java}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${aws}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                              
                        <img src={`${node}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        <img src={`${jquery}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        
                        <img src={`${html}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${css}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        <img src={`${bootstrap}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${cpp}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        <img src={`${c}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${javascript}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        
                        <img src={`${java}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                        <img src={`${php}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                     
                        <img src={`${aws}`} className="sk animate-box" data-animate-effect="fadeInRight" alt="img"></img>
                        <img src={`${mysql}`} className="sk animate-box" data-animate-effect="fadeInLeft" alt="img"></img>
                    </div>
                </ section>
            </div>
        </>
    );
}

export default Skills;