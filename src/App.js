import './App.css';
import HeartIcon from './components/heart-icon/'
import { Route, Routes, useParams } from 'react-router-dom';
import Welcome from './components/welcome'
import Posts from './components/posts'
import { useDispatch, useSelector } from 'react-redux';
import { like } from './store/actions/heartIcon.action';
import Comments from './components/comments';


function App() {

  const styles = {
    app: {
      position: 'relative',
      padding: '10px',
    },
    count: {
      position: "absolute",
      right: "34px",
      top: "50px",
      fontSize: "14px",
      color: "red",
      margin: "0",
    }
  }

  const { id } = useParams();


  const count = useSelector((state) => state.likes);

  return (
    <div className="App" style={styles.app}>
      <div>
        <HeartIcon color={'red'} />
        <p style={styles.count}> {count}</p>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id/comments' element={<Comments />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
