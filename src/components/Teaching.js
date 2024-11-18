import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Divider from '@mui/material/Divider';

const Teaching = () => {
  const [teachingList, setTeachingList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/data/teaching.json')
      .then((response) => response.json())
      .then((data) => setTeachingList(data))
      .catch((error) => console.error('Error fetching teaching data:', error));
  }, []);

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Teaching
        </Typography>
        {teachingList.map((teachingYear, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            {teachingYear.courses.map((course, i) => (
              <Grid
                container
                spacing={2}
                key={i}
                alignItems="center"
                sx={{ mb: i === teachingYear.courses.length - 1 ? 0 : 2 }} // Add margin between courses
              >
                {/* Year Column */}
                <Grid item xs={12} md={2}>
                  {i === 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                      <Typography variant="body2" color="textSecondary" fontWeight="bold">
                        {teachingYear.year}
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Course Details */}
                <Grid item xs={12} md={8}>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" >
                    {course.keywords?.join(', ') || 'N/A'}
                  </Typography>
                </Grid>

                {/* Course Number Column */}
                <Grid item xs={12} md={2}>
                  <Typography variant="body2" fontWeight="bold" align="center">
                    {course.number}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        ))}
        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default Teaching;
