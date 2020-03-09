import React from 'react';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { Spinner, Button, Container, Row, Col  } from 'reactstrap';

import PlayerCard from '../../../components/player-card';

class ClientSidePage2 extends React.Component {

	constructor(){
		super();
		this.state = {
			playerData: null
		}
	}

	componentDidMount(){
		fetch('http://localhost:3000/api/player/kairi', {
			method: "GET",
			headers: {
    			"Content-Type": "application/json"
  			},
		})
		.then( r => r.json() )
		.then( data => {
    		this.setState({
    			playerData: data
    		})
  		});
	}

	renderLoading(){
		return(
			<div>
				<Spinner color="primary" className="mr-2"/>
				<Spinner color="secondary" className="mr-2"/>
				<Spinner color="success" className="mr-2"/>
				<Spinner color="danger" className="mr-2"/>
				<Spinner color="warning" className="mr-2"/>
				<Spinner color="info" className="mr-2"/>
				<Spinner color="dark" className="mr-2"/>
		    </div>
	    )
	}

	render(){
		const { playerData } = this.state;
		return (
    		<Row xs="1" sm="1" md="3">
	    		<Col/>
		    	<Col>
		    		{(!playerData)
		    			? this.renderLoading()
		    			: <span>
							<PlayerCard playerData={playerData} />
							<Button className="mt-2" block>
					  			<Link href="/rendering-types/client-side/page-1">
			  						<a style={{color: "inherit"}}>Ver el primer jugador</a>
			  					</Link>
				          	</Button>
				          	<Button className="mt-2" block>
					  			<Link href="/rendering-types">
			  						<a style={{color: "inherit"}}>Volver al selector de renderizado</a>
			  					</Link>
				          	</Button>
		          		</span>
		          	}
	          	</Col>
	          	<Col/>
          	</Row>	
		)
	}
  	
}

export default ClientSidePage2;