import React from 'react';
import { Box, Typography, Avatar, Grid, Link, IconButton, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';


const Biography = () => {
  return (
    <Box>
      {/* Main Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 16, // Increased spacing from AppBar
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            {/* Left Column: Profile Section */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Profile Picture */}
              <Avatar
                alt="Your Name"
                src="/images/picture.jpg" // Replace with your image path
                sx={{ width: 175, height: 175, mb: 2 }}
              />
              <Typography variant="h4" fontWeight="bold">
                Gilles Eerlings
              </Typography>
              <Typography variant="body1" color="textSecondary">
                PhD Student
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography variant="body2" color="primary">
                  <Link
                    href="https://www.uhasselt.be/en/instituten-en/expertise-centre-for-digital-media/research/intelligible-interactive-systems"
                    target="_blank"
                    underline="hover"
                    color="inherit"
                  >
                    Intelligible Interactive Systems
                  </Link>
                </Typography>
                <Typography variant="body2" color="primary">
                  <Link
                    href="https://www.uhasselt.be/en/instituten-en/expertise-centre-for-digital-media"
                    target="_blank"
                    underline="hover"
                    color="inherit"
                  >
                    Digital Future Lab
                  </Link>
                </Typography>
                <Typography variant="body2" color="primary">
                  <Link
                    href="https://www.uhasselt.be/en"
                    target="_blank"
                    underline="hover"
                    color="inherit"
                  >
                    Hasselt University
                  </Link>
                </Typography>
              </Box>

              {/* Updated Contact Icons */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
                {/* Email */}
                <IconButton
                  component={Link}
                  href="mailto:gilles.eerlings@uhasselt.be"
                  target="_blank"
                >
                  <EmailIcon fontSize="small" />
                </IconButton>
                {/* Google Scholar */}
                <IconButton
                  component={Link}
                  href="https://scholar.google.be/citations?hl=nl&user=4tD_uWkAAAAJ"
                  target="_blank"
                >
                  <SchoolIcon fontSize="small" />
                </IconButton>
                {/* GitHub */}
                <IconButton
                  component={Link}
                  href="https://github.com/GillesEerlings"
                  target="_blank"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                {/* LinkedIn */}
                <IconButton
                  component={Link}
                  href="https://linkedin.com/in/gilles-eerlings-1999911a1"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            {/* Right Column: About Me Section */}
            <Grid item xs={12} md={8} mt={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Write a short description about yourself here. Share what you're
                passionate about, your research interests, hobbies, and anything
                you'd like others to know.
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 6 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default Biography;
