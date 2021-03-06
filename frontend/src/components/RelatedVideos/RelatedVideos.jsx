import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



const RelatedVideos = (props) => {
    
    const [relatedvideos, setRelatedvideos] = useState([])
    const navigate = useNavigate()


    async function seeRelatedVideos(video_id){
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId={${video_id}}&type=video&key={}`)
            setRelatedvideos(response.data.results);
            console.log('video id')
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
    useEffect(() => {
        let mounted = true;
        if(mounted){
            seeRelatedVideos();
        };
        return () => mounted = false
    }, [])
    
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
      };
    
    
    
    
    return ( 
        <div>
            <ul>
               {relatedvideos.map((video, index) => {
                   if(video.snippet){
                       return(
                           <li key={index}>
                               <button type='button' onClick={() => handleSubmit(video.id)}></button>
                           </li>
                       )
                   }
               })} 
            </ul>
        </div>
     );
}
 
export default RelatedVideos;