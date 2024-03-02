import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import '../UserProfile/userprofile.css'

function MyprofileComponent() {
  return (
    <>
            <div className='d-flex main_profile' >
                <img className='storyImgnew' src={require('../../Assets/imgaes/profile.png')} alt="" />
                <div style={{marginTop:"3px"}}>
                    <div className='d-flex'>
                        <p className='margin mt-1 ' style={{ fontSize: "20px" }}>Shirley Mero</p>
                        <p className='margin'><button type="button" className="btn btn-outline-secondary">Edit profile</button></p>
                        <p className='margin mt-2'><SettingsOutlinedIcon /></p>
                    </div>
                    <div className='d-flex'>
                        <p className='margin mt-2' ><strong>12</strong> posts</p>
                        <p className='margin mt-2'><strong>2M</strong> followers</p>
                        <p className='margin mt-2'><strong>1,240</strong> following</p>
                    </div>
                    <div>
                        <p className='margin mt-2' ><strong>Terry Lucas</strong> </p>
                    </div>
                </div>


            </div>
        </>
  )
}

export default MyprofileComponent