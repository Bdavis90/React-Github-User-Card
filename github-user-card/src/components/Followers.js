import React from "react";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    console.log("followers", props);
  }

  render() {
    return (
      // <div>
      //   {this.this.props.followers.map(user => {
      //     return <p>{user.name}</p>;
      //   })}
      // </div>
      <div className="cards">
        <div className="card">
          <img src={this.props.followers.avatar_url} />
          <div className="card-info">
            <h3 className="name">{this.props.followers.name}</h3>
            <p className="this.props.followersname">
              {this.props.followers.login}
            </p>
            <p className="location">
              Location: {this.props.followers.location}
            </p>
            <a href={this.props.followers.url}>
              Profile: {this.props.followers.url}
            </a>
            <p className="followers">
              Followers: {this.props.followers.followers}
            </p>
            <p className="following">
              Following: {this.props.followers.following}
            </p>
            <p className="bio">Bio: {this.props.followers.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Followers;
