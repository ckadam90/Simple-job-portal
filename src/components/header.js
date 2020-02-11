import React, { Component } from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";


class Header extends Component{
	render(){
		return(

			<div>

				<h3 className="text-center">{this.props.HeadText}</h3>

			</div>
			  );
	}
}

export default Header;