import React, { Component } from 'react';
import Navigation from './components/Navigation';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";



class Home extends Component {
  render() {

      
  return (
      
      <div>
      <Navigation />
      <div className="container">
      <div><h3 className="text-center">List Of Available Vacancies</h3></div>
      
      
      </div>
      </div>
   

    );
  }
}

export default Home;