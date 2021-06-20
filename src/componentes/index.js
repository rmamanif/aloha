import React from 'react';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
            <div className="slider-area">
            <div className="slider">
                <div id="bg-slider" className="owl-carousel owl-theme">

                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="img" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-2.jpg" alt="img" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="img" /></div>

                </div>
            </div>
            <div className="slider-content">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                        <h2>property Searching Just Got So Easy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>
                        <div className="search-form wow pulse" data-wow-delay="0.8s">

                            <form action="" className="form-inline">
                                <button className="btn  toggle-btn" type="button"><i className="fa fa-bars"></i></button>&nbsp;&nbsp;

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Key word" />
                                </div>&nbsp;&nbsp;
                                <div className="form-group">                                   
                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search- ="begins" title="Select your city">

                                        <option>New york, CA</option>
                                        <option>Paris</option>
                                        <option>Casablanca</option>
                                        <option>Tokyo</option>
                                        <option>Marraekch</option>
                                        <option>kyoto , shibua</option>
                                        
                                    </select>
                                </div>&nbsp;&nbsp;
                                <div className="form-group">                                     
                                    <select id="basic" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Boy</option>
                                        <option>used</option>  

                                    </select>
                                </div>&nbsp;&nbsp;
                                <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>

                                <div style={{ display: 'none'}} className="search-toggle">

                                    <div className="search-row">   

                                        <div className="form-group mar-r-20">
                                            <label htmlFor="price-range">Price range ($):</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[0,450]" id="price-range" /><br />
                                            <b className="pull-left color">2000$</b> 
                                            <b className="pull-right color">100000$</b>
                                        </div>
                           

                                        <div className="form-group mar-l-20">
                                            <label htmlFor="property-geo">Property geo (m2) :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[50,450]" id="property-geo" /><br />
                                            <b className="pull-left color">40m</b> 
                                            <b className="pull-right color">12000m</b>
                                        </div>
                                
                                    </div>

                                    <div className="search-row">

                                        <div className="form-group mar-r-20">
                                            <label htmlFor="price-range">Min baths :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[250,450]" id="min-baths" /><br />
                                            <b className="pull-left color">1</b> 
                                            <b className="pull-right color">120</b>
                                        </div>
                          

                                        <div className="form-group mar-l-20">
                                            <label htmlFor="property-geo">Min bed :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[250,450]" id="min-bed" /><br />
                                            <b className="pull-left color">1</b> 
                                            <b className="pull-right color">120</b>
                                        </div>
                           

                                    </div>
                                    <br />
                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Fire Place(3100)
                                                </label>
                                            </div>
                                        </div>
                      

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Dual Sinks(500)
                                                </label>
                                            </div>
                                        </div>
                                
                                        
                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Hurricane Shutters(99)
                                                </label>
                                            </div>
                                        </div>
                                
                                    </div>

                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Swimming Pool(1190)
                                                </label>
                                            </div>
                                        </div>
                            

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> 2 Stories(4600)
                                                </label>
                                            </div>
                                        </div>
                         

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Emergency Exit(200)
                                                </label>
                                            </div>
                                        </div>
                             
                                    </div>                                    

                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Laundry Room(10073)
                                                </label>
                                            </div>
                                        </div>
     

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Jog Path(1503)
                                                </label>
                                            </div>
                                        </div>
                           

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> 26' Ceilings(1200)
                                                </label>
                                            </div>
                                        </div>
           
                                        <br/>
                                        <hr/>
                                    </div>                             
                                    <button className="btn search-btn prop-btm-sheaerch" type="submit"><i className="fa fa-search"></i></button>  
                                </div>                    

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="content-area home-area-1 recent-property" style={{ backgroundcolor: '#FCFCFC', paddingbottom: '55px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                 
                        <h2>Top submitted property</h2>
                        <p>Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies . </p>
                    </div>
                </div>

                <div className="row">
                    <div className="proerty-th">
                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1" ><img src="assets/img/demo/property-1.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-2" ><img src="assets/img/demo/property-2.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-2" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-3" ><img src="assets/img/demo/property-3.jpg" alt="img" /></a>

                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-3" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1" ><img src="assets/img/demo/property-4.jpg"alt="img"  /></a>

                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-3" ><img src="assets/img/demo/property-2.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-3" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-2" ><img src="assets/img/demo/property-4.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-2" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1" ><img src="assets/img/demo/property-3.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-tree more-proerty text-center">
                                <div className="item-tree-icon">
                                    <i className="fa fa-th"></i>
                                </div>
                                <div className="more-entry overflow">
                                    <h5><a href="property-1" >CAN'T DECIDE ? </a></h5>
                                    <h5 className="tree-sub-ttl">Show all properties</h5>
                                    <button className="btn border-btn more-black" value="All properties">All properties</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="Welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Welcome-entry  col-sm-12">
                        <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                            <div className="welcome_text wow fadeInLeft" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                              
                                        <h2>GARO ESTATE </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div  className="welcome_services wow fadeInRight" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-home pe-4x"></i>
                                            </div>
                                            <h3>Any property</h3>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-users pe-4x"></i>
                                            </div>
                                            <h3>More Clients</h3>
                                        </div>
                                    </div>


                                    <div className="col-xs-12 text-center">
                                        <i className="welcome-circle"></i>
                                    </div>

                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-notebook pe-4x"></i>
                                            </div>
                                            <h3>Easy to use</h3>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-help2 pe-4x"></i>
                                            </div>
                                            <h3>Any help </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="testimonial-area recent-property" style={{ backgroundcolor: '#FCFCFC', paddingbottom: '15px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
            
                        <h2>Our Customers Said  </h2> 
                    </div>
                </div>

                <div className="row">
                    <div className="row testimonial">
                        <div className="col-md-12">
                            <div id="testimonial-slider">
                                <div className="item">
                                    <div className="client-text">                                
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face wow fadeInRight" data-wow-delay=".9s"> 
                                        <img src="assets/img/client-face1.png" alt="img" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">                                
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face2.png" alt="img" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">                                
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face1.png" alt="img" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="client-text">                                
                                        <p>Nulla quis dapibus nisl. Suspendisse llam sed arcu ultried arcu ultricies !</p>
                                        <h4><strong>Ohidul Islam, </strong><i>Web Designer</i></h4>
                                    </div>
                                    <div className="client-face">
                                        <img src="assets/img/client-face2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

 
        <div className="count-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                   
                        <h2>You can trust Us </h2> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xs-12 percent-blocks m-main" data-waypoint-scroll="true">
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <div className="count-item">
                                    <div className="count-item-circle">
                                        <span className="pe-7s-users"></span>
                                    </div>
                                    <div className="chart" data-percent="5000">
                                        <h2 className="percent" id="counter">0</h2>
                                        <h5>HAPPY CUSTOMER </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="count-item">
                                    <div className="count-item-circle">
                                        <span className="pe-7s-home"></span>
                                    </div>
                                    <div className="chart" data-percent="12000">
                                        <h2 className="percent" id="counter1">0</h2>
                                        <h5>Properties in stock</h5>
                                    </div>
                                </div> 
                            </div> 
                            <div className="col-sm-3 col-xs-6">
                                <div className="count-item">
                                    <div className="count-item-circle">
                                        <span className="pe-7s-flag"></span>
                                    </div>
                                    <div className="chart" data-percent="120">
                                        <h2 className="percent" id="counter2">0</h2>
                                        <h5>City registered </h5>
                                    </div>
                                </div> 
                            </div> 
                            <div className="col-sm-3 col-xs-6">
                                <div className="count-item">
                                    <div className="count-item-circle">
                                        <span className="pe-7s-graph2"></span>
                                    </div>
                                    <div className="chart" data-percent="5000">
                                        <h2 className="percent"  id="counter3">5000</h2>
                                        <h5>DEALER BRANCHES</h5>
                                    </div>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="boy-sale-area">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
                        <div className="asks-first">
                            <div className="asks-first-circle">
                                <span className="fa fa-search"></span>
                            </div>
                            <div className="asks-first-info">
                                <h2>ARE YOU LOOKING FOR A Property?</h2>
                                <p> varius od lio eget conseq uat blandit, lorem auglue comm lodo nisl no us nibh mas lsa</p>                                        
                            </div>
                            <div className="asks-first-arrow">
                                <a href="properties"><span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
                        <div  className="asks-first">
                            <div className="asks-first-circle">
                                <span className="fa fa-usd"></span>
                            </div>
                            <div className="asks-first-info">
                                <h2>DO YOU WANT TO SELL A Property?</h2>
                                <p> varius od lio eget conseq uat blandit, lorem auglue comm lodo nisl no us nibh mas lsa</p>
                            </div>
                            <div className="asks-first-arrow">
                                <a href="properties"><span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <p  className="asks-call">QUESTIONS? CALL US  : <span className="strong"> + 3-123- 424-5700</span></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default index;