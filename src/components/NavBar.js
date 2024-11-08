import React, { useContext } from "react";

import { ShopContext } from "../context/shopContext";

import { Flex, Text, Icon, Image, Button } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      flexDirection={"row"}
      justifyContent={"space-between"}
      p={"2rem"}
      backgroundColor={"#FFA8E2"}
    >
      <Icon
        onClick={openMenu}
        cursor="pointer"
        style={{ color: "white", width: "30px", height: "30px" }}
      >
        <MdMenu />
      </Icon>
      <Link to="/">
        <Image
          src="https://via.placeholder.com/120x30"
          alt="Logo Placeholder - HOME"
        />
      </Link>
      <Icon
        onClick={openCart}
        cursor="pointer"
        style={{ color: "white", width: "30px", height: "30px" }}
      >
        <IoMdCart />
      </Icon>
    </Flex>
  );
};

export default NavBar;
