

import { useNavigate } from "react-router-dom";
const SearchBar = ({getUserInput, userInput}) => {
    
    
    
    
    const navigate = useNavigate()
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
      };
    
    
    
    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search</label>
                <input name={''} type='search' value={userInput} onChange={(event) => getUserInput(event)}/>
            </div>
        </form>
     );
}
 
export default SearchBar;