// BOOSTRAP LIBRIES
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// COMPONENTS IMPORTS
import Navbar from "./Navbar";
import Btn from "./Btn.js";
import Listoftransactions from "./ListoftransactionsList";

// MORALIS IMPORTS
import { useMoralis } from "react-moralis";

// CSS IMPORTS
import "./Transfer.css"
import "./Getstarted.css";

export default function Signup() {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();
  if (isAuthenticated) {
    return (
      <Container>
        <Navbar />
        <div>
          <h1 className="title">Make Transaction</h1>
        </div>
        <div className="centeredSubText">
          <h4>
            Connect your metamask wallet and
            start making transactions.
            <br />
          </h4>
        </div>
        <div style={
          {
            textAlign: 'center',
            marginTop: "10px"
          }
        }>
          <Button className="centeredMask btnGet" onClick={null}>
            Transfer
          </Button>
          <div className="divider" />
          <Button className="centeredMask btnGet" onClick={() => logout()}>
            Logout
          </Button>
        </div>
        <div>
          <Listoftransactions />
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Navbar />
      <div>
        <h1 className="title">Make Transaction</h1>
      </div>
      <div className="centeredSubText">
        <h4>
          Connect your metamask wallet and
          start making transactions.
          <br />
        </h4>
      </div>
      <div style={
        {
          textAlign: 'center',
          marginTop: "10px"
        }
      }>

        <Button className="centeredMask btnGet" title={"Metamask"} onClick={() => authenticate()}>
          Metamask
        </Button>
      </div>
    </Container>
  )


}
