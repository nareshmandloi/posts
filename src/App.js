import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Welcome from './components/welcome'
import Posts from './components/posts'
import Comments from './components/comments';
import WishList from './components/wish-list-items';
import Cart from './components/cart-items';


function App() {

  const styles = {
    app: {
      position: 'relative',
      padding: '10px',
    },
  }

  const { id } = useParams();

  return (
    <div className="App" style={styles.app}>
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id/comments' element={<Comments />} />
          <Route path='/whishList' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
