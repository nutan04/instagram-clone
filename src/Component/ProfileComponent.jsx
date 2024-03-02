import React from 'react'

function ProfileComponent() {
    const suggestImg = {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        marginTop: "4px"
    }
  return (
    <div className='d-flex mt-1'>
    <img src={require('../Assets/imgaes/storyimg.png')} alt="" style={suggestImg} />
    <div className="ml-3">
        <span>teryulacas</span>
        <p className='text-muted'>Followed by teryulacas +2 more</p>
    </div >
    
</div>
  )
}

export default ProfileComponent