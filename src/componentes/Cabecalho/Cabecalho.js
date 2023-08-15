import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";

const Cabecalho = () => {
  return (
    <Box mt={2} p={2}>
      <Flex align="center">
        <Link to="/">
        <Text ml={1} mt={2} hover={{"cursor" : "hover"}}fontSize="md" fontWeight="bold">
          Bernardo Andrade
        </Text>
        </Link>
        <Spacer />
        <Button fontSize="13" as={Link} to="/projetos" colorScheme="gray" mr={4}>
          Projects
        </Button>
        <Button fontSize="13" as={Link} to="/sobre" colorScheme="gray" mr={4}>
          About
        </Button>
        <Button fontSize="13" as={Link} to="/habilidades" colorScheme="gray" mr={4}>
          Skills
        </Button>
      </Flex>
    </Box>
  );
};

export default Cabecalho;
