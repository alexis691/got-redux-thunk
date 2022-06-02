import './App.css';
import GotList from './features/GotList/GotList';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="ui pointing menu inverted">
      <div className="ui container">
        <Link to="/" className="item"><i className="icon home"></i>Home</Link>
        <Link to="/got-list" className="item">Got List</Link>
        <Link to="/continents-list" className="item">Continents List</Link>
      </div>
    </div>
    <div className="ui container">
      <Outlet/>
    </div>
  </>
  );
}

export default App;
