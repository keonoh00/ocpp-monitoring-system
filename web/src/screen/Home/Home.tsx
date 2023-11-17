import React from "react";
import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import CarImage from "../../assets/images/main_car.png";

const Home = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      height={"100vh"}
      backgroundImage={CarImage}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Heading
        fontSize={"4xl"}
        textAlign={"center"}
        justifyContent={"center"}
        marginBottom={10}
        color={"linkedin.100"}
      >
        OCPP Monitoring System
      </Heading>

      <Button
        alignSelf={"center"}
        marginTop={10}
        colorScheme="linkedin"
        size={"lg"}
        onClick={() => {
          window.location.href = "/monitor";
        }}
      >
        Monitor
      </Button>
    </Flex>
  );
};

export default Home;
