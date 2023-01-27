import React from "react";
import { FaHeart } from "react-icons/fa";

const HeartIcon = (props) => {
  console.log(props);

  const styles = {
    icon: {
      position: "absolute",
      right: "25px",
      top: "25px",
      fontSize: "25px",
      color: `${props.color}`,
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.icon}>
      <FaHeart onClick={props.onClick} />
      <br />
    </div>
  );
};

export default HeartIcon;
