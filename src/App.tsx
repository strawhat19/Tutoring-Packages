import React, {useState} from 'react';
import Footer from './components/Footer/footer';
import JuniorDeveloperCourse from './components/JuniorDeveloperCourse/juniorDeveloperCourse'
import Header from './components/Header/header';
import './sass/App.css';
import FullStackDeveloperCourse from './components/FullStackDeveloperCourse/fullStackDeveloperCourse';
import cartContext from './contexts/cartContext';
// import $ from 'jquery';

export default class App extends React.Component {

  state = {
    cart: JSON.parse(localStorage.getItem(`Shopping Cart`)) || [],
    user: {}
  }

  async componentDidMount() {
    const cartItems = document.querySelector(`.cartItems`);
    if (this.state.cart) {
      if (this.state.cart.length > 0) {
        cartItems.innerHTML = this.state.cart.length;
      } else {
        cartItems.display = `none`;
      }
    } else {
      cartItems.display = `none`;
    }
  }

  render() {
    return (
      <div className="App">
        <cartContext.Provider value={cartData}>
          <Header />
            <JuniorDeveloperCourse />
            <FullStackDeveloperCourse />
          <Footer />
       </cartContext.Provider>
      </div>
    );  
  }
}