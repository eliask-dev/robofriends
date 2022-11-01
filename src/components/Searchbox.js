import React from "react";

const Searchbox = ({ searchChange }) => {
    return (
        <>
            <input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder="search robot(s)" onChange={ searchChange }/>
        </>
        
    )
}

export default Searchbox;