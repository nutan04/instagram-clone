import React from 'react'
import UserprofileComponent from '../../Component/UserProfile/UserprofileComponent'
import MadeusComponent from '../../Component/MadeusComponent'
import ProfilenavComponet from '../../Component/ProfileNav/ProfilenavComponet'

function Userprofile() {
  return (
    <>

      <div className="container" >

        <UserprofileComponent />
      </div>
      <div className="container" style={{ borderBottom: "1px solid #dee2ef" }}>
        <div className="madeus d-flex mb-2">
          <MadeusComponent />
         

        </div>
      </div>
      <div className="container  mb-5">
        <ProfilenavComponet />

      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/profile.png')} className='img-fluid' alt="" />
          </div>
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/storyimg.png')} className='img-fluid' alt="" />
          </div>
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/profile.png')} className='img-fluid' alt="" />
          </div>
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/profile.png')} className='img-fluid' alt="" />
          </div>
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/storyimg.png')} className='img-fluid' alt="" />
          </div>
          <div className="col-4 mb-4">
            <img src={require('../../Assets/imgaes/profile.png')} className='img-fluid' alt="" />
          </div>
        </div>
      </div>


    </>

  )
}

export default Userprofile