import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import requests from '../../requests';

function HomeScreen() {

  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />
    
      <Row 
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row 
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      />

       <Row 
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      />

      <Row 
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      />

      <Row 
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow={false}
      />

      <Row 
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow={false}
      />

      <Row 
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  )
}

export default HomeScreen