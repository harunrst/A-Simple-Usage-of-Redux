import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.css';
import HastagList from './components/HastagList';
import TweetList from './components/TweetList';

function App() {
  return (
    <div>
      <NavBar />
      <br />
      <Search />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <HastagList />
          </div>
          <div className="col-md-8">
            <TweetList />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
