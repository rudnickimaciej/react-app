import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react'
import {Sidebar} from './sidebar';
import {Navbar} from './navbar'
const DashboardLayoutRoot = styled('div')(() => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64
  }));

export const DashboardLayout = (props) => {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    return (
      <>
        <DashboardLayoutRoot>
        <Sidebar/>
          <Navbar/>
        </DashboardLayoutRoot>
        {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar
          onClose={() => setSidebarOpen(false)}
          open={isSidebarOpen}
        /> */}
      </>
    );
  };
  