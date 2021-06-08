import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
        <Switch>  
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  );
}

export default withRouter(App);
