import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBar from '../Components/Searchbar';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchfield: '',

    }
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(respnse => {
      return respnse.json();
    })
      .then(users => {
        this.setState({ robots: users });
      })
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  render() {
    //to remove this.state destructure it.
    //const {robots,searchfield} = this.state;
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().split(" ").join("").includes(
        this.state.searchfield.toLowerCase().split(" ").join("")
      );
    })
    if (!this.state.robots.length) {
      return <h1 className="load-bar">LOADING...</h1>
    } else {
      return (
        <React.Fragment>
          <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBar searchChange={this.onSearchChange} />
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
}
export default App;
