import styles from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className={`w-full relative overflow-hidden leading-relaxed text-gray-900 antialiased`}
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
    </div>
  );
}

export default App;
