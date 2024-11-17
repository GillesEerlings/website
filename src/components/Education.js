import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Divider from '@mui/material/Divider';

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/education.json')
      .then((response) => response.json())
      .then((data) => setEducationList(data))
      .catch((error) => console.error('Error fetching education data:', error));
  }, []);

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Education
        </Typography>
        {educationList.map((edu, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
            {/* Date Column */}
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                {edu.date}
              </Typography>
            </Grid>

            {/* Degree and Details */}
            <Grid item xs={12} md={7}>
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {edu.thesis}
              </Typography>
              <Typography variant="body2" color="primary">
                {edu.advisors.map((advisor, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#4876EE' }}
                    >
                      {advisor.name}
                    </a>
                    {i < edu.advisors.length - 1 && ' & '}
                  </React.Fragment>
                ))}
              </Typography>
            </Grid>

            {/* University Column */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" fontWeight="bold">
                {edu.university}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default Education;
