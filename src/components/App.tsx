import styled from "styled-components";

import Navbar from "./Navbar";

function App() {
  return (
    <AppWrapper>
      <Navbar />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #000;
  width: 100%;
`;
export default App;
