import Header from 'js/components/header/Header.js'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import 'css/App.css';
import 'css/index.css';
import 'css/colors.css';
import { useEffect, useState } from 'react';
import APIErrorProvider from './providers/APIErrorProvider';
import Home from './pages/home/Home';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import SetList from './pages/setlist/SetList';

export const HEADER_HEIGHT = 56;
export const SCROLL_UP = "UP";
export const SCROLL_DOWN = "DOWN";

function App(props) {
  const [scrollPos, setScrollPos ] = useState(SCROLL_UP);
  const [stickyNav, setStickyNav ] = useState(true);
  const queryClient = new QueryClient();

  if (process.env.NODE_ENV === 'production') {
    console.log = () => {}
    console.error = () => {}
    console.debug = () => {}
  }

  let scrollPositions = {}
  const listenScrollEvent = (e) => {
    const targId = e.target.id == null? 'body': e.target.id;
    let curPos;
    if (targId == 'body') {
      curPos = window.scrollY;
    } else {
      curPos = document.getElementById(targId).scrollTop;
    }
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
  document.getElementsByTagName('body')[0].onscroll = (e) => {
    listenScrollEvent(e)
  };

  return (
    <APIErrorProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App scrollbar-hide text-t-primary">
          <Header scrollPos={scrollPos} stickyNav={stickyNav} />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home listenScrollEvent={listenScrollEvent} title="Song Catalog" setScrollPos={setScrollPos} setStickyNav={setStickyNav} />}/>
                <Route path="/song/*" element={<Home listenScrollEvent={listenScrollEvent} setScrollPos={setScrollPos} title="Song Catalog" setStickyNav={setStickyNav} />}/>
                <Route path="/set/:id" element={<SetList scrollState={setScrollPos} setStickyNav={setStickyNav} />}/>
              </Routes>
            </BrowserRouter>
        </div>
      </QueryClientProvider>
    </APIErrorProvider>
  );
}

export default App;
