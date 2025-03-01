import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Container from './components/Container';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Enquiry from './pages/Enquiry';
import News from './pages/News';
import AboutPianos from './pages/AboutPianos';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/news" element={<News />} />
                <Route path="/about-pianos" element={<AboutPianos />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
