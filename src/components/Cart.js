import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerActionTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Grid,
  Text,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const { closeCart, isCartOpen, checkout, removeLineItem } =
    useContext(ShopContext);

  //   console.log("Checkout", checkout);

  return (
    <>
      <DrawerRoot
        open={isCartOpen}
        onOpenChange={(e) => closeCart(e.isCartOpen)}
        placement={"end"}
        size={"sm"}
      >
        <DrawerBackdrop />

        <DrawerContent
          style={{
            backgroundColor: "#FFCC55",
            position: "fixed",
            right: "0px",
            minHeight: "50vh",
          }}
        >
          <DrawerHeader>
            <DrawerTitle>Cart</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Welcome to your cart. You can see the items you have added here.
            </p>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" key={item.id} gap={1}>
                  <Flex justifyContent="center" alignItems={"center"}>
                    <Icon
                      onClick={() => {
                        removeLineItem(item.id);
                      }}
                      cursor="pointer"
                      style={{ color: "white", width: "30px", height: "30px" }}
                    >
                      <IoMdClose />
                    </Icon>
                  </Flex>

                  <Flex justifyContent="center" alignItems={"center"}>
                    <Image
                      src={item.variant.image.src}
                      style={{ border: "2px solid black" }}
                    />
                  </Flex>
                  <Flex justifyContent="center" alignItems={"center"}>
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex justifyContent="center" alignItems={"center"}>
                    <Text>
                      {item.variant.price.amount}{" "}
                      {item.variant.price.currencyCode}
                    </Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                padding={10}
              >
                <Text>Your cart is empty</Text>
              </Flex>
            )}
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              {checkout.lineItems?.length ? (
                <Button variant="outline">
                  <Link to={checkout.webUrl}>Checkout</Link>
                </Button>
              ) : (
                <Button opacity={"20%"}>Checkout</Button>
              )}
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};

export default Cart;
