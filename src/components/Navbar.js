import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { ReactComponent as YourSvg } from '../img/logo.svg'
import './Navbar.css'

export default function TopBar() {
	return (
		<Navbar collapseOnSelect expand="lg" className="navbarColor" >
			<Container>
				<Navbar.Brand href="/"><YourSvg /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-end'>
					<Nav>
						<Nav.Item>
							<Nav.Link className="Navs" href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item className="NavLinkColor">
							<Nav.Link href="https://www.coindesk.com/">
								<span className="NavItem">News</span>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="NavLinkColor">
							<Nav.Link href="https://www.coinbase.com/">
								<span className="NavItem">Trade</span>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="NavLinkColor">
							<Nav.Link href="https://coinmarketcap.com/">
								<span className="NavItem">Market</span>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="NavLinkColor">
							<Nav.Link href="https://whiteboardcrypto.com/">
								<span className="NavItem">Learn</span>
							</Nav.Link>
						</Nav.Item>
					</Nav>
					
				</Navbar.Collapse>

			</Container>
		</Navbar>
	)

}
