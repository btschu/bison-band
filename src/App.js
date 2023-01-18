import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
// import About from './components/about/About';
import UpcomingEvents from './components/upcoming-events/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <UpcomingEvents />
    </div>
  );
}

export default App;
