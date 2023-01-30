import React from "react";
import "./style.css";
import HeartIcon from "../heart-icon";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWhishList,
  increaseCount,
} from "../../store/actions/heartIcon.action";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const Card = (props) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const backgroundImage = {
    backgroundImage: `url(https://images.unsplash.com/photo-1542614471-001ccf2b449c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2992&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    width: "100%",
    borderRadius: "10px",
  };
  const dispatch = useDispatch();

  return (
    <div className="card-wrapper" style={backgroundImage}>
      {!props.onCart ? (
        <HeartIcon
          onClick={() => {
            setIsLiked(!isLiked);
            dispatch(addToWhishList(props.post));
          }}
          color={isLiked ? "#001353" : "white"}
          right="120px"
        />
      ) : (
        ""
      )}
      {!props.onCart ? (
        <button
          className="cart-btn"
          onClick={() => {
            dispatch(addToCart(props.post));
          }}
        >
          Add To Cart
        </button>
      ) : (
        <div className="cart-btn count-wrapper">
          <p className="count">
            <AiOutlineMinusSquare />
          </p>
          <p className="count">{props.post.itemCount}</p>
          <p
            className="count"
            onClick={() => {
              dispatch(increaseCount(props.post.id));
            }}
          >
            {" "}
            <AiOutlinePlusSquare />
          </p>
        </div>
      )}
      <div className="content-wrapper">
        <Link to={`/posts/${props.post.id}/comments`}>
          <div className="card">
            <p style={{ fontWeight: "700" }}>Title: {props.post.title}</p>
            <br />
            <p>Description: {props.post.body}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
