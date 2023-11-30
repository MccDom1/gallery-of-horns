// Change the name of imageUrls to allBeast in every instance.
// Modal 
App.jsx
import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import imageUrls from './data.json'; 
import Container from'react-bootstrap/Container';
function App() {
  const [show, setShow] = React.useState(false);
  const [selectedBeast, setSelectedBeast] = React.useState({});
  function dispayModal(name) {
    const selected = imageUrls.find(beast => beast.name === name);
    setSelectedBeast(selected);
    setShow(true);
  }
  function handleCloseModal() {
    setShow(false);
  }
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery message="Gallery of Horns" imageUrls={imageUrls} displayModal={dispayModal} />
      {selectedBeast && <SelectedBeast
        show={show}
        selectedBeast={selectedBeast}
        handleCloseModal={handleCloseModal}
        imageUrls={imageUrls}
      />}
      <Footer copyright="2023 Dominique McClaney" />
    </Container>
  );
}
export default App;