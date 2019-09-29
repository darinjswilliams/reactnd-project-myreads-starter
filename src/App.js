import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css'
import GetBooks from './GetBooks';

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path = '/'  component={GetBooks} />
      </Router>
    )
  }
}

export default BooksApp
