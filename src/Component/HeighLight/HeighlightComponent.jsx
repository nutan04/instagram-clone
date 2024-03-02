import React from 'react'
import '../HeighLight/heightlight.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

function HeighlightComponent() {
  return (
    <>
      <div className="profilehilight d-flex">
        <div className='text-center profilebox'>
          <div className="borderprofile">
            <img src={require('../../Assets/imgaes/profile.png')} alt="" className="image_profile" />
          </div>
        </div>
        <p className='profile_name'>Teraluycass</p>

      </div>
      <p className='text-right expanddot'><MoreHorizIcon /></p>
      <img src={require('../../Assets/imgaes/storyimg.png')} alt="" className='img-fluid storyImg' />

      <div className="actionsymbol ">
        <div className='d-flex'  >

          <p className='p-2'><FavoriteBorderIcon /> </p>
          <p className='p-2'><ChatBubbleOutlineOutlinedIcon /> </p>
          <p className='p-2'><TelegramIcon /> </p>
        </div>
        <div className='text-right savepost'> <BookmarkBorderIcon /></div>
        <div className="commentedarea pl-2">
          <p className='like font-weight-bold '> 1,067 Likes </p>
          <p className="comment justify-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque harum vero atque adipisci molestias nisi non.</p>
          <p className="viewall text-muted">View all 100 comment</p>
          <p className="timeofpost text-muted" style={{ fontSize: "10px" }}>1 HOUR AGO</p>
        </div>
        <div className="post d-flex">
          <SentimentSatisfiedAltOutlinedIcon />
          <input type="text" name="" placeholder='Add a comment' id="" className='comment' style={{ marginTop: "-5px" }} />
          <input />

        </div>
        <div className='text-right postbtn'>
          <button type="button" class="btn btn-primary" style={{ padding: "4px 32px" }}>Post</button>
        </div>
      </div>

    </>
  )
}

export default HeighlightComponent