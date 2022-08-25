import { ListItem, Button, Box } from "@mui/material"
import { PropTypes } from "prop-types"
 
export const NavItem = (props) => {
    const { href, icon, title, ...others } = props;
    const active = false
  
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          mb: 0.5,
          py: 0,
          px: 2
        }}
        {...others}
      >
            <Button
                component = 'a'
                startIcon = {icon}
                disableRipple
                sx = {{
                    backgroundColor: active && 'rgba(255,255,255, 0.08)',
                    borderRadius: 1,
                    color: 'white',
                    fontWeight: active && 'fontWeightBold',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                      color: active ? 'secondary.main' : 'neutral.400'
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                }}
                
                >
                    <Box
                        sx = {{flexGrow:1}}>
                        {title}                 
                    </Box>        
            </Button>
        </ListItem>
    )
}

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string
  };


  export default NavItem