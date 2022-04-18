import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
const VideoPage = (props) => {
    
        let DefaultValue = {
            Title: '',
            Description: ''
        }
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [] = useCustomForm(DefaultValue, Videos)

    
    
    
    async function Videos(){
        try {
            let response = await axios.get('https://www.googleapis.com/youtube/v3/search')
            navigate("/")
        } catch (error) {
            
        }
    }
    
    
    
    
    return ( 
        <div>
            <h3>Video below</h3>
            <iframe 
                id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0">

            </iframe>
            <div>
                <ul>
                   <label>
                       Title: 
                    </label>
                    <label>
                        Description:
                    </label> 
                </ul>
            </div>
        </div>
        
     );
}
 
export default VideoPage;


