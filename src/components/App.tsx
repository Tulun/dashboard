import styled from "styled-components";

import Navbar from "./Navbar";
import { GlobalStyle } from "./GlobalStyles";

import Dashboard from "./Dashboard";
function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Navbar />
      <Dashboard />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #000;
  width: 100%;
`;
export default App;
