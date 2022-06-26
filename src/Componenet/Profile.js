import React from 'react'
import "./Profile.css"
import image from "./Amit.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = (props) => {
  return (
    <div className='container'>
        <img src={image} className="image"
        />
        <h2>{props.name}</h2>
        <h3>{props.skill}</h3>
        <div className='SocialMediaIcon'>
            <FacebookRoundedIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <LinkedInIcon className='icon'/>
        </div>
    </div>
  )
}

export default Profile