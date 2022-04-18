import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Link from "react-router-dom";
import axios from 'axios';


const Comments = (props) => {
    const [comments, setComments] = useState([]);


    async function getComment(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/youtube_comments/')
            setComments(response.data);
        } catch (error) {
            console.log('Something went wrong! Please try again')
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 

     );
}
 
export default Comments;
