import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">h</h1>
      <div className="pt-[4,75] lg:pt[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
