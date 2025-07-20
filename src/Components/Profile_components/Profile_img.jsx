import ref_image from "../../assets/profile_ref.webp"
import Cookies from 'js-cookie';
import { useState } from "react";
function Profile_img(props) {

  
    return (
      <>
          <div className="Profile"> 
              <img src={ref_image} alt="profile_image" className="Profile_img"/>
              <p className="Profile_name"> {props.name} </p>
          </div>
      </>
    )
  }
  export default Profile_img