import "./App.css";
import EasyLike from "./EasyLike";
import { XpertBite, YtgrowKar } from "./XpertBite";
import ProductTab from "./ProductTab";

//creating new component
function Title() {
  return (
    <div>
      <p>Below are Title component and render inside APP() component</p>
      <h1>About ANIL</h1>
      <p>My name is ANil and I lovr coding !</p>
    </div>
  );
}

function App() {
  let name = "Anil";
  return (
    <>
      <ProductTab />

      <h2>
        hi {name} {2 * 2}
      </h2>
      <Title />
      <EasyLike />
      <XpertBite></XpertBite>
      <YtgrowKar />
    </>
  );

  //rendering the title component inside APP() component
}

export default App;
