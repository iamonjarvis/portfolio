import Header from "./Header";
import Home from "./Home";
import About from "./About";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Studies from "./Studies";
import Projects from "./Projects"

import Contact from "./Contact";
import Footer from "./Footer"
import { Galaxy } from 'react-stars-particles'

function App() {
  return (
    <div className="App">
        <SpeedInsights/>
        <Galaxy color='#2f2f2f' quantity={300}/>
        <Header />
        <Home id="home" />
        <About />
        <Projects />
        <Studies />
    
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
