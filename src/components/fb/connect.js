/* eslint-disable no-undef */
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'react-bootstrap';
import '../Login/index.css';
import { Navigate } from 'react-router-dom';

const Facebook = () => {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

    return(
        <div>

<div class="container">
<div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
	          {!login &&
	            <FacebookLogin
	              appId="455027753133133"
	              autoLoad={true}
	              fields="name,email,picture"
	              scope="public_profile,user_friends"
	              callback={responseFacebook}
	              icon="fa-facebook" />
	          }
	          {login &&
            <div>
	            <Image src={picture} roundedCircle />
              <Navigate to="/facebook/delete" />
            </div>
	          }
	        {login &&
	          <div>
	            <h3>{data.name}</h3>
	            <p>
	              {data.email}
	            </p>
              <Navigate to="/facebook/delete" />
	          </div>
	        }
        </div>
                </div>
            </div>
        </div>
    </div>
	    </div>
    </div>
    )
}

export default Facebook;