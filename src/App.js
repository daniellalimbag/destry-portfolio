import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Nav toggleTheme={toggleTheme} />
      <Header />
      <main>
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
