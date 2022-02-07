import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import About from '../About';
import Resume from '../Resume';
import Projects from '../Projects';
import Contact from '../Contact';

function Main() {
    <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Routes>
  }

export default Main;