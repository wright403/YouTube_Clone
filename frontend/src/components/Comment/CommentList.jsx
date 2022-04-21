import React, { useState } from 'react';


// ! Opt 1: VideoId will be passed in through props
// * Opt 2: Specific comment record will be passed in through props
const CommentList = ({commentRcd}) => {
    
    
    
    
    
    
    
    const handleLike= () => {
        
        console.log("Need to handle like action here")
    }

    const handleDisklike= () => {
        // TODO: Replace alert with actual database update
        alert("Disliking comment")
    }
    
    return ( 
        <div>
           <form>

               {/* <label>Comment</label>
               <input className='' type='text' value={commentsection} onChange={(event) => setCommentsection(event.target.value)} /> */}
               <p>Text: {commentRcd.text}</p>
               <button onClick={handleLike}>Like {commentRcd.likes}</button>
               <button onClick={handleDisklike}>Dislike {commentRcd.dislikes}</button>

           </form>
        </div>
     );
}
 
export default CommentList;