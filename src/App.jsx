import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Classes />
      <Facilities />
      <Activities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
