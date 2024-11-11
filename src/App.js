import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientSection from './components/Clients';
import Footer from './components/Footer';
import SkillsAndExperience from './components/SkillsAndExperience';
import LatestProjects from './components/LatestProjects';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <HeroSection />
      <SkillsAndExperience />
      <LatestProjects />
      <Footer />
      {/* <ClientSection /> */}
      {/* 
      <SecondHero /> */}
    </div>
  );
}

export default App;
