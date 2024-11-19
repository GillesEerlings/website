import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Divider from '@mui/material/Divider';

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/education.json`)
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
          <Grid container spacing={2} key={index} sx={{ mb: 3 }} alignItems="center">
            {/* Date Column */}
            <Grid item xs={12} md={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Typography variant="body2" color="textSecondary" fontWeight="bold">
                  {edu.date}
                </Typography>
              </Box>
            </Grid>

            {/* Degree and Details */}
            <Grid item xs={12} md={8}>
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {edu.thesis}
              </Typography>
              
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                {edu.advisors.map((advisor, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: '#4876EE',
                        transition: 'text-decoration 0.2s ease-in-out',
                      }}
                      onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                    >
                      {advisor.name}
                    </a>
                    {i < edu.advisors.length - 1 && ' & '}
                  </React.Fragment>
                ))}
              </Typography>
              {edu.pdf && (
                <Button
                  variant="outlined"
                  size="small"
                  href={`${process.env.PUBLIC_URL}` + edu.pdf}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  View Thesis
                </Button>
              )}
            </Grid>

            {/* University Column */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" fontWeight="bold" align="center">
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
