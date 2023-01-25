import './App.css';
import HeartIcon from './components/heart-icon/'
import {Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome'
import Posts from './components/posts'


function App() {

  const styles = {
    app: {
      position: 'relative',
      padding: '10px',
    },
  }

  return (
    <div className="App" style={styles.app}>
      <div>
        <HeartIcon />
        <Routes>
          <Route path='/' element={ <Welcome />}/>
          <Route path='/posts' element={ <Posts />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
