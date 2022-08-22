import logo from 'resources/logo.svg';
import Header from 'js/components/header/Header.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'css/App.css';
import 'css/index.css';
import 'css/colors.css';
import { Component, useEffect, useState } from 'react';
import AuthApi from 'AuthApi';
import APIErrorProvider from './providers/APIErrorProvider';
import axios from 'axios';
import { BASE_URL } from './clients/ClientConfig';
import Home from './pages/home/Home';


function App() {
  const [ songs, setSongs ] = useState([]);
  const [ songsLoading, setSongsLoading ] = useState(true);
  useEffect(() => {
    axios.get(BASE_URL + '/songs')
      .then((response) => {
        setSongs(response.data);
        setSongsLoading(false);
      })
  },[])
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {}
    console.error = () => {}
    console.debug = () => {}
  }
  return (
    <APIErrorProvider>
      <Router>
        <div className="App">
          <Header />
          <Home songs={songs} setSongs={setSongs} songsLoading={songsLoading} />
        </div>
      </Router>
    </APIErrorProvider>
  );
}

export default App;
