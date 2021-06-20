import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/css/bootstrap.css';

import index from "./componentes/index";
import register from "./componentes/register";
import login from "./componentes/login";

import login2 from './componentes/login2';

import { cerrarSesion } from './util/xd';

import solicitud from "./componentes/solicitud";
import usersolicitud from "./componentes/user-solicitud";

import properties from "./componentes/properties";
import property from "./componentes/property";
import blogleft from "./componentes/blog-left";
import changepassword from "./componentes/change-password";
import contact from "./componentes/contact";
import faq from "./componentes/faq";
import single from "./componentes/single";
import submitproperty from "./componentes/submit-property"; 
import userprofile from "./componentes/user-profile";
import userproperties from "./componentes/user-properties";
import Cookies from 'universal-cookie';
import React from 'react';

const cookies = new Cookies();

function App() {
  return (
    <Router>
         <div id="preloader">
            <div id="status">&nbsp;</div>
        </div>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index"><img src="assets/img/logo.png" alt="img" ></img></a>
                </div>

                <div className="collapse navbar-collapse yamm" id="navigation">
                    {!cookies.get('correo')? (
                        
                        <div className="button navbar-right">


                        <a className="navbar-btn nav-button wow bounceInRight login" href="login" data-wow-delay="0.4s">Login</a>


                        <a className="navbar-btn nav-button wow fadeInRight" href="register" data-wow-delay="0.5s">Register</a>
                    </div>

                    ) : (
                        <div className="button navbar-right">
                        <a className="navbar-btn nav-button wow fadeInRight" onClick={()=>cerrarSesion()} data-wow-delay="0.5s">Cerrar Sesion</a>
                        </div>
                    )
                    }

                    <ul className="main-nav nav navbar-nav navbar-right">
                        <li className="wow fadeInDown" data-wow-delay="0.2s"><a  href="index">Hogar</a></li>

                        <li className="wow fadeInDown" data-wow-delay="0.1s"><a  href="properties">Mis solicitudes</a></li>
                        
                        <li className="wow fadeInDown" data-wow-delay="0.1s"><a  href="solicitud">Solicitudes</a></li>

                        <li className="wow fadeInDown" data-wow-delay="0.4s"><a href="contact">Contactanos</a></li>
                    </ul>
                </div>
            </div>
        </nav>





      <Route exact path="/" component={index}></Route>
      <Route path="/index" component={index}></Route>
      <Route path="/register" component={register}></Route>
      <Route path="/login" component={login}></Route>
      <Route path="/solicitud" component={solicitud}></Route>
      <Route path="/user-solicitud" component={usersolicitud}></Route>

      <Route path="/login2" component={login2}/>

      <Route path="/properties" component={properties}></Route>
      <Route path="/property" component={property}></Route>
      <Route path="/blog-left" component={blogleft}></Route>
      <Route path="/change-password" component={changepassword}></Route>
      <Route path="/contact" component={contact}></Route>
      <Route path="/faq" component={faq}></Route>
      <Route path="/single" component={single}></Route>
      <Route path="/submit-property" component={submitproperty}></Route>
      <Route path="/user-profile" component={userprofile}></Route>
      <Route path="/user-properties" component={userproperties}></Route>



        <div className="footer-area">

            <div className=" footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>About us </h4>
                                <div className="footer-title-line"></div>

                                <img src="assets/img/footer-logo.png" alt="img" className="wow pulse" data-wow-delay="1s" />
                                <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                                <ul className="footer-adress">
                                    <li><i className="pe-7s-map-marker strong"> </i> 1234</li>
                                    <li><i className="pe-7s-mail strong"> </i> email@idk.com</li>
                                    <li><i className="pe-7s-call strong"> </i> +51 999 999 999</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>Quick Links </h4>
                                <div className="footer-title-line"></div>
                                <ul className="footer-menu">
                                    <li><a href="blog-left">blog-left</a>  </li> 
                                    <li><a href="change-password">change-password</a></li> 
                                    <li><a href="contact">contact</a></li> 
                                    <li><a href="faq">faq us</a></li> 
                                    <li><a href="single">single</a>  </li> 
                                    <li><a href="submit-property">submit-property </a>  </li> 
                                    <li><a href="user-profile">user-profile</a>  </li> 
                                    <li><a href="user-properties">user-properties</a>  </li> 
                                    <li><a href="submit-property">submit-property</a>  </li> 
                                </ul>
                            </div>         
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>Last News</h4>
                                <div className="footer-title-line"></div>
                                <ul className="footer-blog">
                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single">
                                                <img src="assets/img/demo/small-proerty-2.jpg" alt="img" />
                                            </a>
                                            <span className="blg-date">12-12-2016</span>

                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single">Add news functions </a></h6> 
                                            <p style={{ lineheight: '17px',  padding: '8px 2px' }}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 

                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single">
                                                <img src="assets/img/demo/small-proerty-2.jpg" alt="img" />
                                            </a>
                                            <span className="blg-date">12-12-2016</span>

                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single">Add news functions </a></h6> 
                                            <p style={{lineheight: '17px', padding: '8px 2px'}}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 

                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single">
                                                <img src="assets/img/demo/small-proerty-2.jpg" alt="img" />
                                            </a>
                                            <span className="blg-date">12-12-2016</span>

                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single">Add news functions </a></h6> 
                                            <p style={{lineheight: '17px', padding: '8px 2px'}}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer news-letter">
                                <h4>Stay in touch</h4>
                                <div className="footer-title-line"></div>
                                <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>

                                <form>
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="E-mail ... " />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x"></i></button>
                                        </span>
                                    </div>
                        
                                </form> 

                                <div className="social pull-right"> 
                                    <ul>
                                        <li><a className="wow fadeInUp animated" href="xd"><i className="fa fa-twitter"></i></a></li>&nbsp;
                                        <li><a className="wow fadeInUp animated" href="xd" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>&nbsp;
                                        <li><a className="wow fadeInUp animated" href="xd" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></a></li>&nbsp;
                                        <li><a className="wow fadeInUp animated" href="xd" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></a></li>&nbsp;
                                        <li><a className="wow fadeInUp animated" href="xd" data-wow-delay="0.6s"><i className="fa fa-dribbble"></i></a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copy text-center">
                <div className="container">
                    <div className="row">
                        <div className="pull-left">
                 
                        </div> 
                        <div className="bottom-menu pull-right"> 
                            <ul> 
                                <li><a href="index" className="wow fadeInUp animated" data-wow-delay="0.2s">Home</a></li>
                                <li><a href="property" className="wow fadeInUp animated" data-wow-delay="0.3s">Property</a></li>
                                <li><a href="faq" className="wow fadeInUp animated" data-wow-delay="0.4s">Faq</a></li>
                                <li><a href="contact" className="wow fadeInUp animated" data-wow-delay="0.6s">Contact</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
   
        </div>
    </Router>
  );
}

export default App;
