import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import coverImage from './assets/images/cover.svg';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <div className='cover'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Skills />
            <Resume />
            <div className='footer-and-contact'>
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
