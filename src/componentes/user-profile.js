import React from 'react';

class userprofile extends React.Component {
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
                        <h1 className="page-title">Hello : <span className="orange strong">Kimaro kyoto</span></h1>               
                    </div>
                </div>
            </div>
        </div>

        <div className="content-area user-profiel" style={{backgroundcolor: '#FCFCFC'}}>&nbsp;
            <div className="container">   
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 profiel-container">

                        <form action="" method="">
                            <div className="profiel-header">
                                <h3>
                                    <b>BUILD</b> YOUR PROFILE <br/>
                                    <small>This information will let us know more about you.</small>
                                </h3>
                                <hr/>
                            </div>

                            <div className="clear">
                                <div className="col-sm-3 col-sm-offset-1">
                                    <div className="picture-container">
                                        <div className="picture">
                                            <img src="assets/img/avatar.png" className="picture-src" id="wizardPicturePreview" title="" alt="img" />
                                            <input type="file" id="wizard-picture" />
                                        </div>
                                        <h6>Choose Picture</h6>
                                    </div>
                                </div>

                                <div className="col-sm-3 padding-top-25">

                                    <div className="form-group">
                                        <label>First Name <small>(required)</small></label>
                                        <input name="firstname" type="text" className="form-control" placeholder="Andrew..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name <small>(required)</small></label>
                                        <input name="lastname" type="text" className="form-control" placeholder="Smith..." />
                                    </div> 
                                    <div className="form-group">
                                        <label>Email <small>(required)</small></label>
                                        <input name="email" type="email" className="form-control" placeholder="andrew@email@email.com.com" />
                                    </div> 
                                </div>
                                <div className="col-sm-3 padding-top-25">
                                    <div className="form-group">
                                        <label>Password <small>(required)</small></label>
                                        <input name="Password" type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm password : <small>(required)</small></label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>  

                            </div>

                            <div className="clear">
                                <br/>
                                <hr/>
                                <br/>
                                <div className="col-sm-5 col-sm-offset-1">
                                    <div className="form-group">
                                        <label>Facebook :</label>
                                        <input name="Facebook" type="text" className="form-control" placeholder="https://facebook.com/user" />
                                    </div>
                                    <div className="form-group">
                                        <label>Twitter :</label>
                                        <input name="Twitter" type="text" className="form-control" placeholder="https://Twitter.com/@user" />
                                    </div>
                                    <div className="form-group">
                                        <label>Website :</label>
                                        <input name="website" type="text" className="form-control" placeholder="https://yoursite.com/" />
                                    </div>
                                </div>  

                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <label>Public email :</label>
                                        <input name="p-email" type="email" className="form-control" placeholder="p-email@rmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone :</label>
                                        <input name="Phone" type="text" className="form-control" placeholder="+1 9090909090" />
                                    </div>
                                    <div className="form-group">
                                        <label>FAX :</label>
                                        <input name="FAX" type="text" className="form-control" placeholder="+1 9090909090" />
                                    </div>
                                </div>
 
                            </div>
                    
                            <div className="col-sm-5 col-sm-offset-1">
                                <br/>
                                <input type='button' className='btn btn-finish btn-primary' name='finish' value='Finish' />
                            </div>
                            <br/>
                    </form>

                    </div>
                </div>

            </div>
        </div>
        

        </div>
         );
    }
}
 
export default userprofile;