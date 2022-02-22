import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import "./Getstarted.css";

const Btn = ({ onClick, title }) => {
	return (
		<Button onClick={onClick}
			size="lg" className="btnGet">

			{title}
		</Button>
	)
}

Btn.defaultProps = {
	onClick: null,
}

export default Btn
