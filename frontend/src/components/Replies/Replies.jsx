import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const Replies = (props) => {
    
    const [replies, setReplies] = useState([])
    
    async function getreplies(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/youtube_comments/')
            setReplies(response.data);
        } catch (error) {
            console.log('Something went wrong! Please try again')
        }
    }
    
    
    
    
    
    return ( 
        <div>
            {replies &&
          props.replies.map((reply) => (
              <div>
                  <p>Text: {reply.text}</p>
                  <p>User: {reply.user_id}</p>
              </div>
          ))}
        </div>
     );
}
 
export default Replies;