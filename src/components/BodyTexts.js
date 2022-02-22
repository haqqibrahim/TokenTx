// BOOSTRAP LIBRIES
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// CSS FILES
import "./BodyTexts.css"

// COMPONENTS FILES
import GetStarted from './Getstarted.js';

export default function Body() {
	return (
		<Container className="containerS">
			<div className="centered">
				<h1 className="headingColor">
					Develop and Trade your
					<br />
					Custom ERC20 Tokens 
					<br />
					Here
				</h1>
			</div>
			<div className="centeredB">
				<p>
					only at TokenTx, you can transfer your custom erc20 tokens,
					<br />
					and learn the best practices of erc20 tokens
				</p>
			</div>
			<div className="centeredB">
				<GetStarted />
			</div>
			
		</Container>
	)
}
