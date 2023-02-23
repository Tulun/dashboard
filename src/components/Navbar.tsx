import styled from "styled-components";
import useOnboard from "../hooks/useOnboard";

const Navbar = () => {
  const { wallet, connecting, connect, disconnect } = useOnboard();

  return (
    <StyledNavbar>
      <h1>Ethereum Dashboard</h1>
      <Button
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
      </Button>{" "}
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

export default Navbar;
