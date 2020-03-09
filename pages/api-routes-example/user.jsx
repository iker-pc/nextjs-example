import React from 'react';
import Link from 'next/link';
import { Row } from 'reactstrap';

const baseApiUrl = 'http://localhost:3000/api';

class User extends React.Component {

	constructor(){
		super();
		this.state = {
			name: null
		}
	}

	componentDidMount(){
		const request = new XMLHttpRequest();
		request.open("GET", `${baseApiUrl}/user`);
		request.responseType = 'application/json';
		const ctx = this;
		request.onload = function(e) {
			ctx.setState({
				name: (JSON.parse(request.response)).name
			});
		}
		request.send();
	}

	render(){
		const { name } = this.state;
		return(
			<span>
				<Row className="justify-content-center mb-3">
					<p><b>Nombre: {name || '---'}</b></p>
				</Row>
				<Row className="justify-content-center mb-4">
					<Link href="/">
				  		<a>Volver al menu principal</a>
					</Link>
				</Row>	
			</span>
		)
	}

}

export default User;