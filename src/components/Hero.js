import React, { useContext } from "react";
import { Box, Text, Image, Center, Button } from "@chakra-ui/react";
// import heroImg from "../assets/images/hero_img.png";

const Hero = () => {
  const heroImg =
    "https://fakeimg.pl/1200x400/333b41/ffffff?text=BETTER+BATH+BALLS&font=bebas";
  return (
    <Box
      backgroundColor={"#ffffff"}
      w={"100vw"}
      h={"60%"}
      position={"relative"}
    >
      <Center>
        <Image
          src={heroImg}
          marginX={"auto"}
          marginY={"2rem"}
          objectFit={"contain"}
          opacity={"40%"}
          w={"80vw"}
          borderRadius={["1rem", "2rem"]}
          border={"2px solid black"}
          className="shadow-inset-center"
        />
      </Center>
      <Center>
        <Text
          fontSize={["2xl", "5xl"]}
          fontWeight="bold"
          p={8}
          position={"absolute"}
          bottom={["2rem", "6rem"]}
          className="scale-up-center"
        >
          Welcome to the Store!
        </Text>
        <Button
          fontWeight={"bold"}
          fontSize={["1rem", "2rem"]}
          position={"absolute"}
          bottom={["-1rem", "4rem"]}
          backgroundColor={"#e0e0e0"}
          color={["#1a1f22", "#333B41"]}
          border={"2px solid black"}
          borderRadius={["5px", "10px"]}
          opacity={"80%"}
          padding={["1rem", "2rem"]}
          _hover={{ bg: "#333B41", color: "white", opacity: "100%" }}
        >
          <a href="#products">Grab Your Balls Now!</a>
        </Button>
      </Center>
    </Box>
  );
};
export default Hero;
