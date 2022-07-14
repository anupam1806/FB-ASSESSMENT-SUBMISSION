import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/index.css';

const Delete = () => {
    return(
        <div>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h5 className="text-center text-info">Facebook Page Integration</h5><br/>
                            <div className="form-group">
                                <input type="submit" name="submit" className="btn btn-info btn-md delete" value="Delete Integration" />
                            </div>
                            <div className="form-group">
                                <Link to="/dashboard">
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="Reply to Message" />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Delete;