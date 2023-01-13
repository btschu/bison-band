// import {useState} from 'react'

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import UpcomingEvents from './components/upcoming-events/UpcomingEvents';

import './App.css';

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

function App() {
  // const [eventList, setEventList] = useState([]);

  // const showNonExpiredEvents = (events) => {
  //   // todaysDate= new Date()
  //   setEventList(prevState => prevState.map((event) => (
      
      
  //   ))
  // )}

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UpcomingEvents />
    </div>
  );
}

export default App;
