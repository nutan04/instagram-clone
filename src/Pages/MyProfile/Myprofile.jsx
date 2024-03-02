import React from 'react'
import MyprofileComponent from '../../Component/UserProfile/MyprofileComponent'
import MyprofilenavComponent from '../../Component/ProfileNav/MyprofilenavComponent'

function Myprofile() {
  return (
    <>
      <div className="container" >

        <MyprofileComponent />
      </div>
    
      <div className="container  mb-5">
        <MyprofilenavComponent />

      </div>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="row">
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/storyimg.png')} alt="" className='w-100 ' />
              </div>
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/storyimg.png')} alt="" className='w-100 ' />
              </div>
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/storyimg.png')} alt="" className='w-100 ' />
              </div>
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/profile.png')} alt="" className='w-100 ' />
              </div>
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/profile.png')} alt="" className='w-100 ' />
              </div>
              <div className="col-4 mb-4">
                <img src={require('../../Assets/imgaes/profile.png')} alt="" className='w-100 ' />
              </div>
            </div>
          </div>
          <div className="col col-6 text-center mt-5">
<p><strong>Start capturing and sharing your moments</strong></p>
<p className='text-muted'>Get the app to share your first photo or video.</p>
<div className="storeimg d-flex" >
  <img src={require('../../Assets/imgaes/GooglePlay-Banned.png')} alt="" className='m-2'/>
  <img src={require('../../Assets/imgaes/AppStore-Banned.png')} alt="" className='m-2'/>

</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Myprofile