import React from 'react';
import Link from 'next/link';

import { Row, Button } from 'reactstrap';

class Route2 extends React.Component {

	constructor(){
		super();
		this.state = {
			counter: 0
		}
	};

	incrementCounter = () => {
		const { counter } = this.state;
		this.setState({ counter: counter + 1});
	}

	decrementCounter = () => {
		const { counter } = this.state;
		this.setState({ counter: counter - 1});
	}

	render(){
		const { counter } = this.state;
		return(
			<span>
				<Row className="justify-content-center mb-3">
					<p><b>El valor del contador es: {counter} </b></p>
				</Row>
				<Row className="justify-content-center mb-3">
					<Button color="primary" onClick={this.decrementCounter}>
						Decrementar contador
					</Button>
				</Row>
				<Row className="justify-content-center mb-3">
					<Button color="primary" onClick={this.incrementCounter}>
						Incrementar contador
					</Button>
				</Row>
				<Row className="justify-content-center mb-3">
					<Link href="params/[counter]" as={`params/${counter}`}>
		  				<a>Ir a la tercera ruta</a>
					</Link>
				</Row>
				<Row className="justify-content-center mb-3">
					<Link href="/">
		  				<a>Volver al menu principal</a>
					</Link>
				</Row>
			</span>	
		)
	}

}

export default Route2;