import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Accordion from './components/Accordion';
import FormPage from './components/Forms';
import AllJobs from './components/AllJobs';
import Header from './components/header';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


 


class App extends Component {
  render() {



      
  return (
    <Router>
      <div>
      <Navigation />
      <div className="container">
  
     
      <Switch>
          
          <Route path="/Forms">
            <FormPage/>
          </Route>
          <Route path="/AllJobs">
            <Header HeadText="Lists Of All Available Vacancies"/>
            <AllJobs Job1="" Job1="Software Developer" Job2="Front-end Developer"Job3="Back-end Developer" Job4="Java Developer" Job5="AWS developer" Job6="Php developer" Job7="UI/UX developer"  Job8="Data Scientist" Job9="Dot net developer" />
          </Route>

          <Route path="/">
                 <Header HeadText="Listed Companies" />
               <Accordion companyTarget="Google"coinfoTarget="Software developer"coinfoTarget2="Front-end developer"coinfoTarget3="Back-end developer"/>
             <Accordion companyTarget="Amazon"coinfoTarget="Java developer"coinfoTarget2="AWS developer"coinfoTarget3="Php developer"/>
             <Accordion companyTarget="Flipkart"coinfoTarget="UI/UX developer"coinfoTarget2=" Data Scientist"coinfoTarget3="Dot net developer"/>

          </Route>
        </Switch>
      </div>
      
    </div>
        
   </Router> 
    );
  }
}

export default App;
