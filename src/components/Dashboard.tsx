import styled from "styled-components";
import useOnboard from "src/hooks/useOnboard";
import useDashboard from "src/hooks/useDashboard";
import GweiPriceChart from "./GweiPriceChart";
const Dashboard = () => {
  const { provider, wallet } = useOnboard();
  useDashboard(provider, wallet?.accounts[0].address);

  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <ChartWrapper>
        <GweiPriceChart />
      </ChartWrapper>
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

const ChartWrapper = styled.div`
  background-color: var(--white);
  padding: 2rem 3rem;
  width: 100%;
  height: 100%;
`;
