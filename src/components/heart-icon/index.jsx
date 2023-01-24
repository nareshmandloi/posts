import { color } from '@mui/system';
import React from 'react'
import { FaHeart } from 'react-icons/fa';


const HeartIcon = () => {

  const styles = {
    icon: {
      position: 'absolute',
      right: '25px',
      top: '25px',
      fontSize: '25px',
      color: 'red',
    },
    count: {
      margin: '0',
      fontSize: '14px',
      marginLeft: '5px',
      color: "white"
    }
  }

  return (
    <div style={styles.icon}>
        <FaHeart />
        <br />
<p style={styles.count}> 10</p>
    </div>
  )
}

export default HeartIcon