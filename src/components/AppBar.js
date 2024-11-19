import React from 'react';
import { alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBarHomeIcon from './AppBarHomeIcon';
import Tooltip from '@mui/material/Tooltip';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  boxShadow: theme.shadows[3],
  padding: '8px 12px',
}));

const SectionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '8px',
}));

export default function AppAppBar({ onSectionClick }) {
  const sections = [
    { name: 'Education', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Presentations', id: 'presentations' },
    { name: 'Teaching', id: 'teaching' },
    { name: 'Thesis Advising', id: 'thesis-advising' },
    { name: 'Reviewing Experience', id: 'reviewing-experience' },
  ];

  return (
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

            {/* Sections */}
            <SectionsContainer>
              {/* Logo/Icon */}
              <AppBarHomeIcon
                onClick={() => onSectionClick('biography')}
              />
              {sections.map(({ name, id }) => (
                <Button
                  key={id}
                  onClick={() => onSectionClick(id)}
                  variant="text"
                  size="normal"
                  sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    px: 2,
                    '&:hover': {
                      backgroundColor: alpha('#000000', 0.05),
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
              <Tooltip title="Coming soon!" arrow>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    px: 2,
                    backgroundColor: '#3C3C3C',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: '#5C5C5C',
                    },
                  }}
                >
                  Projects
                </Button>
              </Tooltip>
              <Tooltip title="Coming soon!" arrow>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    px: 2,
                    backgroundColor: '#3C3C3C',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: '#5C5C5C',
                    },
                  }}
                >
                  Blog
                </Button>
              </Tooltip>
            </SectionsContainer>
          </StyledToolbar>
        </Container>
      </AppBar>
  );
}
