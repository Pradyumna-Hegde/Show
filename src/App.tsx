import "./App.css";
import Hero from "./components/Hero/Hero";

const HeroSectionProps = {
  name: "Pradyumna Hegde",
  profession: "Software Developer",
};

function App() {
  const { name, profession } = HeroSectionProps;
  return (
    <div className="App">
      <Hero name={name} profession={profession} />
    </div>
  );
}

export default App;
