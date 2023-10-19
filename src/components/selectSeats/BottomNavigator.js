import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function BottomNavigator() {
  
    return (
        <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 1}} elevation={3}>
        <BottomNavigation>
            <Button variant="contained" style={{maxWidth: '1000px', maxHeight: '50px', minWidth: '30px', minHeight: '30px'}} >Proceed to Pay</Button>
        </BottomNavigation>
      </Paper>
    );
}
