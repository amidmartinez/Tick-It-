import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import EventList from './EventList';
import TicketDetail from './TicketDetail';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchedEvents = [
      {
        id: 1,
        title: 'Taylor Swift Concert',
        description: 'Experience Taylor Swift\'s electrifying concert, featuring her greatest hits and mesmerizing performances. Join us for an unforgettable night of music and magic!',
        date: '2024-03-29',
        location: 'AT&T Stadium',
        type: 'Concert',
        price: 50,
        availability: 'Limited'
      },
      {
        id: 2,
        title: 'Mavericks vs Rockets',
        description: 'Get ready for an electrifying showdown as the Mavericks clash with the Rockets in a thrilling basketball spectacle filled with intense rivalry and jaw-dropping plays!',
        date: '2024-03-29',
        location: 'American Airlines Center',
        type: 'Sporting',
        price: 35,
        availability: 'Available'
      },
      {
        id: 3,
        title: 'Mavericks vs Pacers',
        description: 'Get ready for an electrifying showdown as the Mavericks clash with the Pacers in a thrilling basketball spectacle filled with intense rivalry and jaw-dropping plays!',
        date: '2024-03-30',
        location: 'American Airlines Center',
        type: 'Sporting',
        price: 40,
        availability: 'Available'
      },
      {
        id: 4,
        title: 'Cowboys vs Patriots',
        description: 'Get ready for an electrifying showdown as the Cowboys clash with the Patriots in a thrilling basketball spectacle filled with intense rivalry and jaw-dropping plays!',
        date: '2024-03-30',
        location: 'AT&T Stadium',
        type: 'Sporting',
        price: 60,
        availability: 'Sold Out'
      },
      {
        id: 5,
        title: 'Hornets vs Celtics',
        description: 'Get ready for an electrifying showdown as the Hornets clash with the Celtics in a thrilling basketball spectacle filled with intense rivalry and jaw-dropping plays!',
        date: '2024-04-02',
        location: 'Spectrum Center',
        type: 'Sporting',
        price: 45,
        availability: 'Available'
      },
      {
        id: 6,
        title: 'Kendrick Lamar Concert',
        description: 'Prepare for an unforgettable night with Kendrick Lamar\'s electrifying concert, pulsating with his iconic hits and dynamic stage presence. Experience music at its finest!',
        date: '2024-04-05',
        location: 'Staples Center',
        type: 'Concert',
        price: 55,
        availability: 'Available'
      },
      {
        id: 7,
        title: 'Lady Gaga Concert',
        description: 'Prepare for an unforgettable night with Lady Gaga\'s electrifying concert, pulsating with his iconic hits and dynamic stage presence. Experience music at its finest!',
        date: '2024-04-07',
        location: 'Madison Square Center',
        type: 'Concert',
        price: 60,
        availability: 'Available'
      },
      {
        id: 8,
        title: 'Nascar Grand Prix Charlotte',
        description: 'Rev your engines for the NASCAR Grand Prix in Charlotte! Feel the adrenaline as top drivers compete in high-speed laps, thrilling fans with heart-pounding action and unforgettable moments!',
        date: '2024-04-08',
        location: 'Charlotte Motor Speedway',
        type: 'Sporting',
        price: 70,
        availability: 'Available'
      },
      {
        id: 9,
        title: 'American Cancer Foundation Fundraising Concert',
        description: 'Join us for a heartfelt evening at the American Cancer Foundation Fundraising Concert. Experience powerful performances and unite in support of cancer research, hope, and survivorship. Together, we can make a difference.',
        date: '2024-04-09',
        location: 'Staples Center',
        type: 'Charity',
        price: 40,
        availability: 'Available'
      },
      {
        id: 10,
        title: 'International Food Fest',
        description: 'Embark on a global culinary journey at our International Food Festival! Delight your taste buds with a diverse array of authentic dishes from around the world, celebrating cultural diversity and culinary excellence.',
        date: '2024-04-11',
        location: 'Times Square',
        type: 'Charity',
        price: 25,
        availability: 'Available'
      }
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/events" exact>
              <EventList events={events} />
            </Route>
            <Route path="/events/:id">
              <TicketDetail />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
