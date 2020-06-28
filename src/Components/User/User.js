import React from 'react';
import { withRouter} from 'react-router-dom';
const User = ({name,username,email,history}) =>{
    const handleClick = () =>{
        history.push(`/${username}`,{
            name,
            email,
            username
        })
    }
    return(
        <div style={{padding:'5px 0'}}>
            <div style={{fontSize:'1.5rem',width:'min-content',cursor:'pointer'}} onClick={handleClick}>{username}</div>
            <div style={{fontSize:'0.8rem',color:'silver'}}>{name}</div>
        </div>
    )
}

export default  withRouter(User);