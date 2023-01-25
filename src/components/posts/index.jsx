import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card";
import posts from "../../mock/posts.json"

const Posts = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    // axios
    //   .get("posts")
    //   .then((res) => {
    //     debugger
    //     setPostsList(res.data);
    //     console.log("res", res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setPostsList(posts);
  }, []);

  return (
    <div>
      <h3>Posts List</h3>

      {/* <div>
      {postsList ? (
        <ul>
          {postsList.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}

      {/* {postsList &&
        postsList.length &&
        postsList.map((ele) => {
         return <Card ele={ele} />;
        })} */}

{postsList ? (postsList.map((post) => {
          return <Card key={post.id} post={post} />
        })) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
