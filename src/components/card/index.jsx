import React from "react";
import "./style.css";

const Card = (props) => {
  const backgroundImage = {
    backgroundImage: `url(${props.post.postUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    width: "100%",
  };
  return (
    <div className="card-wrapper" style={backgroundImage}>
      <div className="content-wrapper">
        <div className="card">
        <p style={{fontWeight:"700"}}>Title: {props.post.title}</p>
        <br />
        <p>Descripotion: {props.post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
