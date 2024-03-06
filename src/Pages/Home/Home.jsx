import React from 'react'
import StoryComponent from '../../Component/StoryComponent'
import '../Home/home.css'
import HeighlightComponent from '../../Component/HeighLight/HeighlightComponent'
import SuggestionComponent from '../../Component/SuggestionComponent'
import { Link } from 'react-router-dom'

function Home() {
  const suggestionboc = {
    textDecoration: "none"
  }
  const suggestImg = {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    marginTop: "4px"
  }
  return (
    <>

      <div className="container" >


        <div className="row">
          <div className=" col-lg-8 col-md-8 col-sm-12" >
            <div className="storybox d-flex">
              <StoryComponent />
            
            </div>
            <div className="heighlighbox">
              <HeighlightComponent />
            </div>

          </div>
          <div className=" col-lg-4 col-md-4 col-sm-12" >

            <div className='d-flex mt-1'>
              <img src={require('../../Assets/imgaes/profile.png')} alt="" style={suggestImg} />
              <div className="ml-3 mt-2" style={{marginRight:"107px"}}>
                <span>shrleyremo</span>
                <p className='text-muted'>Romeo Sherlay</p>
              </div>
              <div className='mt-3'>
                <Link to="myprofile" className='mt-2 ml-2' style={suggestionboc}>Switch</Link>
              </div>
            </div>

            <p className='text-muted'>Suggestion for you</p>
            <div style={{ textAlign: "right", marginTop: "-35px", fontSize: "14px", fontWeight: "700", marginBottom: "10px" }}>
              <a href="http://" className=' text-dark' style={{ textDecoration: "none", }} >See All</a>
            </div>
            <SuggestionComponent />
            <SuggestionComponent />
            <SuggestionComponent />
            <SuggestionComponent />

          </div>
        </div>
      </div>

    </>
  )
}

export default Home