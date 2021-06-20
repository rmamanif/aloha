import React from 'react';

class userproperties extends React.Component {
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
                        <h1 className="page-title">List Layout With Sidebar</h1>               
                    </div>
                </div>
            </div>
        </div>


        <div className="content-area recent-property" style={{backgroundcolor: '#FFF'}}>
            <div className="container">   
                <div className="row">

                    <div className="col-md-9 pr-30 padding-top-40 properties-page user-properties">

                        <div className="section"> 
                            <div className="page-subheader sorting pl0 pr-10">


                                <ul className="sort-by-list pull-left">
                                    <li className="active">
                                        <a href="index" className="order_by_date" data-orderby="property_date" data-order="ASC">
                                            Property Date <i className="fa fa-sort-amount-asc"></i>					
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="index" className="order_by_price" data-orderby="property_price" data-order="DESC">
                                            Property Price <i className="fa fa-sort-numeric-desc"></i>						
                                        </a>
                                    </li>
                                </ul>

                                <div className="items-per-page pull-right">
                                    <label htmlFor="items_per_page"><b>Property per page :</b></label>
                                    <div className="sel">
                                        <select id="items_per_page" name="per_page">
                                            <option value="3">3</option>
                                            <option value="6">6</option>
                                            <option value="9">9</option>
                                            <option selected="selected" value="12">12</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                            <option value="60">60</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="section"> 
                            <div id="list-type" className="proerty-th-list">
                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-3.jpg" alt="img" /></a>
                                        </div>
                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>                             

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-2.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow ">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-1.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div> 

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-3.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div> 

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-1.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div> 

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-2.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>                             

                                <div className="col-md-4 p0">
                                    <div className="box-two proerty-item">
                                        <div className="item-thumb">
                                            <a href="property-1" ><img src="assets/img/demo/property-3.jpg" alt="img" /></a>
                                        </div>

                                        <div className="item-entry overflow">
                                            <h5><a href="property-1"> Super nice villa </a></h5>
                                            <div className="dot-hr"></div>
                                            <span className="pull-left"><b> Area :</b> 120m </span>
                                            <span className="proerty-price pull-right"> $ 300,000</span>
                                            <p style={{display: 'none'}}>Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                            <div className="property-icon">
                                                <img src="assets/img/icon/bed.png" alt="img" />(5)|
                                                <img src="assets/img/icon/shawer.png" alt="img" />(2)|
                                                <img src="assets/img/icon/cars.png" alt="img" />(1)  

                                                <div className="dealer-action pull-right">                                        
                                                    <a href="submit-property" className="button">Edit </a>
                                                    <a href="index" className="button delete_user_car">Delete</a>
                                                    <a href="property-1" className="button">View</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>                                                        
                            </div>
                        </div>

                        <div className="section"> 
                            <div className="pull-right">
                                <div className="pagination">
                                    <ul>
                                        <li><a href="index">Prev</a></li>
                                        <li><a href="index">1</a></li>
                                        <li><a href="index">2</a></li>
                                        <li><a href="index">3</a></li>
                                        <li><a href="index">4</a></li>
                                        <li><a href="index">Next</a></li>
                                    </ul>
                                </div>
                            </div>                
                        </div>

                    </div>       

                    <div className="col-md-3 p0 padding-top-40">
                        <div className="blog-asside-right">
                            <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                                <div className="panel-heading">
                                    <h3 className="panel-title">Hello Kimaro</h3>
                                </div>
                                <div className="panel-body search-widget">

                                </div>
                            </div>

                            <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Recommended</h3>
                                </div>
                                <div className="panel-body recent-property-widget">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       


        </div>
         );
    }
}
 
export default userproperties;