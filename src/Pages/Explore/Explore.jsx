import React from 'react'

function Explore() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">

            <img src={require('../../Assets/imgaes/Explore/pos2.png')} alt="" className='mt-2' style={{ width: "100%" }} />

          </div>
          <div className="col-4">
            <img src={require('../../Assets/imgaes/Explore/pos3.png')} alt="" className='mt-2' style={{ width: "100%" }} />
          </div>
          <div className="col-4">
            <img src={require('../../Assets/imgaes/Explore/pos4.png')} alt="" className='mt-2' style={{ width: "100%" }} />
          </div>
          <div className="col-4">

<img src={require('../../Assets/imgaes/Explore/pos3.png')} alt="" className='mt-2' style={{ width: "100%" }} />
<img src={require('../../Assets/imgaes/Explore/pos2.png')} alt="" style={{ width: "100%", marginTop:"30px"}} />

</div>
<div className="col-8">
<img src={require('../../Assets/imgaes/Explore/pos1.png')} alt="" className='mt-2' style={{ width: "100%" }} />
</div>

        </div>
       
        
      </div>
    </>
  )
}

export default Explore