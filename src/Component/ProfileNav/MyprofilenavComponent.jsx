import React from 'react'
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import '../ProfileNav/profilenav.css'
function MyprofilenavComponent() {
    return (
        <ul className='d-flex list-unstyled fixmargin'>
            <li className='mr-3 ml-5 active'><span className='mr-2 ml-2'><GridOnOutlinedIcon /></span> <strong>POSTS</strong></li>
            <li className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><BookmarkOutlinedIcon /></span> <strong>SAVED</strong></li>
            <li className='mr-3 ml-5 mt-3 text-muted '><span className='mr-2 ml-2'><LocalOfferOutlinedIcon /></span> <strong>TAGGED</strong></li>
        </ul>
    )
}

export default MyprofilenavComponent