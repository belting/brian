import { Data } from "../../data";
import { Contact } from "../Contact";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Skills } from "../Skills";

interface Props extends Data {}

const App = ({
  nav,
  header,
  experience,
  education,
  skills,
  contact,
}: Props) => (
  <>
    <Navigation items={nav} />
    <Header {...header} />
    <Experience items={experience} />
    <Education items={education} />
    <Skills items={skills} />
    <Contact {...contact} />
    <Footer />
  </>
);

export default App;
