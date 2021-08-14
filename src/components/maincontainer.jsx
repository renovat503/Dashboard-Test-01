import React, { Component } from 'react';
import logo from '../images/logo.png'
import arrow from '../images/down-arrow.png'
import usa from '../images/usa.png'
import ireland from '../images/ireland.png'
import ukraine from '../images/ukraine.png'
import sweden from '../images/sweden.png'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.jpeg'
import user4 from '../images/user4.png'
import notification from '../images/notification.png';
import Charto from '../components/chart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChevronCircleUp, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faCartPie} from '@fortawesome/free-solid-svg-icons';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faCaretSquareUp} from '@fortawesome/free-solid-svg-icons';
import {faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';


class MainContainer extends Component {
    render() { 
        return (  
            <div className="main-container">
                <div className="container">
                        <div className="row">
                            <div className="col-2 first">
                               <div className = "branding">
                                   <img src={logo} className ="logo" />
                                   <h6 className = "logo-text">Geeko</h6>
                                </div>
                                <div className = "saleshouse">
                                        <img src={logo} className ="logo" />
                                        <div className = "sales-text-container">
                                        <h6 className = "sales-titles t1">SalesHouse</h6>
                                        <h6 className = "sales-titles t2">General Team</h6>
                                        
                                        </div>
                                        <img src={arrow} className ="arrow" />
                                    </div>
                                    <div className = "dashboard-menu-container">
                                        <div className ="dash-menu active">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faChartPie} />
                                        <h6 className = "dash-menu-text">Dashboard</h6>
                                        </div>

                                        <div className ="dash-menu">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faFileAlt} /> 
                                        <h6 className = "dash-menu-text">Overview</h6>
                                        </div>
                                        <div className ="dash-menu">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faCommentDots} /> 
                                        <h6 className = "dash-menu-text">Chat</h6>
                                        <img src={notification} className ="notification" /> 
                                        </div>
                                        <div className ="dash-menu">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faUserFriends} />  
                                            <h6 className = "dash-menu-text">Team</h6>
                                        </div>
                                        <div className ="dash-menu">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faTasks} />  
                                            <h6 className = "dash-menu-text">Task</h6>
                                        </div>
                                        <div className ="dash-menu">
                                        <FontAwesomeIcon className= "dash-icons"icon ={faCog} />  
                                            <h6 className = "dash-menu-text">Settings</h6>
                                        </div>
                                        
                                    </div>
                                    <div className = "used">
                                        <h5 className ="used-title">Used space</h5>
                                        <p className = "used-desc">Admin updated 09:12 AM November 08, 2020</p>
                                        
                                        <div className="progress" style={{height: 2}} >
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    </div>
                                    <div className = "avatar">
                                    <img src={user1} className ="logo" />
                                    <h6 className = "avatar-name">Jerry Wilson</h6>
                                        </div>
                            </div>
                            <div className="col second">
                                <div className = "first-section">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className = "user-s">
                                                    <img src={user2} className ="logo" />
                                                    <h6 className = "user-name">Esther Howard</h6>
                                                    <h6 className ="user-title">Software engineer</h6>
                                                    <h6 className ="user-progress">3 of 6 tasks completed</h6>
                                                        <div className = "user-progress-bar">
                                                        <div className="progress" style={{height: 2}} >
                                                             <div className="progress-bar bg-info" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        </div>
                                                        <div className = "user-trends">

                                                        <FontAwesomeIcon className = "trends-icon"icon={faChevronCircleUp} />
                                                             <h4 className ="user-trends-amount">$3490.00</h4>
                                                             <h6 className ="user-trends-text">Last 6 months</h6>
                                                        </div>    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className = "user-s">
                                                <img src={user4} className ="logo" />
                                                    <h6 className = "user-name">Eleanor Pena</h6>
                                                    <h6 className ="user-title">Sales manager Europe</h6>
                                                    <h6 className ="user-progress">5 of 6 tasks completed</h6>
                                                        <div className = "user-progress-bar">
                                                        <div className="progress" style={{height: 2}} >
                                                             <div className="progress-bar bg-info" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        </div>
                                                        <div className = "user-trends">

                                                        <FontAwesomeIcon className = "trends-icon-down"icon={faChevronCircleDown} />
                                                             <h4 className ="user-trends-amount-down">$590.00</h4>
                                                             <h6 className ="user-trends-text">Last 6 months</h6>
                                                        </div> 
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className = "user-s">
                                                <img src={user3} className ="logo" />
                                                    <h6 className = "user-name">Robert Fox</h6>
                                                    <h6 className ="user-title">Sales Manager Asia</h6>
                                                    <h6 className ="user-progress">1 of 6 tasks completed</h6>
                                                        <div className = "user-progress-bar">
                                                        <div className="progress" style={{height: 2}} >
                                                             <div className="progress-bar bg-info" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        </div>
                                                        <div className = "user-trends">

                                                        <FontAwesomeIcon className = "trends-icon"icon={faChevronCircleUp} />
                                                             <h4 className ="user-trends-amount">$2690.00</h4>
                                                             <h6 className ="user-trends-text">Last 6 months</h6>
                                                        </div> 
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className = "second-section">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className = "user-stat">

                                                  <Charto />

                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className = "user-stat">
                                                    <div className ="usr-stat-header">
                                                        <h6 className ="top-countries">Top Countries</h6>
                                                        <h6 className = "favorites">Favorites</h6>
                                                        <FontAwesomeIcon className = "usr-stat-icon"icon={faPlusCircle} />


                                                    </div>
                                                    <div className ="country-container">
                                                        <h6 className ="c-number">1</h6>
                                                        <img src={usa} className ="c-flag" />
                                                        <h6 className = "c-country">USA</h6>
                                                        <h6 className ="c-amount">$ 21942.83</h6>
                                                        <FontAwesomeIcon className = "c-icon-au"icon={faCaretSquareUp} />
                                                        <FontAwesomeIcon className = "c-icon-2"icon={faEllipsisV} />
                                                        
                                                    </div>
                                                    <div className ="country-container">
                                                    <h6 className ="c-number">2</h6>
                                                        <img src={ireland} className ="c-flag" />
                                                        <h6 className = "c-country">IRELAND</h6>
                                                        <h6 className ="c-amount">$ 19710.00</h6>
                                                        <FontAwesomeIcon className = "c-icon-ad"icon={faCaretSquareDown} />
                                                        <FontAwesomeIcon className = "c-icon-2"icon={faEllipsisV} />
                                                        
                                                    </div>
                                                    <div className ="country-container">
                                                    <h6 className ="c-number">3</h6>
                                                        <img src={ukraine} className ="c-flag" />
                                                        <h6 className = "c-country">UKRAINE</h6>
                                                        <h6 className ="c-amount">$ 12320.30</h6>
                                                        <FontAwesomeIcon className = "c-icon-ad"icon={faCaretSquareDown} />
                                                        <FontAwesomeIcon className = "c-icon-2"icon={faEllipsisV} />
                                                        
                                                    </div>
                                                    <div className ="country-container">
                                                    <h6 className ="c-number">4</h6>
                                                        <img src={sweden} className ="c-flag" />
                                                        <h6 className = "c-country">SWEDEN</h6>
                                                        <h6 className ="c-amount">$ 9725.00</h6>
                                                        <FontAwesomeIcon className = "c-icon-au"icon={faCaretSquareUp} />
                                                        <FontAwesomeIcon className = "c-icon-2"icon={faEllipsisV} />
                                                        
                                                    </div>
                                                </div>
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
 
export default MainContainer;