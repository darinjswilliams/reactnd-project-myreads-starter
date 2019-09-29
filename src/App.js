import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import GetBooks from './GetBooks';
import SearchForBooks from './SearchForBooks'; 

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
       <Switch>
        <Route exact path = '/Search' component={SearchForBooks} /> 
        <Route exact path = '/'  component={GetBooks} />
       </Switch>
      </Router>
    )
  }
}

export default BooksApp;