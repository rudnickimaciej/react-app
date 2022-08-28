import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react'
import {Sidebar} from './sidebar';
import {Navbar} from './navbar'
import {PageContent} from './page-content'

const LayoutRoot = styled('div')(() => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64
  }));

export const Layout = (props) => {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    return (
      <>
        <LayoutRoot>
          <Sidebar/>
          <Navbar/>
          <PageContent page = {children}/>
        </LayoutRoot>
        {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar
          onClose={() => setSidebarOpen(false)}
          open={isSidebarOpen}
        /> */}
      </>
    );
  };
  