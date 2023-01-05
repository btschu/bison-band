import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import UpcomingEvents from './components/upcoming-events/UpcomingEvents';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UpcomingEvents />
    </div>
  );
}

export default App;
