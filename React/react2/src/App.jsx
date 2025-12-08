import Product from "./Product";
import Activity from "./Activity";
function App() {
  let feature = ["Good Display", "Battery backup"]; //we can pass array
  let feature2 = { a: "Gradiant", b: "Yellow" }; //we can pass object
  let Place = ["Arangi", "Garhwa", "Meral"];
  return (
    <>
      <Product
        title="Phone"
        price={29000}
        feature={feature}
        color={feature2}
        Place={Place}
      />
      <Product
        title="Laptop"
        price={68000}
        feature={feature}
        color={{ a: "silvGraer" }}
        Place={Place}
      />
      <Product
        title="Buds"
        feature={feature}
        color={{ a: "Green & Silver" }}
        Place={Place}
      />
      <Product
        title="Camera"
        feature={["Record 4k video", "@60fps"]}
        color={{ a: "Black" }}
        Place={Place}
        price={35000}
      />

      <Activity username="Anil" textColor="red" />
    </>
  );
}

export default App;
