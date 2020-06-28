import React from 'react';
import Feed from '../Feed/Feed';

class Feeds extends React.Component{
    state={
        feeds:null
    }

    async componentDidMount(){
        const resp = await fetch('https://picsum.photos/v2/list')
        const feeds = await resp.json()
        this.setState({feeds})
    }

    render(){
        const {feeds} = this.state
        return(
            <div style={{width:'60%',display:'flex',flexDirection:'column',padding:'0 10px'}}>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }
}

export default Feeds;
