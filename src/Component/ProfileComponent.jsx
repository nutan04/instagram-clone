import React, { useEffect, useState } from 'react'

function ProfileComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const suggestImg = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    marginTop: "4px"
  }


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/get-suggestion');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
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
    {data.map((item,index)=>(
      <div className='d-flex mt-1'>
        <img src={require(`../Assets/imgaes/${item.profile_img}`)} alt="" style={suggestImg} />
        <div className="ml-3">
          <span>{item.profile_name}</span>
          <p className='text-muted'>This is message encrypted by security</p>
        </div >

      </div>
      ))}
    </>
  )
}

export default ProfileComponent