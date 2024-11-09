import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const TextHeading = (props) => {
  const { heading, content } = props;
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        p={4}
        m={4}
      >
        <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} fontWeight={"bold"}>
          {heading}
        </Text>
        <Text fontSize={["md", "lg", "xl", "2xl"]}>{content}</Text>
      </Flex>
    </Box>
  );
};
export default TextHeading;
