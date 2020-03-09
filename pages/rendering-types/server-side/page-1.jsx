import React from 'react';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { Spinner, Button, Container, Row, Col  } from 'reactstrap';

import PlayerCard from '../../../components/player-card';

class ServerSidePage1 extends React.Component {

	static defaultProps = {
		darwinData: null
	}

	static async getInitialProps(ctx){
		const res = await fetch('http://localhost:3000/api/player/sora');
		const json = await res.json();
		return { playerData: json }
	}

	render(){
		const { playerData } = this.props;
		return (
    		<Row xs="1" sm="1" md="3">
	    		<Col/>
		    	<Col>
					<PlayerCard playerData={playerData} />
					<Button className="mt-2" block>
			  			<a href="/rendering-types/server-side/page-2" style={{color: "inherit"}}>Ver el segundo Jugador</a>
		          	</Button>
		          	<Button className="mt-2" block>
			  			<a href="/rendering-types" style={{color: "inherit"}}>Volver al selector de renderizado</a>
		          	</Button>
	          	</Col>
	          	<Col/>
          	</Row>
		)
	}
}

export default ServerSidePage1;