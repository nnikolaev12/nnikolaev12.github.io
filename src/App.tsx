import "./App.css";

/**
 * Layout components
 */
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Brands from "./components/layout/Brands";
import About from "./components/layout/About";
import Portfolio from "./components/layout/Portfolio";
import Blog from "./components/layout/Blog";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
