import React from 'react';
import { SolicitudService } from '../service/SolicitudService';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class solicitud extends React.Component {
    constructor(){
        super();
        this.state = ({
            solicitudes:[]
        });
        this.solicitudService = new SolicitudService();

      }

      componentDidMount(){
        this.solicitudService.getAll().then(data => this.setState ({solicitudes: data}));
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

        <div className="properties-area recent-property" style={{ backgroundcolor: '#FFF' }}>
            <div className="container">  
                <div className="row">
                     
                <div className="col-md-3 p0 padding-top-40">
                    <div className="blog-asside-right pr0">
                        
                    <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                            <div className="panel-heading">
                                <h3 className="panel-title">Smart search</h3>
                            </div>

                            
                            <div className="panel-body search-widget">
                                <form action="" className=" form-inline"> 
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <input type="text" className="form-control" placeholder="Key word" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <div className="row">
                                            <div className="col-xs-6">

                                                <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Your City">

                                                    <option>New york, CA</option>
                                                    <option>Paris</option>
                                                    <option>Casablanca</option>
                                                    <option>Tokyo</option>
                                                    <option>Marraekch</option>
                                                    <option>kyoto , shibua</option>
                                                </select>
                                            </div>
                                            <div className="col-xs-6">

                                                <select id="basic" className="selectpicker show-tick form-control">
                                                    <option> -Status- </option>
                                                    <option>Rent </option>
                                                    <option>Boy</option>
                                                    <option>used</option>  

                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <label htmlFor="price-range">Price range ($):</label>
                                                <input type="text" className="span2" value="" data-slider-min="0" 
                                                       data-slider-max="600" data-slider-step="5" 
                                                       data-slider-value="[0,450]" id="price-range" /><br />
                                                <b className="pull-left color">2000$</b> 
                                                <b className="pull-right color">100000$</b>                                                
                                            </div>
                                            <div className="col-xs-6">
                                                <label htmlFor="property-geo">Property geo (m2) :</label>
                                                <input type="text" className="span2" value="" data-slider-min="0" 
                                                       data-slider-max="600" data-slider-step="5" 
                                                       data-slider-value="[50,450]" id="property-geo" /><br />
                                                <b className="pull-left color">40m</b> 
                                                <b className="pull-right color">12000m</b>                                                
                                            </div>                                            
                                        </div>
                                    </fieldset>                                

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <label htmlFor="price-range">Min baths :</label>
                                                <input type="text" className="span2" value="" data-slider-min="0" 
                                                       data-slider-max="600" data-slider-step="5" 
                                                       data-slider-value="[250,450]" id="min-baths" /><br />
                                                <b className="pull-left color">1</b> 
                                                <b className="pull-right color">120</b>                                                
                                            </div>

                                            <div className="col-xs-6">
                                                <label htmlFor="property-geo">Min bed :</label>
                                                <input type="text" className="span2" value="" data-slider-min="0" 
                                                       data-slider-max="600" data-slider-step="5" 
                                                       data-slider-value="[250,450]" id="min-bed" /><br />
                                                <b className="pull-left color">1</b> 
                                                <b className="pull-right color">120</b>

                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <div className="checkbox">
                                                    <label> <input type="checkbox" checked /> Fire Place</label>
                                                </div> 
                                            </div>

                                            <div className="col-xs-6">
                                                <div className="checkbox">
                                                    <label> <input type="checkbox" /> Dual Sinks</label>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label> <input type="checkbox" checked /> Swimming Pool</label>
                                                </div>
                                            </div>  
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label> <input type="checkbox" checked /> 2 Stories </label>
                                                </div>
                                            </div>  
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label><input type="checkbox" /> Laundry Room </label>
                                                </div>
                                            </div>  
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label> <input type="checkbox" /> Emergency Exit</label>
                                                </div>
                                            </div>  
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label>  <input type="checkbox" checked /> Jog Path </label>
                                                </div>
                                            </div>  
                                            <div className="col-xs-6"> 
                                                <div className="checkbox">
                                                    <label>  <input type="checkbox" /> 26' Ceilings </label>
                                                </div>
                                            </div>  
                                        </div>
                                    </fieldset>

                                    <fieldset className="padding-5">
                                        <div className="row">
                                            <div className="col-xs-12"> 
                                                <div className="checkbox">
                                                    <label>  <input type="checkbox" /> Hurricane Shutters </label>
                                                </div>
                                            </div>  
                                        </div>
                                    </fieldset>

                                    <fieldset >
                                        <div className="row">
                                            <div className="col-xs-12">  
                                                <input className="button btn largesearch-btn" value="Search" type="submit" />
                                            </div>  
                                        </div>
                                    </fieldset>                                     
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-9  pr0 padding-top-40 properties-page">
                    <div className="col-md-12 clear"> 
                        <div className="col-xs-10 page-subheader sorting pl0">
                            <ul className="sort-by-list">
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
                            </ul>&nbsp;&nbsp;&nbsp;&nbsp;

                            <div className="items-per-page">
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

                        <div className="col-xs-2 layout-switcher">
                        <a className="layout-grid active"> <i className="fa fa-th"></i> </a>  
                            <a className="layout-list"> <i className="fa fa-th-list"></i>  </a>                  
                        </div>
                    </div>


    



                    <div className="col-md-12 clear"> 
                            <div id="list-type" className="proerty-th">
                        {  this.state.solicitudes.map((solicitudes,index) => {
                            return(
                                
                                     

                                            <div>
                                                <div className="col-sm-6 col-md-4 p0">
                                                        <div className="box-two proerty-item">
                                                            <div className="item-thumb">
                                                                <a href="property" ></a>
                                                            </div>
                                                            <div className="item-entry overflow">
                                                                <h5><a href="property"> 
                                                                {(solicitudes.titulo.length >16)?
                                                                (solicitudes.titulo.substring(0,16)+"...."):(solicitudes.titulo)} 
                                                                </a></h5>
                                                                <div className="dot-hr"></div>

                                                                <span className="pull-left" field="superficie"><b> Area :</b> 218</span>
                                                                
                                                                <span className="proerty-price pull-right"> S/. {solicitudes.presupuesto} al mes</span>
                                                                <p style={{ display: 'none'}} >Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                                                                <div className="property-icon">
                                                                    <img src="assets/img/icon/bed.png" alt="img" />{solicitudes.banos}|
                                                                    <img src="assets/img/icon/cars.png" alt="img"  />{solicitudes.habitaciones}
                                                                </div>
                                                                <div>
                                                                <div max>
                                                                <h3 className="dealer-name " >
                                                                {(solicitudes.descripcion.length >15)?
                                                                 (solicitudes.descripcion.substring(0,15)+"..."):(solicitudes.descripcion)
                                                                    }
                                                                </h3>
                                                                </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                </div>   
                                            </div>


                                    


                                                
                            
                            )
                        })
                        }   
                                     
                        </div>    
                        </div>


   


            
                    <div className="col-md-12"> 
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
                </div>              
            </div>
        
        </div>
                   



        <br/>
        <div className="text-center">
            <a className="btn btn-default" href="user-solicitud"> Realizar una solicitud</a>
        </div>

        <br/>     <br/>

        </div>

        );
    }
}
 
export default solicitud;
