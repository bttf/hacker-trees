import React, { Component } from 'react';
import Collection from './Collection';
import fetchAskPosts from './data/fetchAskPosts';

import './App.css';

class App extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    fetchAskPosts().then(data => {
      this.setState({ topics: data, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <Collection topics={this.state.topics} />
    );
  }
}

export default App;
