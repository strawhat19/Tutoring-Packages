import React from 'react';
import Courses from './components/Courses/courses';
import Footer from './components/Footer/footer';

import Header from './components/Header/header';
import './sass/App.css';
// import $ from 'jquery';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Courses />
       <Footer />
      </div>
    );  
  }
}