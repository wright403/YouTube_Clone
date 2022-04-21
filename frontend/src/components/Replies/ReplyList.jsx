import React, { useState } from 'react';


const ReplyList = ({replyRcd}) => {
    
    
    
    
    const handleLike= () => {
        
        console.log("Need to handle like action here")
    }

    const handleDisklike= () => {
        // TODO: Replace alert with actual database update
        alert("Disliking comment")
    }
    
    
    
    
    
    
    
    
    
    return ( 
        <div>
           <form className={handleSubmit}>

               {/* <label>Comment</label>
               <input className='' type='text' value={commentsection} onChange={(event) => setCommentsection(event.target.value)} /> */}
               <p>Text: {replyRcd.text}</p>
               <button onClick={handleLike}>Like {replyRcd.likes}</button>
               <button onClick={handleDisklike}>Dislike {replyRcd.dislikes}</button>

           </form>
        </div>
     );
     
}
 
export default ReplyList;