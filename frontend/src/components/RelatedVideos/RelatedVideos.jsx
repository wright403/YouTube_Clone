import axios from 'axios';
import React, { useState } from 'react';


const RelatedVideos = (props) => {
    
    const [relatedvideos, setRelatedvideos] = useState([])
    const APIKEY = w4XH3LYleDA

    async function seeRelatedVideos(video_id){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId={${video_id}}&type=video&key={${APIKEY}}`)
    }
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
        ''
     );
}
 
export default RelatedVideos;