import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Image, Text, Grid } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  //   useEffect is the "same" as componentDidMount, in that it runs once when the
  //   component mounts. It is a lifecycle method that runs after the first render
  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  console.log(products);

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => {
          return (
            <Box
              key={product.id}
              _hover={{ opacity: "100%" }}
              opacity="80%"
              textAlign="center"
              padding="10px"
            >
              <Link
                to={`/products/${product.handle}`}
                key={product.id}
                style={{ fontWeight: "bold", padding: "2rem" }}
              >
                <div>
                  <Image
                    src={product.images[0].src}
                    border="2px solid black"
                    borderRadius={"10%"}
                  />
                  <Text>{product.title}</Text>
                  <Text>
                    ${product.variants[0].price.amount}{" "}
                    {product.variants[0].price.currencyCode}
                  </Text>
                </div>
              </Link>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Home;
