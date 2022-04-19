import ReactPlayer from 'react-player'
import React, { useState } from 'react';

const Videoplayer = (props) => {
    return ( 
        <div>
           <body>
               <a>
                   <ReactPlayer url='https://www.youtube.com/watch?v=TpigJNeY3RU&list=RDTpigJNeY3RU&start_radio=1' />
                   <ReactPlayer url='https://www.youtube.com/watch?v=HEwFWFwPKmw' />
               </a>
            </body> 
        </div>
     );
}
 
export default Videoplayer;