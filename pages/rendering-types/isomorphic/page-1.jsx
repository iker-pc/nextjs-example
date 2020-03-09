import React from 'react';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { Spinner, Button, Container, Row, Col  } from 'reactstrap';

import PlayerCard from '../../../components/player-card';

class IsomorphicPage1 extends React.Component {

	constructor(){
		super();
		this.state = {
			loading: false
		}
	}

	static defaultProps = {
		playerData: null
	}

	static async getInitialProps(ctx){
		const res = await fetch('http://localhost:3000/api/player/sora');
		const json = await res.json();
		return { playerData: json }
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
		const { playerData } = this.props;
		const { loading } = this.state;
		return (
    		<Row xs="1" sm="1" md="3">
	    		<Col/>
		    	<Col>
					{ loading
		    			? this.renderLoading()
		    			: playerData 
			    			&& <span>
								<PlayerCard playerData={playerData} />
								<Button className="mt-2" block>
						  			<Link href="/rendering-types/isomorphic/page-2">
				  						<a style={{color: "inherit"}} onClick={() => this.setState({ loading: true })}>Ver el segundo jugador</a>
				  					</Link>
					          	</Button>
					          	<Button className="mt-2" block>
						  			<Link href="/rendering-types">
				  						<a style={{color: "inherit"}} onClick={() => this.setState({ loading: true })}>Volver al selector de renderizado</a>
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

export default IsomorphicPage1;