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

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>${product.variants[0].price.amount}</Text>
          <Text>{product.description}</Text>
          {/* addItemToCheckout can manage state for product variant selected - quantity is the second argument => default of 1 */}
          <Button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
