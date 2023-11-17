import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex
      direction={"column"}
      paddingInline={2}
      justifyItems={"center"}
      paddingBlock={5}
    >
      <Heading
        color={"red.400"}
        fontSize={"3xl"}
        textAlign={"center"}
        marginBottom={5}
      >
        NotFound
      </Heading>
    </Flex>
  );
};

export default NotFound;
