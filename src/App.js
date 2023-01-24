import './App.css';
import HeartIcon from './components/heart-icon/'
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';
import Welcone from './components/welcome'
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
      </div>
      <Welcone /> 
      {/* <Posts /> */}
      {/* <BrowserRouter>
      <Routes /> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;
