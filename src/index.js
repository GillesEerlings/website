import React from 'react';
import ReactDOM from 'react-dom/client';

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


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppAppBar></AppAppBar>
    <Biography></Biography>
    <Education></Education>
    <Publications></Publications>
    <Presentations></Presentations>
    <Teaching></Teaching>
  </React.StrictMode>
);

