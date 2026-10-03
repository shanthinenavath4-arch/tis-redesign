import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Sports from "./sections/Sports";
import Campus from "./sections/Campus";
import Testimonials from "./sections/Testimonials";
import Experience from "./sections/Experience";
import Admissions from "./sections/Admissions";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
          <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Sports />
        <Campus />
        <Testimonials />
        <Experience />
        <Admissions />
      </main>
    </>
  );
}

export default App;