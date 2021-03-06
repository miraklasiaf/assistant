import { getLayout } from '@components/layout/dashboard';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { Forms } from '@components/pages/templates';

const DashboardWorkout = () => (
  <Tabs size="md" variant="enclosed">
    <TabList>
      <Tab>Forms</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Forms />
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

DashboardWorkout.getLayout = getLayout;

export default DashboardWorkout;
