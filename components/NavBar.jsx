import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useState} from 'react';
// import {Link} from 'react-router-dom';
import Home from './Home.jsx';
import Team from './Team.jsx';
import GetStarted from './GetStarted.jsx';
import Demo from './Demo.jsx';
import About from './About.jsx';
import { HashLink as Link } from "react-router-hash-link";
import npmicon from "../styling/npm.png"
import github from "../styling/github.png"
import TechStack from './TechStack.jsx';



function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const pages = ['About', 'Get Started', 'Demo', 'Team'];

  const pageRoutes = [{"About": "/about"}, {"GetStarted": "/getstarted", "Demo":"/demo", "Team":"/team"}]
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DATADOC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DATADOC
          </Typography>
          <Box sx= {{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} >
              <Button
              key={About}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
             <Link to="#about"  style={{ color: 'white' }}> About{About} </Link>
            </Button>
            <Button
              key={Team}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            <Link to="#team" style={{ color: 'white' }}>Team {Team}</Link>  
            </Button>
            <Button
              key={GetStarted}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to= "#getstarted" style={{ color: 'white' }}>Get Started {GetStarted} </Link>
            </Button>
            <Button
              
              key={Demo}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to="#techstack" style={{ color: 'white' }}>Tech Stack {TechStack} </Link>
            </Button>
            <Button
              
              key={Demo}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to="#demo" style={{ color: 'white' }}>Demo {Demo} </Link>
            </Button>
          </Box>
          <Box >
          <a href="https://www.npmjs.com/package/express-endpoints-monitor" >
                <img src={npmicon} alt="npm" className="npm" />
          </a>
          <a href="https://github.com/oslabs-beta/DataDoc" >
                <img src={github} alt="github" className="github" />
          </a>
         </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
