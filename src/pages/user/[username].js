// pages/user/[username].js
import { useRouter } from 'next/router';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Head from 'next/head';
import Emergencytable from './emergency-table';
import Householdtable from './household-table';

const UserPage = () => {
  const router = useRouter();
  const { username } = router.query;

  const handleButtonClick = (logType) => {
    // Navigate to the corresponding URL based on the logType
    router.push(`/user/${username}/${logType.toLowerCase()}`);
  };

  return (
    <div>
      {/* <h1>User Page: {username}</h1> */}
      <Head>
        <title>
          Customers | MyHomeBeacon
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >

              <Stack spacing={1}>
                <Typography variant="h4">
                  User Page: {username}
                </Typography>

              </Stack>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Button variant='contained' onClick={() => handleButtonClick('HomeHub')}>HomeHub Logs</Button>
              <Button variant='contained' onClick={() => handleButtonClick('Beacon')}>Beacon Logs</Button>
              <Button variant='contained' onClick={() => handleButtonClick('Puck')}>Puck Logs</Button>
            </Stack>


            <Stack spacing={1}>

              <Typography variant="h6">Emergency Contacts</Typography>
              <Emergencytable />
            </Stack>


            <Stack spacing={1}>
              <Typography variant="h6">Household Members</Typography>
              <Householdtable />
            </Stack>


          </Stack>
        </Container>
      </Box>

    </div>
  );
};

UserPage.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default UserPage;
