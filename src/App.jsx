
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/footer'
import imageUrls from './data.json';
import Container from'react-bootstrap/Container';
function App() {
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery message="Gallery of Horns" imageUrls={imageUrls} />
      <Footer copyright="2023 Dominique McClaney" />
    </Container>
  );
}

export default App;