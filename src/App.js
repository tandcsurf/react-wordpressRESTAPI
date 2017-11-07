import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    };
  }

  renderPosts(post) {
    return (<div key={post.id}>
    <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
    <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </div>)
  }

  componentDidMount() {
    console.log("component did mount")
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const init = {
      method: 'GET',
      headers,
      mode: 'cors',
    }
    fetch("http://li468-9.members.linode.com/wp-json/wp/v2/posts", init)
      .then(response => response.json())
      .then(parsedResponse => this.setState({posts: parsedResponse}));
  }
  render() {
    console.log(this.state.posts, "this.state.posts");
    return (
      <div className="App">
        {this.state.posts.map(this.renderPosts)}
      </div>
    );
  }
}

export default App;
