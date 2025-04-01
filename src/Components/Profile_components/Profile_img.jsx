import ref_image from "../../assets/profile_ref.webp"


function Profile_img(props) {

  
    return (
      <>
          <div className="Profile"> 
              <img src={ref_image} alt="profile_image"/>
              <p className="Profile_name"> xxx {props.name} </p>
          </div>
      </>
    )
  }
  export default Profile_img