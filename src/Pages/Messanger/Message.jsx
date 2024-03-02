import React from 'react'
import ProfileComponent from '../../Component/ProfileComponent'
import '../Messanger/message.css'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
function Message() {
  return (
    <>
      <div className="container">
        <div className="row" style={{border:"1px solid #dee2e6", padding:"0px"}} >
          <div className=" col-lg-4 col-md-4 col-sm-12" style={{border:"1px solid #dee2e6", padding:"0px"}} >
            <div className="dropdown">
              <div className="row">
                <div className="col-10">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>ShirleyMero</option>
                  </select>
                </div>
                <div className="col-2">
                  <div className="p-1">
                    <EditNoteOutlinedIcon />
                  </div>

                </div>
              </div>
            </div>
          <div className='m-4'>
            <ProfileComponent />
            <ProfileComponent />
           
            
            </div>
          </div>
          <div className=" col-lg-8 col-md-8 col-sm-12" >
            <div className="messageblock" style={{marginTop:"30%", marginBottom:"30%"}}>
              <img src={require('../../Assets/imgaes/Icon.png')} alt="" className='mb-3'/>
              <p>Your Message</p>
              <p className='text-muted'>Send private photos and messages to a friend or group</p>
            </div>  
          </div>

        </div>
      </div>
    </>
  )
}

export default Message