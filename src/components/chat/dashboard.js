import React from 'react';
import CardComponent from './Card/card';
import './style.css';

const Dashboard = () => {
    
    return(
        <>
<body id='page1'>
<div class="container">
  <div class="row">
  <div class="col-1">
  <div class="col-lg-1">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item"> <a href="*" class="nav-link active py-3 border-bottom"> <i class="fa fa-home"></i> </a> </li>
        <li> <a href="*" class="nav-link py-3 border-bottom"> <i class="fa fa-dashboard"></i> </a> </li>
        <li> <a href="*" class="nav-link py-3 border-bottom"> <i class="fa fa-first-order"></i> </a> </li>
        <li> <a href="*" class="nav-link py-3 border-bottom"> <i class="fa fa-cog"></i> </a> </li>
        <li> <a href="*" class="nav-link py-3 border-bottom"> <i class="fa fa-bookmark"></i> </a> </li>
    </ul>
    <div class="dropdown border-top"> 
    <a href="*" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false"> 
    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="mdo" width="24" height="24" class="rounded-circle" /> </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li><a class="dropdown-item" href="*">New project...</a></li>
            <li><a class="dropdown-item" href="*">Settings</a></li>
            <li><a class="dropdown-item" href="*">Profile</a></li>
            <li>
                <hr class="dropdown-divider"/>
            </li>
            <li><a class="dropdown-item" href="*">Sign out</a></li>
        </ul>
    </div>
</div>
    </div>
    <div class="col col-lg-3">
    <div id="plist" class="people-list">
                <div class="input-group">
                    <h2>Conversation</h2>
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Anupam</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Rich Panel</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    {/* <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Mike Thomas</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Christian Kelly</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Monica Ward</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                        <div class="about">
                            <div class="name">Dean Henry</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                        </div>
                    </li> */}
                </ul>
            </div>
    </div>
    <div class="col-md-auto">
    <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="chat-about">
                                <h6 class="m-b-0">Anupam Saini</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">10:10 AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                            </div>
                            <div class="message other-message float-right"> Hi Anupam, how are you? How is the project coming along? </div>
                        </li>
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:12 AM, Today</span>
                            </div>
                            <div class="message my-message">Fine</div>                                    
                        </li>                               
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:15 AM, Today</span>
                            </div>
                            <div class="message my-message">Project is been ongoing.</div>
                        </li>
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-send"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Enter text here..."/>                                    
                    </div>
                </div>
            </div>

    </div>
    <div className="col align">
                            <a href="*" data-toggle="modal" data-target="#view_info">
                                <img className='img' src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Anupam Saini</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                            <CardComponent />
                      
    </div>
  </div>
</div>
    </body>
        </>
    )
}
export default Dashboard;
