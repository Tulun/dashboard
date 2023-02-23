import styled from "styled-components";
import useOnboard from "../hooks/useOnboard";

const Navbar = () => {
  const { wallet, connecting, connect, disconnect } = useOnboard();

  return (
    <StyledNavbar>
      <h1>My App</h1>
      <button
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
      </button>{" "}
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Navbar;
