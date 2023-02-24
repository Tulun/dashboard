import styled from "styled-components";
import useOnboard from "../hooks/useOnboard";

import { shortenAddress } from "src/helpers";
const Navbar = () => {
  const { wallet, connecting, connect, disconnect } = useOnboard();

  console.log("wallet", wallet);
  return (
    <StyledNavbar>
      <h1>Ethereum Dashboard</h1>
      <ConnectWrapper>
        <p>{wallet ? shortenAddress(wallet.accounts[0].address) : null}</p>
        <Button
          disabled={connecting}
          onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
          {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
        </Button>
      </ConnectWrapper>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: var(--black);
  padding: 1rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Halyard Display";
`;

const Button = styled.button`
  background-color: var(--blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  display: flex;
  font-family: "Cormorant Garamond", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
`;

const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default Navbar;
