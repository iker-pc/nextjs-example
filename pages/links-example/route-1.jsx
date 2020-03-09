import Link from 'next/link';
import { Row } from 'reactstrap';

function Route1() {
  return (
  	<span>
		<Row className="justify-content-center mb-3">
			<p><b>Esta es la primera ruta</b></p>
		</Row>
		<Row className="justify-content-center mb-4">
			<Link href="route-2">
		  		<a>Ir a la segunda ruta</a>
			</Link>
		</Row>
		<Row className="justify-content-center mb-4">
			<Link href="/">
		  		<a>Volver al menu principal</a>
			</Link>
		</Row>		
  	</span>
  	)
}

export default Route1;