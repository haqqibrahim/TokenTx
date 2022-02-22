// BOOSTRAP LIBRIES
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// CSS FILES
import "./Body.css"


// COMPONENTS FILES
import Bodytext from "./BodyTexts"
import Coins from "./availablecoin"
export default function Body() {
	return (
		<Container>
			<Row>
				<Col><Bodytext /></Col>
				<Col><Coins /></Col>
			</Row>
			
		</Container>
	)
}
