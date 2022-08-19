import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import { history } from './helpers/history';
import Songs from "./pages/songs/Songs";
import Sets from "./pages/sets/Sets";
import Home from "./pages/home/Home";
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <Route
                   exact
                   path="/"
                   component={Home}
               />
               <Route
                   exact
                   path="/songs"
                   component={Songs}
               />
               <Route
                   path="/sets"
                   component={Sets}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes