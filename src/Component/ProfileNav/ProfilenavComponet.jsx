import React from 'react'
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import '../ProfileNav/profilenav.css'
function ProfilenavComponet() {
  return (
    <ul className='d-flex list-unstyled fixmargin'>
        <li className='mr-3 ml-5   active'><span className='mr-2 ml-2'><GridOnOutlinedIcon/></span> <strong>POSTS</strong></li>
        <li  className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><MenuBookOutlinedIcon/></span> <strong>GUIDES</strong></li>
        <li  className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><SlideshowOutlinedIcon/></span> <strong>REELS</strong></li>
        <li  className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><VideoCallOutlinedIcon/></span> <strong>VIDEOS</strong></li>
        <li  className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><LocalOfferOutlinedIcon/></span> <strong>TAGGED</strong></li>


    </ul>
  )
}

export default ProfilenavComponet