import * as React from 'react';
import BarTreeView from './components/mytree'
import './App.css'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import theme from './components/them';
import TemporaryDrawer from './components/mydrawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { PropertyVertical} from './components/property_vertical';
import PropertyGorisontal from './components/property_gorisontal';

const drawerWidth = 256;

function App() {
  //const [count, setCount] = useState(0)
  //const { ...other } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [currentTreeId, setCurrentTreeId] = React.useState('Applications')

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };


  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };



  return (
    <>




<ThemeProvider theme={theme} >
      <Box sx={{
         display: 'flex', 
        // minHeight: '100vh' ,
         textAlign: 'left',
         justifyContent : 'flex-start'
         
       }}>

<CssBaseline />
        <AppBar
            component="nav"
            //position="fixed"
           
        >
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer3"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <TemporaryDrawer/>

              <Typography variant="h6" noWrap component="div">
                MD-editor
              </Typography>
            </Toolbar>
          </Container>  
      </AppBar>


       
       <BarTreeView  currentTreeId={currentTreeId} setCurrentTreeId = {setCurrentTreeId} ></BarTreeView>
    
        <Box 
          sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',  
          width: '100%'  
          }}>
          
          

          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' , textAlign: 'left',}}>
            
            <PropertyVertical currentTreeId={currentTreeId}></PropertyVertical>

           

          </Box>

        </Box>
      </Box>

     

    </ThemeProvider>


    
     
    </>
  )
}

export default App
