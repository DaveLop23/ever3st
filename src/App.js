import logo from './assets/img/logo.png';
import './styles.css';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Plans from './components/Plans';
import FloatingActionButtons from './components/FloatingActionButtons';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <Testimonials />
      <Services />
      <Plans />
      <FloatingActionButtons />
      <Footer />
    </div>
  );
}

export default App;
