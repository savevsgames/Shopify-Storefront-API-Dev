import React, { useContext } from "react";

import { ShopContext } from "../context/shopContext";

import { Flex, Text, Icon, Image, Button, Badge, Box } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout, isLoading } = useContext(ShopContext);

  return (
    <Flex
      flexDirection={"row"}
      justifyContent={"space-between"}
      p={"2rem"}
      backgroundColor={"#98a9b3"}
    >
      <Icon
        onClick={() => {
          openMenu();
        }}
        cursor="pointer"
        style={{ color: "white", width: "30px", height: "30px" }}
      >
        <MdMenu />
      </Icon>
      <Link to="/">
        <Image
          src="https://fakeimg.pl/60x60/98a9b3/ffffff?text=LOGO&font=lobster"
          alt="Logo Placeholder - HOME"
          transform={"scale(2)"}
          objectFit={"contain"}
        />
      </Link>
      <Flex flexDirection={"row"} gap={2}>
        <Icon
          onClick={() => {
            openCart();
          }}
          cursor="pointer"
          style={{ color: "white", width: "30px", height: "30px" }}
        >
          <IoMdCart />
        </Icon>
        <Badge
          backgroundColor={"#ffffff"}
          border={"2px solid #96ee7b"}
          borderRadius={"50%"}
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isLoading && checkout.lineItems.length
            ? checkout.lineItems.length
            : 0}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default NavBar;
