import React from 'react';
import LandingPage from './LandingPage';
import SearchResults from './SearchResults';
import ShelterDetail from './ShelterDetail';
import BottomNav from './BottomNav';
import LOCATIONS from './LOCATIONS';
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
      locations: LOCATIONS.locations,
      selectedLocation: LOCATIONS.locations[1]  
    }
    //this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  // handleDetailsClick(e, i) {
  //   // e.preventDefault()
  //   let selectedLocation = Array.from(this.state.selectedLocation);
  //   selectedLocation.push(this.state.locations[i]);
  //   //const selectedLocation = this.state.locations[i]
  //   this.setState({
  //     selectedLocation: selectedLocation
  //   })
  //   // let shelters = this.state.locations;
  //   // shelters = shelters.map((shelter, index) => {
  //   //   shelter.isSelected = index === i;
  //   //   return shelter
  //   // })
  //   // this.setState({
  //   //   selectedLocation: shelters
  //   // })
  // }

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
          <Route path='/results' render={(props) => <SearchResults locations={this.state.locations} {...props} />} />
          <Route path='/show' render={(props) => <ShelterDetail selectedLocation={this.state.selectedLocation} {...props}/>} />
          <BottomNav />
        </Router>
      </>
    )
  }
}

export default App;