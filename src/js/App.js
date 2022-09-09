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

  return (
    <APIErrorProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App scrollbar-hide text-t-primary">
          <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home title="Song Catalog" />}/>
                <Route path="/song/*" element={<Home title="Song Catalog" />}/>
                <Route path="/set/:id" element={<SetList />}/>
              </Routes>
            </BrowserRouter>
        </div>
      </QueryClientProvider>
    </APIErrorProvider>
  );
}

export default App;
