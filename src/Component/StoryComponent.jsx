import React from 'react'

function StoryComponent() {
    const storybox = {
        //  border: "1px solid red",
        height: "100px",
        width: "90px",
        marginTop: "6px",
    };
    const border = {
        border: "3px solid #d36432",
        height: "68px",
        width: "68px",
        borderRadius: "50%",
        margin: "6px 11px",

    };
    const image = {
        height: "56px",
        width: "56px",
        borderRadius: "50%",
        margin: "3px",
    }
    const story_text = {
        fontSize: "16px",
        fontWeight: "400",
    }
    return (
        <>
            <div style={storybox} className='text-center'>
                <div style={border}>
                    <img src={require('../Assets/imgaes/profile.png')} alt="" style={image} />
                </div>
                <p style={story_text}>Your Story</p>
            </div>
        </>
    )
}

export default StoryComponent