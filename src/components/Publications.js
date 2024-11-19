import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container, Link, Button } from '@mui/material';
import Divider from '@mui/material/Divider';

const Publications = () => {
  const [publicationsList, setPublicationsList] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/publications.json`)
      .then((response) => response.json())
      .then((data) => setPublicationsList(data))
      .catch((error) => console.error('Error fetching publications:', error));
  }, []);

  const getConferenceLogo = (conference) => {
    switch (conference) {
      case 'EICS':
        return `${process.env.PUBLIC_URL}/images/eics-icon.jpg`; // Path to the EICS logo
      default:
        return null; // Default fallback logo if needed
    }
  };

  const highlightAuthor = (authors, highlightName) => {
    const parts = authors.split(new RegExp(`(${highlightName})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightName.toLowerCase() ? (
        <Box key={index} component="span" sx={{ fontWeight: 'bold' }}>
          {part}
        </Box>
      ) : (
        part
      )
    );
  };

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Publications
        </Typography>
        <Box>
          {publicationsList.map((publication, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                {/* Year Column */}
                <Grid item xs={2}>
                  <Typography variant="body2" color="textSecondary" fontWeight="bold">
                    {publication.year}
                  </Typography>
                </Grid>

                {/* Details Column */}
                <Grid item xs={8}>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    <Link
                      href={publication.links.find((link) => link.label === 'DOI')?.url || '#'}
                      underline="hover"
                      color="inherit"
                      target="_blank"
                    >
                      {publication.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {highlightAuthor(publication.authors, 'Gilles Eerlings')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {publication.links.map((link, i) => (
                      <Button
                        key={i}
                        variant="outlined"
                        size="small"
                        href={link.url}
                        target="_blank"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Box>
                </Grid>

                {/* Logo Column */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <img
                      src={getConferenceLogo(publication.conference)}
                      alt={`${publication.conference} Logo`}
                      style={{ width: '100px', height: '48px', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default Publications;
