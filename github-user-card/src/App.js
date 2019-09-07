import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    fetch(`https://api.github.com/users/bdavis90`)
      .then(res => res.json())
      .then(user => {
        this.setState({ users: user });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <User user={this.state.users} />
      </div>
    );
  }
}

export default App;
