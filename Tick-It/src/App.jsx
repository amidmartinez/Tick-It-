import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import EventList from './EventList';
import TicketDetail from './TicketDetail';

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
