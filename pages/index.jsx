import Link from 'next/link';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';


function HomePage() {
  return (
  	<Container>
  		<Jumbotron>
  			<Row className="justify-content-center mb-4">
	  			<img width="250" height="200" src="Nextjs-logo.png" alt="nextjs-logo" />	
	  		</Row>
	  		<Row className="justify-content-center mb-4">
	  			<h1>Welcome to Next.js!</h1>
	  		</Row>
	  		<Row className="justify-content-center mb-3">
	  			<Button color="primary">
			  		<Link href="links-example/route-1">
			  			<a style={{color: "inherit"}}>Ejemplo rutas</a>
			  		</Link>
	  			</Button>
	  		</Row>
	  		<Row className="justify-content-center mb-3">
	  			<Button color="primary">
			  		<Link href="/api-routes-example/user">
			  			<a style={{color: "inherit"}}>Ejemplo API Routes</a>
			  		</Link>
	  			</Button>
	  		</Row>
	  		<Row className="justify-content-center mb-3">
	  			<Button color="primary">
			  		<Link href="/rendering-types">
			  			<a style={{color: "inherit"}}>Ejemplo Renderizados</a>
			  		</Link>
	  			</Button>
	  		</Row>
  		</Jumbotron>
  	</Container>
  	)
}

export default HomePage