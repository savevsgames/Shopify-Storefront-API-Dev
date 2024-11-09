import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

import {
  Box,
  Image,
  Text,
  Grid,
  Heading,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import TextHeading from "../components/TextHeading";
import { formatPrice } from "../utils/utilFunctions";

const ProductPage = () => {
  // Handle will be used to fetch the product
  const handle = useParams().handle;
  // Destructure the context - add addItemToCheckout to the list when ready
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  // useEffect will grab handle product on mount
  useEffect(() => {
    fetchProductWithHandle(handle);
    // dependency array is based on the context function and handle
  }, [fetchProductWithHandle, handle]);

  if (!product || product.handle !== handle) return <div>Loading...</div>;

  console.log(product);

  const formattedPrice = formatPrice(product.variants[0].price.amount);

  return (
    <Box>
      <TextHeading
        heading="Don't Wait"
        content="You Can Bomb Your Bath Today!"
      />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        m={"auto"}
        gap={4}
        p={4}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image
            src={product.images[0].src}
            m={4}
            w={"100%"}
            borderRadius={"2rem"}
            borderLeft={"5px solid #333b41"}
            boxShadow={"2px 2px 5px 2px #333b41"}
          />
        </Flex>
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          flexDirection={"column"}
          p={4}
          backgroundColor={"#ebebeb"}
          borderRadius={"2rem"}
          borderLeft={"5px solid #333b41"}
          boxShadow={"2px 2px 5px 2px #333b41"}
        >
          <Heading fontWeight={"bold"} fontSize={["lg", "4xl"]}>
            {product.title}
          </Heading>
          <Text fontWeight={"bold"} fontSize={["md", "2xl"]}>
            ${formattedPrice} {product.variants[0].price.currencyCode}
          </Text>
          <Text color={"gray.500"} fontSize={["md", "lg"]}>
            {product.description}
          </Text>
          {/* addItemToCheckout can manage state for product variant selected - quantity is the second argument => default of 1 */}
          <Button
            border={"2px solid black"}
            backgroundColor={"#333b41"}
            color={"white"}
            _hover={{ bg: "#ff8b21", color: "black" }}
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
