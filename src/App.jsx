import styles from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import SEO from "./components/SEO";

function App() {
  return (
    <ThemeProvider>
      <SEO
        title="Andrew Van | Welcome"
        description="Let's bring your next project to life"
        type="article"
        image="https://avan3.github.io/og-meta-image.jpg"
      />
      <div
        className={`w-full relative overflow-hidden leading-relaxed antialiased bg-background`}
      >
        <div className={`${styles.flexCenter}`}>
          <Navbar />
        </div>
        <div className={`${styles.flexCenter}`}>
          <Hero />
        </div>
        <About />
        <Skills />
        <Work />
        <Contact />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
