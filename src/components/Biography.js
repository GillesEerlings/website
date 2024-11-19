import React from 'react';
import { Box, Typography, Avatar, Grid, Link, IconButton, Container, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

const Biography = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 16, px: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="stretch">
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
              <Avatar
                alt="Your Name"
                src={`${process.env.PUBLIC_URL}/images/picture.jpg`}
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
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
                <IconButton component={Link} href="mailto:gilles.eerlings@uhasselt.be" target="_blank">
                  <EmailIcon fontSize="small" />
                </IconButton>
                <IconButton component={Link} href="https://scholar.google.be/citations?hl=nl&user=4tD_uWkAAAAJ" target="_blank">
                  <SchoolIcon fontSize="small" />
                </IconButton>
                <IconButton component={Link} href="https://github.com/GillesEerlings" target="_blank">
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton component={Link} href="https://linkedin.com/in/gilles-eerlings-1999911a1" target="_blank">
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            {/* Right Column: About Me Section */}
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Vertically center the content
              }}
            >
              <Box>
                {/* Professional Interests Section */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  I am passionate about everything related to machine learning 🤖. My current focus lies in exploring the use of multiple machine learning models within the exciting domain of human-computer interaction. I aim to enhance trust and improve decision-making processes 🎯, all while keeping things transparent and explainable.
                </Typography>

                {/* Personal Interests Section */}
                <Typography variant="body2" color="textSecondary" paragraph>
                When I'm not busy working on AI <em>almost</em> taking over the world (in a totally explainable way, of course 😅), you'll find me exploring the world, backpacking through nature 🥾, traveling to discover new places and experiences 🌍, or simply taking my dog for a walk —a much smaller adventure, but just as fulfilling.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 6 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default Biography;
