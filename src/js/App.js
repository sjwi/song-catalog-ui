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

const HEADER_HEIGHT = 56;
export const SCROLL_UP = "UP";
export const SCROLL_DOWN = "DOWN";

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ songsLoading, setSongsLoading ] = useState(true);
  const [ sets, setSets ] = useState([]);
  const [ setsLoading, setSetsLoading ] = useState(true);
  const [scrollPos, setScrollPos ] = useState(SCROLL_UP);

  const getSongs = () => {
    axios.get(BASE_URL + '/songs')
      .then((response) => {
        setSongs(response.data);
        setSongsLoading(false);
      })
  }

  const getSets = () => {
    axios.get(BASE_URL + '/setlists')
      .then((response) => {
        setSets(response.data);
        setSetsLoading(false);
      })
  }

  useEffect(() => {
    getSongs()
  },[])
  useEffect(() => {
    getSets()
  },[])
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {}
    console.error = () => {}
    console.debug = () => {}
  }

  let scrollPositions = {}
  const listenScrollEvent = (e) => {
    const targId = e.target.id;
    const curPos = document.getElementById(targId).scrollTop;
    let dir = scrollPos;
    if (targId in scrollPositions) {
      let prevPos = scrollPositions[targId];
      if (curPos > HEADER_HEIGHT)
        dir = curPos - prevPos > 0 ? SCROLL_DOWN : SCROLL_UP;
      else
        dir = SCROLL_UP;
    }
    scrollPositions[targId] = curPos;
    console.log(dir);
    setScrollPos(dir);
  }

  return (
    <APIErrorProvider>
      <Router>
        <div className="App scrollbar-hide text-t-primary">
          <Header scrollPos={scrollPos}/>
          <Home songs={songs} setSongs={setSongs} songsLoading={songsLoading} sets={sets} setSets={setSets} setsLoading={setsLoading} listenScrollEvent={listenScrollEvent} />
        </div>
      </Router>
    </APIErrorProvider>
  );
}

export default App;
