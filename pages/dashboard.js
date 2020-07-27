import { getLayout } from '@components/layout/dashboard';
import { Table } from '@components/table';
import Page from '@components/page';

const DashboardIndex = () => (
  <Page name="Dashboard" path="/dashboard">
    <Table />
  </Page>
);

DashboardIndex.getLayout = getLayout;

export default DashboardIndex;
