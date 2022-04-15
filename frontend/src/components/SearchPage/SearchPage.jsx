import axios from 'axios';
import React, { useEffect, useState } from 'react';
const SearchPage = (props) => {
    
    const [videos, setvideos] = useState([]);
    
    
    useEffect(() => {
        getAllVideos();
    }, [])

    async function getAllVideos(){
        let response = await axios.get('http://127.0.0.1:8000/api/youtube_comments/');
        setvideos(response.data)
    }
    
    
    
    return ( 
        <div>
            
        </div>
     );
}
 
export default SearchPage;