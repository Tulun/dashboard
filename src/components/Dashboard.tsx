import styled from "styled-components";
import useOnboard from "src/hooks/useOnboard";
import useDashboard from "src/hooks/useDashboard";
const Dashboard = () => {
  const { provider } = useOnboard();
  useDashboard(provider);

  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  background-color: var(--blue);
  padding: 2rem 3rem;
  color: var(--white);
  min-height: 40vh;
`;
