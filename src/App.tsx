import React from 'react';
import Footer from './components/Footer/footer';
import JuniorDeveloperCourse from './components/JuniorDeveloperCourse/juniorDeveloperCourse'
import Header from './components/Header/header';
import './sass/App.css';
import FullStackDeveloperCourse from './components/FullStackDeveloperCourse/fullStackDeveloperCourse';
// import $ from 'jquery';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <JuniorDeveloperCourse />
        <FullStackDeveloperCourse />
       <Footer />
      </div>
    );  
  }
}