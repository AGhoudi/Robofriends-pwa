import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            
            <input
                aria-label="search robots"
                id="searchBox"
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search robots"
                onChange={searchChange} 
            />
            <label htmlFor="searchBox" aria-label="search bar" style={{color: 'rgba(0,0,0,0)'}}>Search Bar</label>
        </div>        
    );
}

export default SearchBox;