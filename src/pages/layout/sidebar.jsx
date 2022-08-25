
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Menu as MenuIcon} from '../../assets/svg/menu'
import {Upload as UploadIcon} from '../../assets/svg/upload'
import {User as UserIcon} from '../../assets/svg/user'
import {Logo as LogoIcon} from '../../assets/svg/logo'

import  NavItem  from './nav-item'

const items = [
  {
    href: '/',
    icon: (<MenuIcon fontSize="small" />),
    title: 'Menu'
  },
  {
    href: '/upload',
    icon: (<UploadIcon fontSize="small" />),
    title: 'Upload'
  },
  {
    href: '/users',
    icon: (<UserIcon fontSize="small" />),
    title: 'Users'
  },
  {
    href: '/',
    icon: (<MenuIcon fontSize="small" />),
    title: 'Menu'
  },
  {
    href: '/upload',
    icon: (<UploadIcon fontSize="small" />),
    title: 'Upload'
  },
  {
    href: '/users',
    icon: (<UserIcon fontSize="small" />),
    title: 'Users'
  }
]


export const Sidebar = (props) => {
  const { open, onClose } = props;



  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}> 
            
           <LogoIcon/>
           
          </Box>
          
          <Box sx={{ px: 2 }}>
            
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
             <p> Pets found today:</p>
             <p>  92</p>

              
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item, index) => (
            <NavItem
              key={item.title+index}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}

        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Need Help?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
             <Button
              color="secondary"
              component="a"
              // endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Contact us at +48 787 21 37
            </Button>
           
          </Typography>
         
        
        </Box>
      </Box>
    </>
  );


    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'rgb(17,24,39)',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
