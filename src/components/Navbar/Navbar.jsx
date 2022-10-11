import React,{useEffect} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css'
import logo from '../../assets/Image/excellogowithtext.svg';
import Link from '@mui/material/Link';
const drawerWidth = '75vw';
// const navItems = ['HOME','CONTACT','REGISTER'];
var w = window.innerWidth;
const navItems = [<a style={{textDecoration:'none', color:'white',fontSize: w<600 ? '1rem' : '1.5rem'}} href='/'>HOME</a>,
                    <a style={{textDecoration:'none', color:'white',fontSize: w<600 ? '1rem' : '1.5rem'}} href='/'>LOCATION</a>,
                    <a style={{textDecoration:'none', color:'white',fontSize: w<600 ? '1rem' : '1.5rem'}} href='/'>REGISTER</a>];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ 
        textAlign: 'center'  }}>
          <Typography>

          </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', padding: w<600? '2rem 0' : null}}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor:'#050D18;'}}>
      <AppBar component="nav" sx={{
            background: 'linear-gradient( 106.27deg, rgba(0, 0, 0, 0.31) 24.72%, rgba(167, 238, 255, 0.31) 69.99% )',
            backgroundBlendMode: 'hard-light',
            boxShadow: '2px 4px 16px #70ffff',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px'
      }}>
        <Toolbar sx={{
                display:'flex', 
                justifyContent:'space-between',
                alignItems:'center',
            }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{
                display: w>600 ? null : 'flex' ,
                justifyContent: w>600 ? null :'space-around',
                alignItems: w>600 ? null :'center'}}>
            {w>1000 ? <img src={logo} style={{height:'75px'}}></img> : <img src={logo} style={{height:'75px'}}></img> }
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', padding:'0 3.125rem', fontFamily: "'Montserrat', sans-serif",fontSize:'20px'  }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', 
            width: drawerWidth,
            background: 'linear-gradient( 106.27deg, rgba(0, 0, 0, 0.31) 24.72%, rgba(167, 238, 255, 0.31) 69.99% )',
            // backgroundBlendMode: 'hard-light',
            boxShadow: '2px 4px 16px #70ffff' }

          }}
        >
          {drawer}
        </Drawer>
      </Box>
</Box>
  );
}
export default Navbar;