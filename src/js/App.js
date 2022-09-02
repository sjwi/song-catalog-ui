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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const HEADER_HEIGHT = 56;
export const SCROLL_UP = "UP";
export const SCROLL_DOWN = "DOWN";

function App() {
  const [scrollPos, setScrollPos ] = useState(SCROLL_UP);
  const queryClient = new QueryClient();

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
    setScrollPos(dir);
  }

  return (
    <APIErrorProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App scrollbar-hide text-t-primary">
            <Header scrollPos={scrollPos}/>
            <Home listenScrollEvent={listenScrollEvent} />
          </div>
        </Router>
      </QueryClientProvider>
    </APIErrorProvider>
  );
}

export default App;
