import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import TextHeading from "../components/TextHeading";
import { formatPrice } from "../utils/utilFunctions";

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
      <Hero />
      <TextHeading
        heading="Try Out our New Bath/Shower Bombs"
        content="...and imagine yourself enjoying showers in a whole new way!"
      />
      <Grid templateColumns="repeat(3, 1fr)" id="products">
        {products.map((product) => {
          const formattedPrice = formatPrice(product.variants[0].price.amount);

          return (
            <Box
              key={product.id}
              _hover={{ opacity: "100%" }}
              opacity="80%"
              textAlign="center"
              padding="10px"
              position={"relative"}
            >
              <Link
                to={`/products/${product.handle}`}
                key={product.id}
                style={{ padding: "2rem" }}
              >
                <div>
                  <Image
                    src={product.images[0].src}
                    border="2px solid black"
                    borderRadius={"10%"}
                  />
                  <Text
                    position={"absolute"}
                    bottom={"25%"}
                    left={"50%"}
                    transform="translateX(-50%)"
                    fontSize={["xs, md"]}
                    fontWeight={"bold"}
                  >
                    {product.title}
                  </Text>
                  <Text
                    position={"absolute"}
                    bottom={"10%"}
                    left={"50%"}
                    transform="translateX(-50%)"
                    fontSize={["xs", "sm"]}
                    fontWeight={"bold"}
                  >
                    ${formattedPrice} {product.variants[0].price.currencyCode}
                  </Text>
                </div>
              </Link>
            </Box>
          );
        })}
      </Grid>
      <ImageWithText
        reverse
        image="https://fakeimg.pl/500x300/333b41/ffffff?text=FEATURED&font=bebas"
        heading="The Best Way..."
        subHeading="When you need your customers to visualize your product in their lives, Greg's Shopify Sites can help you make your vision a reality."
        buttonText="Shop Now"
      />
      <ImageWithText
        image="https://fakeimg.pl/500x300/333b41/ffffff?text=PRODUCTS&font=bebas"
        heading="To Showcase Your Products"
        subHeading="People read headings that catch their eye..."
        buttonText="Check It Out!"
      />
    </Box>
  );
};
export default Home;
