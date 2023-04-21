import { useContext, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/intro';
import Project from './components/project/Project';
import { Toggle } from './components/toggle/Toggle';
import { ThemeContext, ThemeProvider } from './context';

function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
    // style={{
    //   backgroundColor: darkMode ? "#222" : "white",
    //   color: darkMode && "white",
    // }}
  >
      {/* <Toggle/> */}
      <Intro/>
      <ThemeProvider>
      <About/>
      <Project/>
      <Contact/>
      </ThemeProvider>
    </div>
  )
}

export default App;
