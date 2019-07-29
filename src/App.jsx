import React from 'react';
import LandingPage from './LandingPage';
import SearchResults from './SearchResults';
import ShelterDetail from './ShelterDetail'
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: {}
    }
  }

  render() {
    return(
      <>
        <Router>
          <nav>
            <Link to='/'>Landing Page</Link>
            <Link to='/results'>Search Results Page</Link>
            <Link to='/show'>Show Page</Link>
          </nav>
          <Route exact path='/' render={() => <LandingPage />} />
          <Route path='/results' render={() => <SearchResults />} />
          <Route path='/show' render={() => <ShelterDetail />} />
        </Router>
      </>
    )
  }
}

export default App;