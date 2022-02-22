import Container from 'react-bootstrap/Container';
import { ReactComponent as BnbSvg } from '../img/bnb.svg'
import Stack from "react-bootstrap/Stack";

import "./coincard.css"

export default function Coincard() {
	return (
		<Container className="bgCard">
			<div>
				<BnbSvg className="cardIcon" />
				<Stack gap={2} className="stacks">
					<div className="stacksB">Binance coin</div>
					<div className="stacksC">Bnb</div>
				</Stack>
				<Stack gap={2} className="stacks2">
					<div className="stacksB">$5,694.40</div>
					<div className="stacksD">+ 0.79</div>
				</Stack>
			</div>
		</Container>
	);
}
