import React, { useEffect, useState } from 'react';
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
    
    
    
    useEffect(() => {
        
        console.log('useEffect')
    }, [getComment])
    
    
    
    
    
    
    return ( 
        <div>
          {comments &&
          props.comments.map((comment) => (
              <div>
                  <p>Comment: {comment.text}</p>
                  <p>Likes: {comment.likes}</p>
                  <p>Dislikes: {comment.dislikes}</p>
                  <p>User: {comment.user_id}</p>
              </div>
          ))}
          
        </div>
     );
}
 
export default Comments;
