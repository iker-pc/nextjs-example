import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'
import { Row } from 'reactstrap';

class Route3 extends React.Component {

	render(){
		const { router } = this.props;
		return(
			<span>
				<Row className="justify-content-center mb-3">
					<p><b>El valor final del contador ha sido: {router.query.counter || 0}</b></p>
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

export default withRouter(Route3);