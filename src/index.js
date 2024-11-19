import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import AppAppBar from './components/AppBar';
import Biography from './components/Biography';
import Education from './components/Education';
import Publications from './components/Publications';
import Presentations from './components/Presentations';
import Teaching from './components/Teaching';
import ThesisAdvising from './components/ThesisAdvising';
import ReviewingExperience from './components/ReviewingExperience';

const theme = createTheme({
  
  typography: {
    fontFamily: 'Inter, sans-serif',
    body1: {
      fontSize: '1.1rem', // Adjust body text size
    },
    body2: {
      fontSize: '1rem', // Adjust secondary text size
    },
    h6: {
      fontSize: '1.25rem', // Adjust heading sizes
    },
    h4: {
      fontSize: '1.5rem', // For prominent headings
    },
  },
});

const App = () => {
  const sectionsRefs = {
    biography: useRef(null),
    education: useRef(null),
    publications: useRef(null),
    presentations: useRef(null),
    teaching: useRef(null),
    'thesis-advising': useRef(null),
    'reviewing-experience': useRef(null),
  };

  const handleSectionClick = (id) => {
    sectionsRefs[id].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppAppBar onSectionClick={handleSectionClick} />
        <div style={{ marginTop: '80px' }}>
          <section id="biography" ref={sectionsRefs.biography}>
            <Biography />
          </section>
          <section id="education" ref={sectionsRefs.education}>
            <Education />
          </section>
          <section id="publications" ref={sectionsRefs.publications}>
            <Publications />
          </section>
          <section id="presentations" ref={sectionsRefs.presentations}>
            <Presentations />
          </section>
          <section id="teaching" ref={sectionsRefs.teaching}>
            <Teaching />
          </section>
          <section id="thesis-advising" ref={sectionsRefs['thesis-advising']}>
            <ThesisAdvising />
          </section>
          <section id="reviewing-experience" ref={sectionsRefs['reviewing-experience']}>
            <ReviewingExperience />
          </section>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
