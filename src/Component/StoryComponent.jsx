import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function StoryComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/get-story');
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

    // Once data is loaded, render the component
    // Once data is loaded, render the component
    return (
        <>
            {data.map((item, index) => (
                <div key={index} className='text-center'>
                    <div style={styles.storyBox}>
                        <div style={styles.border}>
                            <img src={require(`../Assets/imgaes/${item.image}`)} alt="" style={styles.image} />
                        </div>
                        <p style={styles.storyText}>{item.title}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

// CSS styles
const styles = {
    storyBox: {
        height: "100px",
        width: "90px",
        marginTop: "6px",
    },
    border: {
        border: "3px solid #d36432",
        height: "68px",
        width: "68px",
        borderRadius: "50%",
        margin: "6px 11px",
    },
    image: {
        height: "56px",
        width: "56px",
        borderRadius: "50%",
        margin: "3px",
    },
    storyText: {
        fontSize: "16px",
        fontWeight: "400",
    }
};

export default StoryComponent;
