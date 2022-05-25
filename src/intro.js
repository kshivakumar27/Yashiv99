import React from "react";
import bg1 from './images/key.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';

function Introduction(){
    return (
        <>
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: `url(${bg1})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 className="text-light">Hi! <br />I'm Shivakumar <br/><span className="text-info">Full Stack Web Developer</span></h1>
                          <p><a className="btn btn-primary text-light btn-learn1" href="https://.google.com/d/Vd_Y46ioU9GABc5GgkRjeop-2_7q20Jk/view?usp=sharin" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${bg2})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/kshivakumar27" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${bg3})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="text-light">Connect to <br/>me at ... </h1>
                          <p><a className="btn btn-primary btn-learn1 text-light" href="https://www.linkedin.com/in/shivakumar-k-0021b1158/" target="_blank" rel="noopener noreferrer">LinkdIn <i className="icon-linkedin2" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li style={{backgroundImage: `url(${bg1})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="text-light">FLY HIGH</h1><h2 className="text-light">I have plan to build something..... and its Official Website( comming soon with more Innovative Idea's and Plan) <br /> <span className="text-light" >YASHIV.IO</span></h2>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/kshivakumar27" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>











            </ul>
          </div>
        </section>
      </div>
        </>
    )
}

export default Introduction;