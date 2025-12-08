import "./Product.css";

function Product({ title, price = 20, feature, color, Place }) {
  //buds price will be set to 20 automatically

  //   const list = Place.map((all) => <li>{all}</li>);

  const isDiscount = price > 30000;
  const colorStyle = {
    backgroundColor: isDiscount ? "black" : "",
    color: isDiscount ? "magenta" : "",
  };
  return (
    <div className="Product" style={colorStyle}>
      <h1>{title}</h1>
      <p>Price: {price}</p>
      <p>Features: {feature}</p>
      <p>Color: {color.a}</p>
      <p>
        {Place.map((all) => (
          <li>{all}</li> //we can also add list which I have declared above
        ))}
      </p>
      {isDiscount ? <p>5% discount</p> : null}
    </div>
  );
}

export default Product;
