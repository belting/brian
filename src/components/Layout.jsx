import React from 'react';
import content from '../content.json'
import Navigation from './Navigation';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Layout = () => (
    <div>
        <Navigation items={content.nav}/>
        <Header/>
        <Experience experience={content.experience}/>
        <Education/>
        <Skills skills={content.skills}/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);

export default Layout;