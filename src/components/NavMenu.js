import React, { useContext } from "react";
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
  VStack,
  Box,
} from "@chakra-ui/react";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <DrawerRoot
      open={isMenuOpen}
      onOpenChange={(e) => closeMenu(e.isMenuOpen)}
      placement="start"
      size="sm"
    >
      <DrawerBackdrop />

      <DrawerContent
        style={{
          backgroundColor: "#ececec",
          position: "fixed",
          left: "0px",
          minHeight: "50vh",
        }}
      >
        <VStack spacing={10}>
          <DrawerHeader>
            <DrawerTitle>WELCOME TO THE STORE!</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={20}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              border={"2px solid black"}
              backgroundColor={"#333b41"}
              color={"white"}
              onClick={() => {
                closeMenu();
              }}
            >
              Close
            </Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </VStack>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default NavMenu;
