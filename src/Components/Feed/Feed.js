import React from 'react';
import './feed.css';
const Feed = ({author,download_url}) =>{
    return(
        <div className='div-feed'>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{author}</div>
            <div style={{width:'100%',height:'auto'}}>
                <img src={download_url} alt=''/>
            </div>
        </div>
    )
}

export default Feed;