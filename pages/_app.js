import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';

function MyApp({ Component, pageProps }) {
  return (
  	<Container className="mt-5">
  		<Component {...pageProps} />
	</Container>	
)}

export default MyApp;