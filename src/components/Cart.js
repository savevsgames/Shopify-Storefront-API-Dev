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
  Button,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { formatPrice } from "../utils/utilFunctions";
import { relative } from "path-browserify";

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
            backgroundColor: "#ececec",
            position: "fixed",
            right: "0px",
            top: "0px",
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
              checkout.lineItems.map((item) => {
                const formattedPrice = formatPrice(item.variant.price.amount);
                return (
                  <Flex
                    flexDirection={["column, row"]}
                    key={item.id}
                    gap={1}
                    position={"relative"}
                  >
                    <Flex justifyContent="center" alignItems={"start"} gap={2}>
                      <Icon
                        onClick={() => {
                          removeLineItem(item.id);
                        }}
                        cursor="pointer"
                        position={"absolute"}
                        top={"7%"}
                        left={"3%"}
                        color={"black"}
                        w={"30px"}
                        h={"30px"}
                        border={"2px solid black"}
                        zIndex={"5"}
                        _hover={{
                          color: "#ff8b21",
                          opacity: "100%",
                          border: "2px solid #ff8b21",
                          backgroundColor: "white",
                        }}
                      >
                        <IoMdClose />
                      </Icon>
                    </Flex>

                    <Flex justifyContent="center" alignItems={"center"}>
                      <Image
                        src={item.variant.image.src}
                        style={{
                          border: "2px solid black",
                          margin: "10px",
                          zIndex: "1",
                        }}
                        _hover={{ opacity: "80%" }}
                      />
                    </Flex>
                    <Flex
                      justifyContent="center"
                      alignItems={"center"}
                      position={"absolute"}
                      bottom={"20%"}
                      transform={"translateX(50%)"}
                      right={"50%"}
                      zIndex={"15"}
                    >
                      <Text fontWeight={"bold"}>{item.title}</Text>
                    </Flex>
                    <Flex
                      justifyContent="center"
                      alignItems={"center"}
                      position={"absolute"}
                      bottom={"10%"}
                      transform={"translateX(50%)"}
                      right={"50%"}
                      zIndex={"15"}
                    >
                      <Text fontWeight={"bold"}>
                        {formattedPrice} {item.variant.price.currencyCode}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })
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
                <Button
                  border={"2px solid black"}
                  backgroundColor={"#333b41"}
                  color={"white"}
                  _hover={{ bg: "#ff8b21", color: "black" }}
                >
                  <Link to={checkout.webUrl}>Checkout</Link>
                </Button>
              ) : (
                <Button
                  opacity={"20%"}
                  border={"2px solid black"}
                  backgroundColor={"#333b41"}
                  color={"white"}
                >
                  Checkout
                </Button>
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
