import React from 'react';
import Header from './components/Header';
import './App.css';
import SideBar from './components/SideBar';
import Videos from './components/Videos';
import Comments from './components/Comments';
import axios from 'axios';
//import cors from 'cors';

function App() {




  return (
    <div className="App">
      <Header/>

      <div className="main__page">
        <SideBar />
        <Videos />
        <Comments />
      </div>
      
    </div>
  );
}

export default App;
