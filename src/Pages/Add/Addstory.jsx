import React from 'react'

function Addstory() {
  return (
    <>
     <div classNameName="container">
    <div className="card card_design" style={{width:"38rem", height:"20rem",  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
  <div className="card-body text-center">
    <h4 className="card-title ">Create New Post</h4>
    <hr />
   
  <img src={require('../../Assets/imgaes/Icon.png')} alt="" />
    <p className="card-text">Drag photos and videos here</p>
    <a href="#" className="btn btn-primary">Select from your computer</a>
  </div>
</div>
</div>
    </>
   
  )
}

export default Addstory