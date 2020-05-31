import React from 'react';
import Dashboard from "./screens/dashboard/dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import RoutesEnum from "./routes/routesEnum";
import Playlist from "./screens/playlist/playlist";
import Header from "./component/header/header";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Switch>
              <Route exact path={RoutesEnum.dashboard} component={Dashboard} />
              <Route path={RoutesEnum.playlist} component={Playlist} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
