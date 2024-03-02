import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../UserProfile/userprofile.css'

function UserprofileComponent() {

    return (
        <>
            <div className='d-flex main_profile' >
                <img className='storyImgnew' src={require('../../Assets/imgaes/storyimg.png')} alt="" />
                <div style={{marginTop:"3px"}}>
                    <div className='d-flex'>
                        <p className='margin mt-1 ' style={{ fontSize: "20px" }}>Terrylucas</p>
                        <p className='margin'><button type="button" className="btn btn-primary button"><bold>Follow</bold></button></p>
                        <p className='margin mt-2'><MoreHorizIcon /></p>
                    </div>
                    <div className='d-flex'>
                        <p className='margin mt-2' ><strong>1258</strong> posts</p>
                        <p className='margin mt-2'><strong>4M</strong> followers</p>
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

export default UserprofileComponent