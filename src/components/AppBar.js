import * as React from 'react';
import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import GEmonogramIcon from './AppBarHomeIcon';

// Create a theme with the Inter font
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Distribute items evenly
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1), // Subtle border
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  boxShadow: theme.shadows[3], // Shadow for depth
  padding: '8px 12px',
}));

const SectionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1, // Allow the container to stretch
  justifyContent: 'space-evenly', // Evenly distribute buttons
  alignItems: 'center',
  gap: '8px', // Add spacing between items
}));

export default function AppAppBar() {
  const sections = [
    'Education',
    'Experience',
    'Teaching Experience',
    'Thesis Advising',
    'Publications',
    'Presentations',
    'Reviewing Experience',
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            {/* Logo/Icon */}
            <GEmonogramIcon />
            {/* Sections (evenly distributed) */}
            <SectionsContainer>
              {sections.map((text) => (
                <Button
                  key={text}
                  variant="text"
                  size="small"
                  sx={{
                    color: 'text.primary', // Default black text
                    textTransform: 'none',
                    fontWeight: 400, // Reduced font weight for lighter text
                    fontFamily: 'Inter, sans-serif',
                    px: 2,
                    '&:hover': {
                      backgroundColor: alpha('#000000', 0.05), // Light grey hover effect
                    },
                  }}
                >
                  {text}
                </Button>
              ))}
              {/* Blog Button */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  px: 2,
                  backgroundColor: '#3C3C3C', // Dark grey background
                  color: '#FFFFFF', // White text
                  '&:hover': {
                    backgroundColor: '#5C5C5C', // Slightly lighter grey hover effect
                  },
                }}
              >
                Blog
              </Button>
            </SectionsContainer>
          </StyledToolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
