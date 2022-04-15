import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";


let initialvalue = {
    user: '',
    video_id: '',
    text: '',
    likes: '',
    dislikes:'',

};


const AddCommentPage  = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialvalue, postNewComment)
    
    
    async function postNewComment(){
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/youtube_comments/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
    
    return ( 
        <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          User:{" "}
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Video Id:{" "}
          <input
            type="text"
            name="video_id"
            value={formData.video_id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          text:{" "}
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </label>
        <label>
          likes:{" "}
          <input
            type="text"
            name="likes"
            value={formData.likes}
            onChange={handleInputChange}
          />
        </label>
        <label>
          dislikes:{" "}
          <input
            type="text"
            name="dislikes"
            value={formData.dislikes}
            onChange={handleInputChange}
          />
        </label>
        
          
        
        <button>AddComment!</button>
      </form>
    </div>
  );
};

     

 
export default AddCommentPage;