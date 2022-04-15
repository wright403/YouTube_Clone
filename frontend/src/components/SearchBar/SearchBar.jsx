import axios from 'axios';
import React, { useState, useEffect } from 'react';
const SearchBar = ({getUserInput, userInput}) => {
    
    
  
    
    
    
    
    
    return ( 
        <form>
            <div>
                <label>Search</label>
                <input name={''} type='search' value={userInput} onChange={(event) => getUserInput(event)}/>
            </div>
        </form>
     );
}
 
export default SearchBar;