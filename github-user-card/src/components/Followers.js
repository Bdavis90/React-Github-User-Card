import React from "react";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    console.log("followers", props);
  }

  render() {
    return "hi";
    // <div>
    //   {this.users.map(user => {
    //     return <p>{user.name}</p>;
    //   })}
    // </div>
    // <div className="cards">
    //   <div className="card">
    //     <img src={users.avatar_url} />
    //     <div className="card-info">
    //       <h3 className="name">{users.name}</h3>
    //       <p className="usersname">{users.login}</p>
    //       <p className="location">Location: {users.location}</p>
    //       <a href={users.url}>Profile: {users.url}</a>
    //       <p className="followers">Followers: {users.followers}</p>
    //       <p className="following">Following: {users.following}</p>
    //       <p className="bio">Bio: {users.bio}</p>
    //     </div>
    //   </div>
    // </div>;
  }
}

export default Followers;
