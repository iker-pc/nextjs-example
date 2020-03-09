import Link from 'next/link';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';


function HomePage() {
  return (
  		<Jumbotron>
	  		<Row className="justify-content-center mb-4">
	  			<h1>Selecciona un tipo de renderizado</h1>
	  		</Row>
        <Row className="justify-content-center mb-3">
          <Button color="primary">
            <a href="/rendering-types/server-side/page-1" style={{color: "inherit"}}>Server side rendering</a>
          </Button>
        </Row>
        <Row className="justify-content-center mb-3">
          <Button color="primary">
            <a href="/rendering-types/client-side/page-1" style={{color: "inherit"}}>Client side rendering</a>
          </Button>
        </Row>
        <Row className="justify-content-center mb-5">
          <Button color="primary">
            <a href="/rendering-types/isomorphic/page-1" style={{color: "inherit"}}>isomorphic rendering</a>
          </Button>
        </Row>
        <Row className="justify-content-center">
          <Link href="/">
              <a>Volver al menu principal</a>
          </Link>
        </Row>
  		</Jumbotron>
  	)
}

export default HomePage