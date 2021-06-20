import React from 'react';

class contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
        <div className="page-head"> 
            <div className="container">
                <div className="row">
                    <div className="page-head-content">
                        <h1 className="page-title">Contact page</h1>               
                    </div>
                </div>
            </div>
        </div>


        <div className="content-area recent-property padding-top-40" style={{backgroundcolor: '#FFF'}}>
            <div className="container">  
                <div className="row">
                    <div className="col-md-8 col-md-offset-2"> 
                        <div className="" id="contact1">                        
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3><i className="fa fa-map-marker"></i> Address</h3>
                                    <p>13/25 shibuia
                                        <br/>Tokyo 
                                        <br/>45Y 73J 
                                        <br/>
                                        <strong>Japan</strong>
                                    </p>
                                </div>
              
                                <div className="col-sm-4">
                                    <h3><i className="fa fa-phone"></i> Call center</h3>
                                    <p className="text-muted">This number is toll free if calling from
                                        Great Britain otherwise we advise you to use the electronic
                                        form of communication.</p>
                                    <p><strong>+33 555 444 333</strong></p>
                                </div>
              
                                <div className="col-sm-4">
                                    <h3><i className="fa fa-envelope"></i> Electronic support</h3>
                                    <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                                    <ul>
                                        <li><strong><a href="mailto:">info@company.com</a></strong>   </li>
                                        <li><strong><a href="index">Ticketio</a></strong> - our ticketing support platform</li>
                                    </ul>
                                </div>
                   
                            </div>
                
                            <hr/>
                            <div id="map"></div>
                            <hr/>
                            <h2>Contact form</h2>
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="firstname">Firstname</label>
                                            <input type="text" className="form-control" id="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="lastname">Lastname</label>
                                            <input type="text" className="form-control" id="lastname" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" className="form-control" id="subject" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 text-center">
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Send message</button>
                                    </div>
                                </div>
               
                            </form>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </div> 
        );
    }
}
 
export default contact;