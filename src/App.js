import React, { Component } from 'react';
import logo from './logo.png';
import TextField from '@material-ui/core/TextField';
import Movie from './Movie';
import './App.css';

class App extends Component {

  constructor(props) {
    super( props );
    this.apiURL = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=8596adabbabcc3b786e1debc41122857&query="
    this.state = {
      searchTerm: '',
      movieResultList: []
    }
  }

  handleSearchChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleKeyDown(e) {
    if(e.keyCode === 13) {
      this.getMovieList();
    }
  }
  async getMovieList() {
    const self = this;
    try {
      let self = this;
      const search = self.state.searchTerm;
      const response = await this.getResults(search);
      self.setState({movieResultList: response.results})
      if(response.results.length) {
        self.setState({movieResultList: response.results})
    } else {
        console.log("No Results found!")
    }  
    } catch(error) {
      console.log("Error in fetching results >> " + error);
    }
  }
  
  async getResults(search) {
      const url = this.apiURL + search;
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      if(data.Error) {
          throw new Error(data.Error);
      }
      return data;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> <br/>
          <TextField
              id="searchTerm"
              label="Movie"
              margin="normal"
              className="App-textField"
              placeholder="Search Movie Name"
              value={this.state.searchTerm}
              onKeyDown={this.handleKeyDown.bind(this)}
              onChange={this.handleSearchChange.bind(this)}
            />
        </header>
        { this.state.movieResultList && this.state.movieResultList.length > 0 ? 
          <Movie movies={this.state.movieResultList} />
          : null }
      </div>
    );
  }
}

export default App;
