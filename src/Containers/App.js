import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBar from '../Components/Searchbar';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then((users) => {
        setRobots(users);
      }).catch((err) => {
        console.log(err);
      });
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filterRobots = robots.filter(robot => {
    return robot.name.toLowerCase().split(" ").join("").includes(
      searchfield.toLowerCase().split(" ").join("")
    )
  })
  if (!robots.length) {
    return (
      <h1 className="load-bar">LOADING...</h1>
    )
  } else {
    return (
      <React.Fragment>
        <div className="tc">
          <h1 className="f1">ROBOFRIENDS</h1>
          <SearchBar searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
