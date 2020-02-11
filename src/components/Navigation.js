import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap'; 
import {
  BrowserRouter as Router,
} from "react-router-dom";

class Navigation extends Component {



    render() {
        return (
        <Router>
		 <Navbar bg="dark" variant="dark" className="mb-5">
		    <Navbar.Brand href="/Accordion">Job Portal</Navbar.Brand>
		    <Nav className="ml-auto">
		      <Nav.Link href="/AllJobs">All Jobs</Nav.Link>
		    </Nav>
  		</Navbar>
  		
  		</Router>

        	   );

    }
}

export default Navigation;