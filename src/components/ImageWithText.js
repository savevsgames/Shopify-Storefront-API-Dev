import React from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

const ImageWithText = (props) => {
  const { reverse, image, heading, subHeading, buttonText } = props;
  const reversedSection = reverse ? "row-reverse" : "row";
  const reversedPadding = reverse
    ? { paddingTop: `2rem` }
    : { paddingBottom: `2rem` };

  //   console.log("Image Source: ", image);

  return (
    <Box>
      <Flex
        flexDirection={["column", reversedSection]}
        w={"100%"}
        style={reversedPadding}
        paddingX={["1rem", "2rem"]}
      >
        <Image
          src={image}
          objectFit={"cover"}
          w={["100%", "50%"]}
          _hover={{ opacity: "60%" }}
        />
        <Flex
          w={["100%", "50%"]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={"2rem"}
        >
          <Heading fontSize={["2xl", "4xl"]} fontWeight="bold" p={8}>
            {heading && heading}
          </Heading>
          <Text fontSize={["md", "xl"]} p={8}>
            {subHeading && subHeading}
          </Text>
          <Button
            border={"2px solid black"}
            backgroundColor={"#333b41"}
            color={"white"}
            _hover={{ bg: "#ff8b21", color: "black" }}
          >
            {buttonText || "Shop Now"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
export default ImageWithText;
