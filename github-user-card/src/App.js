import React from "react";
import "./App.css";
import MyCard from "./components/User";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    myCard: [],
    followers: []
  };

  componentDidMount = () => {
    fetch(`https://api.github.com/users/bdavis90`)
      .then(res => res.json())
      .then(card => {
        this.setState({ myCard: card });
      })
      .catch(err => console.log(err));

    fetch(`https://api.github.com/users/bdavis90/followers`)
      .then(res => res.json())
      .then(follower => {
        console.log(follower);
        this.setState({ followers: follower });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyCard key={this.state.myCard.id} myCard={this.state.myCard} />
          {this.state.followers.map(follower => (
            <Followers followers={follower} />
          ))}
          {/* <Followers followers={this.state.followers} /> */}
        </div>
      </div>
    );
  }
}

export default App;
