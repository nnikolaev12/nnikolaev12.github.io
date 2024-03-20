import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { jumpToSection } from "../../Helper";
import Hero from "../Hero/Hero";
import Brands from "../Brands/Brands";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Main = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Wait for the browser to finish rendering before scrolling.
    setTimeout(() => {
      const id = hash.replace("#", "");
      jumpToSection(id);
    }, 0);
  }, [hash]); // Triggered when hash changes

  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

export default Main;
