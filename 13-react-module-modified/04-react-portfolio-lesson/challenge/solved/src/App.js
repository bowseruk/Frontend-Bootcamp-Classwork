import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import ProjectGallery from './pages/ProjectGallery';
import ProjectDetails from './pages/ProjectDetails';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route id="home-route" path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-gallery" element={<ProjectGallery />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
