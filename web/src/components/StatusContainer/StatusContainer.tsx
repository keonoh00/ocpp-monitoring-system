import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AutoScrollContainer from "../AutoScrollContainer/AutoScrollContainer";
import useClientStatus from "../../hooks/useClientStatus";

const HEADER = {
  id: "ID",
  status: "Status",
  details: "Details",
};

const ID_COLUMN_STYLE_PROPS = {
  width: "20%",
  borderRight: "1px",
};

const STATUS_COLUMN_STYLE_PROPS = {
  width: "30%",
  borderRight: "1px",
};

const DETAILS_COLUMN_STYLE_PROPS = {
  width: "50%",
};

const StatusContainer = () => {
  const { data: status, isLoading: isLoadingStatus } = useClientStatus();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      flex={1}
      margin={1}
      padding={2}
      borderColor={"gray.400"}
    >
      <Flex
        direction={"row"}
        alignItems={"center"}
        padding={1}
        marginBottom={2}
      >
        <Flex direction={"column"} {...ID_COLUMN_STYLE_PROPS}>
          <Box>
            <Heading textAlign={"center"} size={"sm"}>
              {HEADER.id}
            </Heading>
          </Box>
        </Flex>

        <Flex direction={"column"} {...STATUS_COLUMN_STYLE_PROPS}>
          <Box>
            <Heading textAlign={"center"} size={"sm"}>
              {HEADER.status}
            </Heading>
          </Box>
        </Flex>
        <Flex direction={"column"} {...DETAILS_COLUMN_STYLE_PROPS}>
          <Box>
            <Heading textAlign={"center"} size={"sm"}>
              {HEADER.details}
            </Heading>
          </Box>
        </Flex>
      </Flex>

      <AutoScrollContainer height={230}>
        {isLoadingStatus ? (
          <Text textAlign={"center"} fontSize={"xs"}>
            Loading...
          </Text>
        ) : status.length === 0 ? (
          <Text textAlign={"center"} fontSize={"xs"}>
            No Status
          </Text>
        ) : (
          <>
            {status.map((status, idx) => (
              <Flex
                key={idx}
                direction={"row"}
                alignItems={"center"}
                padding={1}
              >
                <Flex direction={"column"} {...ID_COLUMN_STYLE_PROPS}>
                  <Text textAlign={"center"} fontSize={"xs"}>
                    Charger: {status.id}
                  </Text>
                </Flex>

                <Flex direction={"column"} {...STATUS_COLUMN_STYLE_PROPS}>
                  <Text textAlign={"center"} fontSize={"xs"}>
                    {status?.status || ""}
                  </Text>
                </Flex>
                <Flex direction={"column"} {...DETAILS_COLUMN_STYLE_PROPS}>
                  <Text textAlign={"center"} fontSize={"xs"}>
                    {status?.value || ""}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </>
        )}
      </AutoScrollContainer>
    </Box>
  );
};

export default StatusContainer;
