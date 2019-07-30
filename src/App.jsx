import React from 'react';
import LandingPage from './LandingPage';
import SearchResults from './SearchResults';
import ShelterDetail from './ShelterDetail';
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
      //selectedLocation: LOCATIONS.locations[0]
      selectedLocation: {}
    }
    //this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  // handleDetailsClick(shelter) {
  //   console.log('fetching details for:', shelter);
  //   const selectedLocation
  //   //const url = '/api/drinks/' + drinkId;
  //   // console.log("url is: ",url);
  //   // let config = {
  //   //   headers: {
  //   //     Authorization: `Bearer ${this.state.token}`
  //   //   }
  //   // }
  //   // axios.get(url, config).then(result => {
  //     // console.log(result)
  //     this.setState({
  //       selectedLocation: selectedLocation
  //     })
  //   //})
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
          <Route path='/results' render={(props) => <SearchResults locations={this.state.locations} handleDetailsClick={this.handleDetailsClick} {...props} />} />
          <Route path='/show' render={(props) => <ShelterDetail selectedLocation={this.state.selectedLocation} {...props}/>} />
        </Router>
      </>
    )
  }
}

export default App;