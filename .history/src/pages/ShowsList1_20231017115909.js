import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Pagination } from '@mui/material';
import ShowCard from '../components/ShowCard';

const currentMoviesData = [
  { id: 1, title: 'Current Movie 1', timing: '12:00 PM' },
  { id: 2, title: 'Current Movie 2', timing: '03:00 PM' },
  // Add more current movie objects as needed
];

const upcomingMoviesData = [
  { id: 1, title: 'Upcoming Movie 1', timing: '05:00 PM' },
  { id: 2, title: 'Upcoming Movie 2', timing: '08:00 PM' },
  // Add more upcoming movie objects as needed
];

const ShowsList1 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)} centered>
        <Tab label="Current Movies" />
        <Tab label="Upcoming Movies" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tabValue === 0 ? (
          <Typography variant="h5">Current Movies</Typography>
        ) : (
          <Typography variant="h5">Upcoming Movies</Typography>
        )}
        {/* Assuming you have 3 pages for pagination, adjust the count as needed */}
        <Pagination count={3} page={1} onChange={(event, page) => console.log(page)} />
        <ul>
          {tabValue === 0
            ? currentMoviesData.map((movie) => (
                // <li key={movie.id}>
                //   <Typography variant="body1">{movie.title}</Typography>
                //   <Typography variant="body2">Timing: {movie.timing}</Typography>
                // </li>
                <ShowCard movie={movie}/>
                
              ))
            : upcomingMoviesData.map((movie) => (
                // <li key={movie.id}>
                //   <Typography variant="body1">{movie.title}</Typography>
                //   <Typography variant="body2">Timing: {movie.timing}</Typography>
                // </li>

                <ShowCard movie={movie}/>

              ))}
        </ul>
      </Box>
    </Box>
  );
};

export default ShowsList1;
