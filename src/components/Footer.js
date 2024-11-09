import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack, Flex, Icon } from "@chakra-ui/react";
import { GiBalloonDog } from "react-icons/gi";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <Box backgroundColor={"#98a9b3"} color={"black"} fontWeight={"bold"}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
        p={4}
      >
        <VStack>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Image
              src="https://fakeimg.pl/120x120/98a9b3/ffffff?text=LOGO&font=lobster"
              py={2}
            />
          </Flex>
        </VStack>

        <Flex
          p={4}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"#98a9b3"}
        >
          <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <Image
              src="https://fakeimg.pl/60x60/333b41/ffffff?text=Social+ICON&font=bebas"
              boxShadow={"2px 2px 5px 2px #98a9b3"}
              borderRadius={["2rem", "3rem"]}
              border={"2px solid black"}
              cursor={"pointer"}
              _hover={{
                width: "80px",
                height: "80px",
                border: "5px dotted #FF8b21",
              }}
            />
            <Image
              src="https://fakeimg.pl/60x60/333b41/ffffff?text=Social+ICON&font=bebas"
              boxShadow={"2px 2px 5px 2px #98a9b3"}
              borderRadius={["2rem", "3rem"]}
              border={"2px solid black"}
              cursor={"pointer"}
              _hover={{
                width: "80px",
                height: "80px",
                border: "5px dotted #FF8b21",
              }}
            />
            <Image
              src="https://fakeimg.pl/60x60/333b41/ffffff?text=Social+ICON&font=bebas"
              boxShadow={"2px 2px 10px 2px #98a9b3"}
              borderRadius={["2rem", "3rem"]}
              border={"2px solid black"}
              cursor={"pointer"}
              _hover={{
                width: "80px",
                height: "80px",
                border: "5px dotted #FF8b21",
              }}
            />
            <Image
              src="https://fakeimg.pl/60x60/333b41/ffffff?text=Social+ICON&font=bebas"
              boxShadow={"2px 2px 5px 2px #98a9b3"}
              borderRadius={["2rem", "3rem"]}
              border={"2px solid black"}
              cursor={"pointer"}
              _hover={{
                width: "80px",
                height: "80px",
                border: "5px dotted #FF8b21",
              }}
            />
          </Flex>
        </Flex>
        <VStack
          px={6}
          py={2}
          boxShadow={"2px 2px 5px 2px #000000"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"#eeeeee"}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={4}
          >
            <Text fontSize={"md"}>Thanks for shopping with us!</Text>
            <GiBalloonDog style={{ width: "40px", height: "40px" }} />

            <Text fontSize={"sm"}>
              Copyright © {date} Greg Barker's Shopify Store
            </Text>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
};
export default Footer;
