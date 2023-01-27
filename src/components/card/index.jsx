import React from "react";
import "./style.css";
import HeartIcon from "../heart-icon";
import { useDispatch } from "react-redux";
import { like } from "../../store/actions/heartIcon.action";
import { Link, useParams } from "react-router-dom";

const Card = (props) => {
  console.log(props);
  const [isLiked, setIsLiked] = React.useState(false);
  const backgroundImage = {
    backgroundImage: `url(https://images.unsplash.com/photo-1542614471-001ccf2b449c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2992&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    width: "100%",
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsLiked(!isLiked);
    dispatch(like());
  };

  return (
    <Link to={`/posts/${props.post.id}/comments`}>
    <div className="card-wrapper" style={backgroundImage}>
      <HeartIcon onClick={handleClick} color={isLiked ? 'red': 'white'} />
      <div className="content-wrapper">
        <div className="card" onClick={handleClick}>
          <p style={{ fontWeight: "700" }}>Title: {props.post.title}</p>
          <br />
          <p>Description: {props.post.body}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
