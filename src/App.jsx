// Change the name of imageUrls to allBeast in every instance.
//
import React, { useState } from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/footer'
import SelectedBeast from './components/SelectedBeast'
import imageUrls from './data.json';
import Container from 'react-bootstrap/Container';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);
  function displayasModal(name) {

    const finalBeast = imageUrls.find(image => image.title === name);
    setSelectedBeast(finalBeast);
    setDisplayModal(true);
  }
  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery message="Gallery of Horns" displayasModal={displayModal} imageUrls={imageUrls} />
      <SelectedBeast
        selectedBeast={selectedBeast}
        show={displayasModal}
        handleClose={handleClose}
      />

      <Footer copyright="2023 Dominique McClaney" />
    </Container>
  );
}

export default App;