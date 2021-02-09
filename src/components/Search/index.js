import React from "react";

function Search(props) {  
    return (   
    <div>
        <form>
            <label>
            <input 
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder='Search Employee'
                id="search"
             />
            </label>
        </form>
        </div>
    )
}

export default Search; 

