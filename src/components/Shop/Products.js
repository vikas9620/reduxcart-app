import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DDUMMY_PRODUCT = [
    {
      id: "product1",
      price: 6,
      title: "Product 1 price is 6",
      description: "Product not available",
    },
    {
      id: "product2",
      price: 62,
      title: "Product 2 price is 62",
      description: "Product will be available",
    },
    {
      id: "product3",
      price: 16,
      title: "Product 3 price is 16",
      description: "Product might be available",
    },
    {
      id: "product4",
      price: 60,
      title: "Product 4 price is 60",
      description: "Product never in future available",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DDUMMY_PRODUCT.map((product) => {
          return(
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)
  })}
      </ul>
    </section>
  );
};

export default Products;
