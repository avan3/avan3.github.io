import styles from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
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
