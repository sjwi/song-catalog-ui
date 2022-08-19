import logo from 'resources/logo.svg';
import Header from 'js/components/header/Header.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'css/App.css';
import 'css/index.css';
import 'css/colors.css';
import { Component } from 'react';
import AuthApi from 'AuthApi';
import APIErrorProvider from './providers/APIErrorProvider';


function App() {
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
        </div>
      </Router>
    </APIErrorProvider>
  );
}

export default App;
