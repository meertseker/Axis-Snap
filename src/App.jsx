import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">h</h1>
      <div className="pt-[4,75] lg:pt[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
