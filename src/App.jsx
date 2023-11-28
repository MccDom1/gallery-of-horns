import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header title="Gallery of Horns"/>
      <main>
        <Gallery title="Gallery of Horns"/>
      </main>
      <Footer copyright="2023 Dominique McClaney"/>
    </div>
  );
}

export default App;