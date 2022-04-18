import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const SearchBar = ({getUserInput, userInput}) => {
    
    
    
    
    const navigate = useNavigate()
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
      };
    
    
    
    
    
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