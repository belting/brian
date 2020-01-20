import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./App.css";

import React from "react";
import content from "../../data/content.json";
import { Contact } from "../Contact";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Skills } from "../Skills";

const App: React.FC = () => {
  return (
    <div>
      <Navigation items={content.nav} />
      <Header />
      <Experience experience={content.experience} />
      <Education education={content.education} />
      <Skills skills={content.skills} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
