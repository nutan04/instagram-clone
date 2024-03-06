import React, { useEffect, useState } from 'react'

function MadeusComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
console.log(data);
  // If loading or error, return loading or error message
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
    {data.map((item,index)=>(
      <div className='ml-5 mt-2'>
        <img src={require(`../Assets/imgaes/${item.profile_img}`)} alt="" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
        <p style={{ fontSize: "12px", fontWeight: "500", marginTop: "10px" }}>{item.profile_name}</p>
      </div>
      ))}
    </>
  )
}

export default MadeusComponent