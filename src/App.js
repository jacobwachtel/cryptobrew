import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    
    const promise = fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GLw2dczAO5CJ8BJySPpF4Bh084jSTQHl')
    promise.then((response) => response.json()).then(data => data)
    console.log(fetchData);
  },[])

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Footer />
      APP
    </div>
  );
}

export default App;


