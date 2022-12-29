import { useState } from "react";

import { getData } from "../../data";
import { Contact } from "../Contact";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Skills } from "../Skills";

const App = () => {
  const [data] = useState(getData());

  return (
    <>
      <Navigation items={data.nav} />
      <Header {...data.header} />
      <Experience items={data.experience} />
      <Education items={data.education} />
      <Skills items={data.skills} />
      <Contact {...data.contact} />
      <Footer />
    </>
  );
};

export default App;
