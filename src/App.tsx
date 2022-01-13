import React, {useState} from 'react';
import Footer from './components/Footer/footer';
import JuniorDeveloperCourse from './components/JuniorDeveloperCourse/juniorDeveloperCourse'
import Header from './components/Header/header';
import './sass/App.css';
import FullStackDeveloperCourse from './components/FullStackDeveloperCourse/fullStackDeveloperCourse';
import cartContext from './contexts/cartContext';
// import $ from 'jquery';

const cartData:any = cartContext || [];
const cartItems = document.querySelector(`#cartItems`);

export default class App extends React.Component {

  state = {
    cart: cartData,
    user: {}
  }

  async componentDidMount() {
    let unParsedcart:string = localStorage.getItem(`Shopping Cart`);
    let cart:[] = JSON.parse(unParsedcart);
    if (!cart) {
      document.querySelector(`#cartItems`)?.classList.add(`hide`);
      document.querySelector(`#cartItems`)?.classList.remove(`show`);
    } else {
      document.querySelector(`#cartItems`)?.classList.remove(`hide`);
      document.querySelector(`#cartItems`)?.classList.add(`show`);
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