import React, { useEffect, useState } from 'react'
import '../HeighLight/heightlight.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

function HeighlightComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/get-story-heighlight');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log('Data fetched:', jsonData.data);
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  // If loading or error, return loading or error message
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <>
     {data.map((item, index) => (
      <>
      <div className="profilehilight d-flex">

        <div className='text-center profilebox'>
          <div className="borderprofile">
            <img src={require(`../../Assets/imgaes/${item.profileimage}`)} alt="" className="image_profile" />
          </div>
        </div>
        <p className='profile_name'>{item.profilename}</p>

      </div>
      <p className='text-right expanddot'><MoreHorizIcon /></p>
      <img src={require(`../../Assets/imgaes/${item.storyimage}`)} alt="" className='img-fluid storyImg' />

      <div className="actionsymbol ">
        <div className='d-flex'  >

          <p className='p-2'><FavoriteBorderIcon /> </p>
          <p className='p-2'><ChatBubbleOutlineOutlinedIcon /> </p>
          <p className='p-2'><TelegramIcon /> </p>
        </div>
        <div className='text-right savepost'> <BookmarkBorderIcon /></div>
        <div className="commentedarea pl-2">
          <p className='like font-weight-bold '> {item.totallike} Likes </p>
          <p className="comment justify-content-center">{item.comments}</p>
          <p className="viewall text-muted">View all {item.totalcomment} comment</p>
          <p className="timeofpost text-muted" style={{ fontSize: "10px" }}>{item.time} AGO</p>
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
      <hr />
      </>
 ))}
    </>
  )
}

export default HeighlightComponent