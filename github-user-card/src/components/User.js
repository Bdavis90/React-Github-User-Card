import React from "react";

function MyCard(props) {
  console.log(props);
  return (
    <div className="cards">
      <div className="card">
        <img src={props.myCard.avatar_url} alt="me" />
        <div className="card-info">
          <h3 className="name">{props.myCard.name}</h3>
          <p className="username">{props.myCard.login}</p>
          <p className="location">Location: {props.myCard.location}</p>
          <a href={props.myCard.url}>Profile: {props.myCard.url}</a>
          <p className="followers">Followers: {props.myCard.followers}</p>
          <p className="following">Following: {props.myCard.following}</p>
          <p className="bio">Bio: {props.myCard.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
