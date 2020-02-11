import React, { Component } from 'react';
import { ListGroup,Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AllJobs extends Component{
	render(){
		return(
			<Router>
			<div className="container">
				<ListGroup>
			<ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job1}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job2}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job3}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job4}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job5}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job6}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job7}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job8}</Nav.Link></ListGroup.Item>
		    <ListGroup.Item className="btn btn-link text-justify"><Nav.Link href="/Forms">{this.props.Job9}</Nav.Link></ListGroup.Item>
		      </ListGroup>
		    </div>

		    </Router>

		);
	}
}

export default AllJobs;