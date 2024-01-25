import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 ,margin:"0 20px 0 0"}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" sx={{cursor:"pointer"}} color="inherit" component="div" onClick={()=>navigate("/")}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header