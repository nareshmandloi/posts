import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card";
import posts from "../../mock/posts.json";
import HeartIcon from "../heart-icon";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import "./style.css";
import { postList } from "../../store/actions/heartIcon.action";
import { Link } from "react-router-dom";
import '../../App.css'

const Posts = () => {
  const dispatch = useDispatch();
  const [postsList, setPostsList] = useState([]);
  const wishListCount = useSelector((state) => state.wishListedItems.length);
  const cartCount = useSelector((state) => state.cartItems.length);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostsList(res.data.map((ele) => {
          return {...ele, itemCount: 1}
        }));
        dispatch(postList(res.data.map((ele) => {
          return {...ele, itemCount: 1}
        })));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="posts-wrapper">
      <div>
        <h3 className="title">Posts List</h3>
        <Link to="/cart">
          <FiShoppingCart style={styles.cart} />
        </Link>
        <p style={styles.cartCount}> {cartCount}</p>
        <Link to="/whishList">
          <HeartIcon color={"#00155E"} right="70px" />
        </Link>
        <p style={styles.wishListCount}> {wishListCount}</p>
      </div>

      {postsList ? (
        postsList.map((post) => {
          return <Card key={post.id} post={post} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  wishListCount: {
    position: "absolute",
    right: "63px",
    top: "11px",
    fontSize: "14px",
    color: "#001353",
    margin: "0",
  },
  cartCount: {
    position: "absolute",
    right: "17px",
    top: "12px",
    fontSize: "14px",
    color: "#001353",
    margin: "0",
  },
  cart: {
    color: "#001353",
    fontSize: "27px",
    position: "absolute",
    top: "26px",
    right: "26px",
  },
};

export default Posts;
