import React from 'react';
const searchBar = ({searchChange}) => {
    return (
        <div>
          <input 
          type="search" placeholder="Find by name"
          className="bg-lightest-blue br3 pa3 ba"
          onChange={searchChange}
          >
          </input>
        </div>

    );
}
export default searchBar;