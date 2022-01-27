import * as React from 'react';
import Footer from './components/Footer/footer';
import JuniorDeveloperCourse from './components/JuniorDeveloperCourse/juniorDeveloperCourse'
import Header from './components/Header/header';
import './sass/App.css';
import FullStackDeveloperCourse from './components/FullStackDeveloperCourse/fullStackDeveloperCourse';
import cartContext from './contexts/cartContext';

declare global {
  namespace JSX {
      interface IntrinsicElements {
        'footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        'p': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        'span': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

      }
  }
  namespace TSX {
    interface IntrinsicElements {
        'footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        'p': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        'span': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

    }
  }
  interface Project {
    title: string;
    approximateHours: number;
    approximateCost: number;
    description: string;
    picture: string;
    demo: string;
    technologies: string[];
  }
}

const cartData:any = cartContext || [];

export default class App extends React.Component {

  state = {
    cart: cartData,
    user: {}
  }

  async componentDidMount() {
    let unParsedcart:string = localStorage.getItem(`Shopping Cart`) || `[]`;
    let cart:[] = JSON.parse(unParsedcart);
    if (!cart) {
      document.querySelector(`#cartItems`)?.classList.add(`hide`);
      document.querySelector(`#cartItems`)?.classList.remove(`show`);
    } else if (cart.length > 0) {
      document.querySelector(`#cartItems`)?.classList.remove(`hide`);
      document.querySelector(`#cartItems`)?.classList.add(`show`);
    } else {
      document.querySelector(`#cartItems`)?.classList.add(`hide`);
      document.querySelector(`#cartItems`)?.classList.remove(`show`);
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