import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Accordion,Card,Button,ListGroup,Nav} from 'react-bootstrap';
import './Accordion.css';
import FormPage from './Forms';








class AccordionCollapse extends Component {

	
    render() {

    		

        return (

        	<Router>
		<Accordion>
		
        
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Button} variant="link" eventKey="1" className="dropdown-toggle">
		        {this.props.companyTarget}
		      </Accordion.Toggle>
		    </Card.Header>
		    
		    <Accordion.Collapse eventKey="1">

		      <Card.Body><ListGroup><ListGroup.Item className="btn btn-link text-left"><Nav.Link href="/Forms">{this.props.coinfoTarget}</Nav.Link></ListGroup.Item>
		      						<ListGroup.Item className="btn btn-link text-left"><Nav.Link href="/Forms">{this.props.coinfoTarget2}</Nav.Link></ListGroup.Item>
		      						<ListGroup.Item className="btn btn-link text-left"><Nav.Link href="/Forms">{this.props.coinfoTarget3}</Nav.Link></ListGroup.Item>
		      						<ListGroup.Item className="btn btn-link text-left"><Nav.Link href="/Forms">{this.props.coinfoTarget4}</Nav.Link></ListGroup.Item>
		      			</ListGroup>
		      </Card.Body>
		    </Accordion.Collapse>

		  </Card>
		 
	   </Accordion>
	   		

	   		</Router>
				
					
		

        	   );
    }
}

export default AccordionCollapse;